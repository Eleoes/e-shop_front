import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import { BiCart } from "react-icons/bi";
import ButtonLink from "./ButtonLink";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 3rem;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: .8rem;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 40px;
    img {
        max-width: 100%;
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
                                <ButtonLink href={'/products/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                                <Button primary size="l" >
                                    <BiCart />
                                    Add to cart
                                </Button>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src="https://pngimg.com/uploads/macbook/macbook_PNG35.png" />
                    </Column>
                </ColumnsWrapper>
                
            </Center>
        </Bg>
    );
}