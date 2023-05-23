import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import Button from "@/components/Button";
import ProductImages from "@/components/ProductImages";
import {mongooseConnect} from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import { BiCart } from "react-icons/bi";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

const ColWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-top: 40px;
    @media screen and (min-width: 768px){
        grid-template-columns: .8fr 1.2fr;
    }
`;

const PriceRow = styled.div`
    gap: 20px;
    display: flex;
    align-items: center;
`;

const Price = styled.span`
    font-size: 1.5rem;
`;

export default function ProductPage({product}) {
    const {addProduct} = useContext(CartContext);

    return (
        <>
            <Header/>
            <Center>
                <ColWrapper>
                    <WhiteBox>
                        <ProductImages images={product.images} />
                    </WhiteBox>
                    <div>
                        <Title>{product.title}</Title>
                        <p>{product.description}</p>
                        <PriceRow>
                            <Price>${product.price}</Price>
                            <Button 
                                primary 
                                onClick={() => addProduct(product._id)}
                            ><BiCart />Add to cart
                            </Button>
                        </PriceRow>
                    </div>
                </ColWrapper>
                
            </Center>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://e-shop-front.netlify.app/products')
    const products= await res.json()

    const paths = products.map((product) => ({
    params: { id: product._id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    await mongooseConnect();
    const {id} = context.query;
    const product = await Product.findById(id);

    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }

}