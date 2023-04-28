import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";

export default function HomePage({product}) {
  return (
    <>
      <Header />
      <Featured product={product}/>
    </>
  )
}

export async function getServerSideProps() {
  const featuredProductId = "64444035f3ce0dba7403fd4f";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: {product: JSON.parse(JSON.stringify(product))},
  }
}