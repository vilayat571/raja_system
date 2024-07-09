import Features from "../../components/Features/Features.tsx";
import IntroDiv from "../../components/Home/Header/IntroDiv.tsx";
import Menu from "../../components/Menu/Menu.tsx";
import Order from "../../components/Features/Order.tsx";
import Promotion from "../../components/Features/Promotion.tsx";
import Layout from "../../layout/Layout";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Teams from "../../components/Teams/Teams.tsx";
import Results from "../../components/Results/Results.tsx";
import Gallery from "../../components/Gallery/Gallery.tsx";
import Embed from "../../components/Footer/Embed.tsx";

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
      <Embed />
    </Layout>
  );
};

export default App;
