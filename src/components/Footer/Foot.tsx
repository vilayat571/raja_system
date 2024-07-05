import Icon from "./Icon";
import { FaFacebookF, FaLinkedin, FaTripadvisor } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import ContactDetails from "../Home/ContactDetails";
import { INavData, navData } from "../../constants/Navbar/Hrefs";
import HrefOfnav from "../../atoms/Navbar/HrefOfnav";

const Foot = () => {
  return (
    <main
      id="raja-contact"
      className="
      bg-[#141313] 
      w-full h-auto tracking-wide 
      xl:px-40 lg:px-40 md:px-20 sm:px-4 
      pb-4 pt-8 "
    >
      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col justify-between items-start">
        <div className="mt-16">
          <p className="text-xl text-white">
            RaJa Indian &
            <br />
            Azerbaijani Restaurant
          </p>

          <p className={`text-[17px] mt-8 text-[#cdcdcd] `}>
            Welcome to RaJa,
            <br />
            a culinary journey where
            <br />
            the vibrant flavors of India <br />
            meet the rich traditions
            <br />
            of Azerbaijan.
          </p>

          <div className="mt-12 flex gap-1">
            <Icon
            href="https://www.facebook.com/RaJa.Qabala/"
            Icon={<FaFacebookF className="text-white text-[18px]" />} />
            <Icon
            href="/"
            Icon={<FaLinkedin className="text-white text-[18px]" />} />
            <Icon
            href="https://www.instagram.com/explore/locations/123452834873138/raja-indian-azerbaijani-cuisine/"
            Icon={<BsInstagram className="text-white text-[18px]" />} />
            <Icon
            href="https://www.tripadvisor.com/Restaurant_Review-g666447-d12442414-Reviews-RaJa_Indian_Azerbaijani_Cuisine-Qabala_Shaki_Zaqatala_Region.html"
            Icon={<FaTripadvisor className="text-white text-[18px]" />} />
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xl text-white mb-8 ">Sections</p>

          <div className="flex flex-col gap-1 relative right-5 ">
            {navData.map((navItem: INavData) => {
              return (
                <HrefOfnav
                  text={navItem.text}
                  key={navItem.id}
                  href={navItem.href}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xl text-white">Opening times</p>

          <p className={`text-regular mt-8 text-[#cdcdcd] tracking-wide w-full`}>
            <span className="mb-2 block"> 09 AM - 12 PM</span>
            <span className="mb-2 block"> Every Day</span>
          </p>
          <ContactDetails />
        </div>
      </div>

      <p className={`mt-16 text-sm text-[#cdcdcd]`}>
        Copyright ©2024 All rights reserved | This website designed and made by
        <a
          href="https://safarovacademy.com/"
          className=" text-white"
          target="_blank"
          aria-label='Vilayat Safarv websie'
          rel="noopener noreferrer"
        >
          {"  "}
          <u>Vilayat Safarov</u>{" "}
        </a>
      </p>
    </main>
  );
};

export default Foot;
