import styled from "styled-components";
import Header from "@/components/Header";
import Center from "@/components/Center";
import Button from "@/components/Button";
import Table from "@/components/Table";
import Input from "@/components/Input";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr .7fr;
    gap: 40px;
    margin-top: 40px;
`;

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
`;

const ProductInfoCell = styled.td`
    padding: 10px 0;
`;

const ProductImgBox = styled.div`
    width: 130px;
    height: 130px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 130px;
        max-height: 130px;
        border-radius: 10px;
    }
`;

const QuantityLabel = styled.span`
    padding: 0 3px; 
`;

const CityHolder = styled.div`
    display: flex;
    gap: 5px;
`;

export default function CartPage() {
    const {cartProducts, addProduct, removeProduct} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() =>{
        if (cartProducts.length > 0) {
            axios.post('/api/cart', {ids:cartProducts})
            .then(response => {
                setProducts(response.data);
            })
        } else {
            setProducts([]);
        }
    }, [cartProducts]);

    function moreOfThisProduct(id) {
        addProduct(id);
    }

    function lessOfThisProduct(id) {
        removeProduct(id);
    }

    let total = 0;
    for (const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price;
    }

    return (
        <>
            <Header />
            <Center>
                <ColumnsWrapper>
                    <Box>
                        <h2>Cart</h2>
                        {!cartProducts?.length && (
                            <div>Your cart is empty</div>
                        )}
                        {products?.length > 0 && (
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr key={product._id}>
                                            <ProductInfoCell>
                                                <ProductImgBox>
                                                    <img src={product.images[0]} alt=""/>
                                                </ProductImgBox>
                                                {product.title}
                                            </ProductInfoCell>
                                            <td>
                                                <Button onClick={() => lessOfThisProduct(product._id)}>-</Button>
                                                <QuantityLabel>
                                                    {cartProducts.filter(id => id === product._id).length}
                                                </QuantityLabel>
                                                <Button onClick={() => moreOfThisProduct(product._id)}>+</Button>
                                            </td>
                                            <td>
                                            ${cartProducts.filter(id => id === product._id).length * product.price}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>${total}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        )}
                    </Box>
                    {!!cartProducts?.length && (
                        <Box>
                            <h2>Order Information</h2>
                            <form method="post" action="/api/checkout">
                                <Input type="text" 
                                    placeholder="Name" 
                                    value={name}
                                    name="name"
                                    onChange={e => setName(e.target.value)} />
                                <Input type="text" 
                                    placeholder="Email" 
                                    value={email}
                                    name="email"
                                    onChange={e => setEmail(e.target.value)}/>
                                <Input type="text" 
                                    placeholder="Street Address" 
                                    value={streetAddress}
                                    name="streetAddress"
                                    onChange={e => setStreetAddress(e.target.value)}/>
                                <CityHolder>
                                    <Input type="text" 
                                        placeholder="City" 
                                        value={city}
                                        name="city"
                                        onChange={e => setCity(e.target.value)}/>
                                    <Input type="text" 
                                        placeholder="Zip code" 
                                        value={zipCode}
                                        name="zipCode"
                                        onChange={e => setZipCode(e.target.value)}/>
                                </CityHolder>
                                <Input type="text" 
                                    placeholder="Country" 
                                    value={country}
                                    name="country"
                                    onChange={e => setCountry(e.target.value)}/>
                                <Button block primary type="submit">Checkout</Button>
                            </form>
                        </Box>
                    )}
                </ColumnsWrapper>
            </Center>
        </>
    );
}