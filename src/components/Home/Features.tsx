import Feature from "./Feature";
import delivery from "../../assets/images/delivery.png";
import foods from "../../assets/images/foods.png";
import menu from "../../assets/images/menu.png";

function Features() {
  return (
    <main
      className="xl:px-36 lg:px-36 md:px-24 sm:px-8  mb-16 mt-6
    flex justify-between items-start 
    sm:flex-col xl:flex-row md:flex-col lg:flex-row "
    >
      <Feature
        img={foods}
        title="Quality Foods"
        text="Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Travelling by introduced of mr terminated."
      />
      <Feature
        img={delivery}
        title="Fast delivery"
        text="Craving speed? ⚡ Get your food delivered in a flash with code FAST4YOU for  off your next order! "
      />
      <Feature
        img={menu}
        title="Rich menu"
        text="Looking for delicious and easy recipes? Quality Foods has you covered! Explore our recipe section online ."
      />
    </main>
  );
}

export default Features;
