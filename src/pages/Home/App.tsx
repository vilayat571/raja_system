import Features from "../../components/Home/Features";
import IntroDiv from "../../components/Home/IntroDiv";
import Order from "../../components/Home/Order";
import Promotion from "../../components/Home/Promotion";
import Results from "../../components/Home/Results";

const App = () => {
  return (
    <main>
      <IntroDiv />
      <Promotion />
      <Features />
      <Order />
      <Results />
    </main>
  );
};

export default App;
