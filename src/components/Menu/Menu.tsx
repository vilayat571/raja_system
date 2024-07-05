import Title from "./Title";
import Linkto from "../Home/Hreflinks/Linkto";
import SEO from "../../SEO/SEO";
import React from "react";
import Menucmps from "./Menucmps";

function Menu() {
  return (
    <React.Fragment>
      <SEO
        key={"4"}
        title="Raja Menu: A Fusion of Flavors"
        description="Discover our delectable menu featuring a unique blend of Indian and Azerbaijani specialties. Explore our wide range of dishes catering to all palates."
        name="’Raja Menu: A Fusion of Flavors’"
        type="Informational"
        keywords="indian menu baku, azerbaijani menu baku, fusion menu restaurant, raja restaurant menu, vegetarian indian food baku, non vegetarian indian food baku"
      />
      <main
        id="raja-menu"
        className="bg-[#fff] py-20 my-10
  xl:px-32 lg:px-20 gap-4 md:px-20 sm:px-4 flex flex-col items-center
  "
      >
        <Title />
        <Menucmps />
        <Linkto />
      </main>
    </React.Fragment>
  );
}

export default Menu;
