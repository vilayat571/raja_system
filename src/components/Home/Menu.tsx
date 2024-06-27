import Title from "./Title";
import Menucmps from "./Menucmps";
import Linkto from "./Linkto";

function Menu() {
  return (
    <main
      id="menu"
      className="bg-[#fff] py-20 my-10
  xl:px-32 lg:px-20 gap-4 md:px-20 sm:px-4 flex flex-col items-center
  "
    >
      <Title />
      <Menucmps />
      <Linkto />
    </main>
  );
}

export default Menu;
