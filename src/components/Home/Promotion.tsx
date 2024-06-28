//import file from "../../assets/images/file.png";
import Button from "./Button";

function Promotion() {
  return (
    <main
      id="promotion"
      className="bg-[#F9F9FF] py-20 my-10
    xl:px-[400px] lg:px-32 gap-4 md:px-32 sm:px-4
    grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2"
    >
      <img
        src={
          "https://monyo.az/uploads2/uploads2024-05/a_1983_202405060007201190313090.jpg"
        }
        className=" col-span-1 object-cover rounded-2xl
        xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[340px]
          xl:h-[500px] lg:h-[500px] md:h-[500px] sm:h-[400px]  "
        alt="the image of restaurant meal"
      />
      <div className=" col-span-1 text-3xl text-black  relative top-16  ">
        <p className="text-black text-[16px] ">About us</p>
        <p
          className="xl:text-[40px] lg:text-[40px] md:text-[36px] sm:text-[32px] font-bold 
        xl:leading-[50px] lg:leading-[50px] md:leading-[50px] sm:leading-[46px] text-black"
        >
          Discover Indian best
          <br />
          meals in restaurant
        </p>
        <p className="xl:text-lg lg:text-lg md:text-lg sm:text-[16px] text-[#414141] mt-6  xl:w-11/12">
          Welcome to RaJa, a culinary journey where the vibrant flavors of India
          meet the rich traditions of Azerbaijan. We are passionate about
          bringing you an unparalleled dining experience, offering a taste of
          both the East and the Caucasus.
        </p>
        <Button
          text="Discover more"
          style="text-[16px] text-[#1A1A1A] px-3 py-3 rounded border-[#1a1a1a] border-[1px]"
          href="/"
        />
      </div>
    </main>
  );
}

export default Promotion;
