import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/head/hero/Hero";
import Nav from "./components/head/Nav";
import StatusBar from "./components/head/StatusBar";
import PricingBlock from "./components/pricing/PricingBlock";
import Steps from "./components/steps/Steps";
import Workflow from "./components/workflow/Workflow";
import Footer from "./components/footer/Footer";
import Toolblock from "./components/tools/Toolblock";
import { ToastContainer } from "react-toastify";

const pricingData = fetch("/Json/pricing.json").then((response) =>
  response.json(),
);
const toolData = fetch("/Json/tools.json").then((response) =>
  response.json(),
);

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productToAdd) => {
    const isAlreadyInCart = cartItems.find(
      (item) => item.id === productToAdd.id,
    );
    if (!isAlreadyInCart) {
      setCartItems([...cartItems, productToAdd]);
    }
  };

  return (
    <>
      <Nav cartItems={cartItems}></Nav>
      <Hero></Hero>
      <StatusBar />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Toolblock
          toolData={toolData}
          cartItems={cartItems}
          setCartItems={setCartItems}
          handleAddToCart={handleAddToCart}
        ></Toolblock>
      </Suspense>
      <Steps></Steps>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <PricingBlock pricingData={pricingData}></PricingBlock>
      </Suspense>

      <Workflow></Workflow>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
