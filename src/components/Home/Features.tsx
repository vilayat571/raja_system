import { featuresData, IFeatures } from "../../constants/Features/data";
import Feature from "./Feature";

function Features() {
  return (
    <main id="quality" className="px-12 my-16">
      <p className="text-3xl text-center text-black font-semibold tracking-wider
      ">
        Our quality!
      </p>
      <div className=" grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 ">
        {featuresData.map((item: IFeatures) => (
          <Feature
            key={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </main>
  );
}

export default Features;
