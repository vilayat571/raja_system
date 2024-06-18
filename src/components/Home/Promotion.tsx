import file from "../../assets/images/file.png";
import Button from "./Button";

function Promotion() {
  return (
    <main className="xl:px-36 lg:px-36 md:px-24 sm:px-8 bg-[#F9F9FF] py-16  flex sm:flex-col xl:flex-row md:flex-col lg:flex-row justify-between items-start my-24">
      <img
        src={file}
        className="w-[459px] h-[542px] "
        alt="the image of restaurant meal"
      />

      <div className="mt-16 ">
        <p className="text-black text-regular mb-2 font-bold">About us</p>
        <p className="xl:text-[40px] lg:text-[40px] md:text-[36px] sm:text-[32px] font-bold leading-[50px] text-black">
          Discover Indian best
          <br />
          foods in our restaurant
        </p>
        <p className="text-lg text-[#414141] mt-6">
          Welcome to RaJa, a culinary journey where the <br /> vibrant flavors
          of India meet the rich traditions of <br /> Azerbaijan. We are
          passionate about bringing <br /> you an unparalleled dining
          experience, offering a <br /> taste of both the East and the Caucasus.
        </p>
        <Button
          text="Discover more"
          style="text-regular text-[#1A1A1A] px-3 py-3 rounded border-[#1a1a1a] border-[1px]"
          href="/"
        />
      </div>
    </main>
  );
}

export default Promotion;
