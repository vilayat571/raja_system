import { IResults, resultsFeatures } from "../../constants/Results/data";
import SingleFeature from "../Results/SingleFeature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
    font-black text-center w-full  justify-center flex items-center"
      >
        <span
          className="text-black  text-center
        xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl "
        >
          Our results!
        </span>
        
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
