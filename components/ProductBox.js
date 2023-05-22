import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const ProductWrapper = styled.div`

`;

const WhiteBox = styled(Link)`
    background-color: #fff;
    padding: 20px; 
    height: 150px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img {
        max-width: 100%;
        max-height: 150px;
        border-radius: 10px;
    }
`;

const Title = styled(Link)`
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
    color: inherit;
    text-decoration: none;
`;

const ProductInfoBox = styled.div`
    margin-top: 10px;
`;

const PriceRow = styled.div`
    display: block;
    @media screen and (min-width: 768px){
        display: flex;
        gap: 10px;
    }
    align-items: center;
    justify-content: space-between;
    margin-top: 2px;
`;

const Price = styled.span`
    font-size: 1.25rem;
    font-weight: bold;
    display: flex;
    flex-direction: row-reverse;
    @media screen and (min-width: 768px){
        font-size: 1.5rem;
        display: static;
    }
`;

export default function ProductBox({_id, title,description,price, images}) {
    const {addProduct} = useContext(CartContext);
    const url = '/product/' + _id;
    return (
        <ProductWrapper>
            <WhiteBox href={url}>
                <div>
                    <img src={images[0]} alt="" />
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title href={url}>{title}</Title>
                <PriceRow>
                    <div>
                        <Price>${price}</Price>
                    </div>
                    <Button block onClick={() => addProduct(_id)}primary outline>Add to cart</Button>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    );
}