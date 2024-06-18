import file from "../../assets/images/plate.png";
import Button from "./Button";

function Order() {
  return (
    <main
      className="xl:px-36 lg:px-48 md:px-24 sm:px-8 bg-[#F0BD6C] py-24 mt-10 mb-20
     flex justify-between items-start
      sm:flex-col xl:flex-row md:flex-col lg:flex-row  "
    >
      <img
        src={file}
        className="xl:w-[410px] lg:w-[410px] md:w-[350px] sm:w-[310px] xl:h-[410px] lg:h-[410px] md:h-[350px] sm:h-[310px] object-cover"
        alt="the image of restaurant meal"
      />

      <div className="mt-6 ">
        <p className="xl:text-[45px] lg:text-[45px] md:text-[36px] sm:text-[32px] font-bold leading-[50px] text-black">
          Explore <br /> Irresistible <br /> Promotions!
        </p>
        <p className="leading-[25px] text-black font-bold mb-12 my-4">
          Contrasted dissimilar get joy you instrument out <br /> reasonably.
          Again keeps at no meant stuff. To <br /> perpetual do existence
          northward as difficult <br /> preserved daughters. Continued at up to{" "}
          <br /> zealously necessary.
        </p>
        <Button
          text="Order"
          style="text-regular text-[#1A1A1A] px-8 py-3 rounded bg-black text-white"
          href="/"
        />
      </div>
    </main>
  );
}

export default Order;
