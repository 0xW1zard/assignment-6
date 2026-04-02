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

const pricingData = fetch("/public/Json/pricing.json").then((response) =>
  response.json(),
);
 const toolData = fetch("/public/Json/tools.json").then((response) =>
  response.json(),
);

function App() {
  
  

  return (
    <>
      <Nav></Nav>
      <div className="divider -mt-1"></div>
      <Hero></Hero>
      <StatusBar />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Toolblock toolData={toolData}></Toolblock>
      </Suspense>
      <Steps></Steps>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <PricingBlock pricingData={pricingData}></PricingBlock>
      </Suspense>

      <Workflow></Workflow>
      <Footer></Footer>
    </>
  );
}

export default App;
