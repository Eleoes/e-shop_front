import styled from "styled-components";
import Header from "@/components/Header";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

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

export default function CartPage() {
    const {cartProducts} = useContext(CartContext);

    return (
        <>
            <Header />
            <Center>
                <ColumnsWrapper>
                    <Box>
                        {!cartProducts?.length && (
                            <div>Your cart is empty</div>
                        )}
                    </Box>
                    <Box>
                        <h2>Order Information</h2>
                        <input type="text" placeholder="Address" />
                        <input type="text" placeholder="Address 2" />
                        <Button block primary>Checkout</Button>
                    </Box>
                </ColumnsWrapper>
            </Center>
        </>
    );
}