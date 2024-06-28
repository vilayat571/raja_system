import SingleMenu from "./SingleMenu";
import { menuData } from "../../constants/data";

const Menucmps = () => {
  return (
    <div
      className="grid 
    gap-8 gap-y-6 text-center mt-10 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3"
    >
      {menuData.map((menu) => (
        <SingleMenu
          key={menu.id}
          img={menu.img}
          price={menu.price}
          text={menu.text}
          title={menu.title}
        />
      ))}
    </div>
  );
};

export default Menucmps;
