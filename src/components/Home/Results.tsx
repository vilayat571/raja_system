import SingleFeature from "./SingleFeature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IResults, resultsFeatures } from "../../constants/data";

function Results() {
  return (
    <main
      className=" xl:px-36 lg:px-48 md:px-24 sm:px-4
    bg-[#EDF2F5] py-24 mt-10 mb-20
    flex flex-col
    "
    >
      <p
        className="mb-12 
    font-black text-left flex items-center"
      >
        <span className="text-black  
        xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl ">Our results prove our success! </span>
        <img
          src="https://em-content.zobj.net/source/apple/391/rocket_1f680.png"
          alt=""
          className="ml-4 w-12 xl:inline md:inline lg:inline sm:hidden"
        />
      </p>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 text-black sm:grid-cols-1 gap-4">
        {resultsFeatures.map((item: IResults) => {
          return (
            <SingleFeature
              key={item.id}
              description={item.description}
              title={item.title}
              icon={
                <FontAwesomeIcon
                  icon={item.icon}
                  size="3x"
                  style={{ fill: "black" }}
                />
              }
            />
          );
        })}
      </div>
    </main>
  );
}

export default Results;
