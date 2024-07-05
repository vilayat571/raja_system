import bryani from '../../assets/images/bryani.jpg'
import React from "react";
import Button from "../Home/Hreflinks/Button";
import SEO from "../../SEO/SEO";

function Promotion() {
  return (
    <React.Fragment>
      <SEO
        key={"3"}
        title="Raja - Indian & Azerbaijani Fusion Cuisine"
        description="Experience an unparalleled culinary journey blending the vibrant flavors of India with the rich traditions of Azerbaijan. Discover the best Indian meals in a unique East-meets-Caucasus dining experience."
        name="’Raja - Indian & Azerbaijani Fusion Cuisine’"
        type="Informational"
        keywords="indian food, azerbaijani food, fusion cuisine, baku restaurant, indian restaurant baku, raja restaurant"
      />
      <main
        id="raja-about"
        className="bg-[#F9F9FF] py-20 mb-10
    xl:px-[400px] lg:px-32 gap-4 md:px-32 sm:px-4 gap-y-12
    grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2"
      >
        <div
          data-aos="fade-right"
          className=" col-span-1 flex justify-center items-center"
        >
          <img
            src={bryani}
            className=" object-cover rounded-2xl
        xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[330px]
          xl:h-[500px] lg:h-[500px] md:h-[500px] sm:h-[400px]  "
            alt="the image of bryani meal"
          />
        </div>
        <div
          data-aos="fade-left"
          className="col-span-1 text-3xl text-black  relative xl:top-8 lg:top-8 md:top-8 sm:top-0  "
        >
          <p className="text-black text-[16px] mb-1  font-semibold ">
            About us
          </p>
          <p
            className="xl:text-[40px] lg:text-[40px] md:text-[36px] sm:text-[30px] font-bold 
        xl:leading-[50px] lg:leading-[50px] md:leading-[50px] sm:leading-[42px] text-black"
          >
            Discover Indian best
            <br />
            meals in restaurant
          </p>
          <p
            className="xl:text-lg lg:text-[17px] md:text-lg sm:text-[16px] 
         lg:leading-[38px] md:leading-[50px] sm:leading-[34px]
        text-[#414141] mt-6 xl:w-11/12 lg:w-10/12 md:w-10/12 sm:w-full"
          >
            Welcome to RaJa, a culinary journey where the vibrant flavors of
            India meet the rich traditions of Azerbaijan. We are passionate
            about bringing you an unparalleled dining experience, offering a
            taste of both the East and the Caucasus.
          </p>
          <Button
            text="Discover more"
            style="text-[16px] text-[#1A1A1A] px-3 py-3 rounded border-[#1a1a1a] border-[1px]"
            href="#raja-menu"
          />
        </div>
      </main>
    </React.Fragment>
  );
}

export default Promotion;
