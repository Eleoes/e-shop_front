import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

export default function NewProducts({products}) {
    return (
        <Center>
            <h2>New Arrivals</h2>
            <ProductsGrid products={products}/>
        </Center>
    );
}