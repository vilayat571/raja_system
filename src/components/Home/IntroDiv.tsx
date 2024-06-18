import IntroCover from "./IntroCover";
import Header from "./Header";
import Menu from "./Menu";

function IntroDiv() {
  return (
    <div className="px-0 border">
      <IntroCover />
      <Header />
      <Menu />
    </div>
  );
}

export default IntroDiv;
