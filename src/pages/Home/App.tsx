import Features from "../../components/Home/Features";
import IntroDiv from "../../components/Home/IntroDiv";
import Menu from "../../components/Home/Menu";
import Order from "../../components/Home/Order";
import Promotion from "../../components/Home/Promotion";
import Layout from "../../layout/Layout";
//import Results from "../../components/Home/Results";

const App = () => {
  return (
    <Layout>
      <main className=" overflow-hidden tracking-widest ">
        <IntroDiv />
        <Promotion />
        <Features />
        <Order />
        <Menu />
      </main>
    </Layout>
  );
};

export default App;
