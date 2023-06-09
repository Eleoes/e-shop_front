import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import { BiCart } from "react-icons/bi";
import ButtonLink from "./ButtonLink";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import Image from "next/image";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 2rem;
    @media screen and (min-width: 768px){
        font-size: 3rem;
    }
`;

const Desc = styled.p`
    color: #aaa;
    font-size: .8rem;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    img {
        max-width: 100%;
        height: 200px;
        display: block;
        margin: 0 auto;
    }
    div:nth-child(1) {
        order: 2;
    }

    @media screen and (min-width: 768px){
        grid-template-columns: .9fr 1.1fr;
        div:nth-child(1) {
            order: 0;
        }
        img {
            max-width: 100%;
        }
    }
`;

const Column = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: .5rem;
    margin-top: 2rem;
`;

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext);

    function addFeaturedToCart() {
        addProduct(product._id);
    }
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>
                                {product.description}
                            </Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                                <Button primary size="l" onClick={addFeaturedToCart}>
                                    <BiCart />
                                    Add to cart
                                </Button>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <Image 
                            src="/macbook_PNG35.png"  
                            alt=""
                            width="300"
                            height="200"/>
                    </Column>
                </ColumnsWrapper>
                
            </Center>
        </Bg>
    );
}