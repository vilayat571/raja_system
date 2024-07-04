import Features from "../../components/Home/Features";
import IntroDiv from "../../components/Home/Header/IntroDiv.tsx";
import Menu from "../../components/Home/Menu";
import Order from "../../components/Home/Order";
import Promotion from "../../components/Home/Promotion";
import Layout from "../../layout/Layout";
import Results from "../../components/Home/Results";
import Gallery from "../../components/Home/Gallery";
import Teams from "../../components/Home/Teams";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <IntroDiv />
      <Promotion />
      <Features />
      <Order />
      <Menu />
      <Teams />
      <Results />
      <Gallery />
    </Layout>
  );
};

export default App;
