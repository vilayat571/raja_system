import file from "../../assets/images/plate.png";
import Button from "./Button";

function Order() {
  return (
    <main
    id="more"
      className="xl:px-36 lg:px-48 md:px-24 sm:px-8 bg-[#F0BD6C] py-24 mt-10 mb-20
     grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1   "
    >
      <img
        src={file}
        className="xl:w-[410px] col-span-1 lg:w-[410px] md:w-[350px] sm:w-[310px] xl:h-[410px] lg:h-[410px] md:h-[350px] sm:h-[310px] object-cover"
        alt="the image of restaurant meal"
      />

      <div className="mt-6 col-span-1  ">
        <p className="xl:text-[45px] lg:text-[40px] md:text-[36px] sm:text-[32px] font-bold 
       xl:leading-[55px] lg:leading-[55px] md:leading-[55px] sm:leading-[45px]  
       text-black">
          Explore <br /> Amazing <br /> Discounts!
        </p>
        <p
          className="xl:leading-[30px] lg:leading-[30px] sm:leading-[32px] md:leading-[30px]
         w-full text-black xl:text-[18px] lg:text-[18px] md:text-[17px] sm:text-[16px]  font-bold mb-9 mt-4 "
        >
          Save some money and try new places to eat! Restaurants sometimes offer
          deals to get you in the door. This could be a percentage off your
          bill, like 10% cheaper, or a buy one, get one free deal on entrees.
          Lunch specials are another way to save, with discounted meals during
          the lunch rush.
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
