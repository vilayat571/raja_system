import { menuData } from "../../constants/Menu/data";
import SingleMenu from "./SingleMenu";


const Menucmps = () => {
  return (
    <div
      className="grid 
    gap-8  text-center mt-12 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3"
    >
      {menuData.map((menu) => (
        <SingleMenu
        id={menu.id}
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
