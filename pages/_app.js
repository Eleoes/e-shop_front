import { createGlobalStyle } from "styled-components"
import { CartContextProvider } from "@/components/CartContext";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Poppins:ital,wght@0,400;0,500;0,600;1,200&display=swap');

  body {
    background-color: #eee;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif; 
  }
`;


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  )
}
