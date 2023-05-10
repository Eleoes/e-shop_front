import styled from "styled-components";
import Center from "@/components/Center";
import ProductBox from "@/components/ProductBox";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    padding-top: 20px;
`;

export default function NewProducts({products}) {
    return (
        <Center>
            <h2>New Arrivals</h2>
            <ProductsGrid>
                {products?.length > 0 && products.map(product => (
                    <ProductBox {...product}/>
                ))}
            </ProductsGrid>
        </Center>
    );
}