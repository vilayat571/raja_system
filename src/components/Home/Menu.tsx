import Title from "./Title";
import Menucmps from "./Menucmps";
import Linkto from "./Linkto";

function Menu() {
  return (
    <main
      id="menu"
      className="bg-[#F9F9FF] py-20 my-10
  xl:px-[400px] lg:px-32 gap-4 md:px-20 sm:px-4 flex flex-col items-center
  "
    >
      <Title />
      <Menucmps />
      <Linkto />
    </main>
  );
}

export default Menu;
