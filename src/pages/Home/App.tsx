import Features from "../../components/Home/Features";
import IntroDiv from "../../components/Home/IntroDiv";
import Menu from "../../components/Home/Menu";
import Order from "../../components/Home/Order";
import Promotion from "../../components/Home/Promotion";
//import Results from "../../components/Home/Results";

const App = () => {
  return (
    <main>
      <IntroDiv />
      <Promotion />
      <Features />
      <Order />
 
      <Menu />
    </main>
  );
};

export default App;
