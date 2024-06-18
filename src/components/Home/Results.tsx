import { FaUser } from "react-icons/fa6";

function Results() {
  return (
    <main
      className="xl:px-36 lg:px-48 md:px-24 sm:px-8 bg-[#EDF2F5] py-24 mt-10 mb-20
    grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 text-black sm:grid-cols-1 gap-4"
    >
      <div className="col-span-1 bg-white h-[222px] rounded-xl">

        <div className="bg-[#0f1e27] p-8 w-20 h-auto  flex justify-center items-center border rounded-full">
          <FaUser size={50} style={{ fill: "black" }} />
        </div>


      </div>
    </main>
  );
}

export default Results;
