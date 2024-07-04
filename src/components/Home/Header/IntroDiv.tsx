import React from "react";
import Header from "./Header";
import IntroCover from "./IntroCover";
import SEO from "../../../SEO/SEO";

function IntroDiv() {
  return (
    <React.Fragment>
      <SEO
        key={"2"}
        title="Raja - Indian & Azerbaijani Fusion Cuisine"
        description="Experience an unparalleled culinary journey blending the vibrant flavors of India with the rich traditions of Azerbaijan. Discover the best Indian meals in a unique East-meets-Caucasus dining experience."
        name="’Raja - Indian & Azerbaijani Fusion Cuisine’"
        type="Informational"
        keywords="indian food, azerbaijani food, fusion cuisine, baku restaurant, indian restaurant baku, raja restaurant"
      />
      <IntroCover />
      <Header />
    </React.Fragment>
  );
}

export default IntroDiv;
