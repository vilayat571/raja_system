import Icon from "./Icon";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import ContactDetails from "../Home/ContactDetails";

const Foot = () => {
  return (
    <main
      id="contact"
      className="
      bg-[#141313] 
      w-full h-auto tracking-widest 
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

          <p className={`text-regular mt-8 text-[#cdcdcd] }`}>
            Far far away, behind the word <br /> mountains, far from the
            countries
            <br />
            Vokalia and Consonantia, there live <br /> the blind texts.
          </p>

          <div className="mt-12 flex gap-1">
            <Icon Icon={<FaFacebookF className="text-white text-[18px]" />} />
            <Icon Icon={<FaLinkedin className="text-white text-[18px]" />} />
            <Icon Icon={<BsInstagram className="text-white text-[18px]" />} />
            <Icon Icon={<BsTiktok className="text-white text-[18px]" />} />
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xl text-white mb-8 ">Sections</p>

          <div className="flex flex-col ">
            <a href="/">Team</a>
            <a href="/">Gallery</a>
            <a href="#promotion">About us</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact</a>
            <a href="#contact">Results</a>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xl text-white">Opening times</p>

          <p className={`text-regular mt-8 text-[#cdcdcd] w-full`}>
            <span className="mb-2 block">09:30 AM – 11:00 PM</span>
            <span className="mb-2 block"> Every Day</span>
          </p>
          <ContactDetails />
        </div>
      </div>

      <p className={`mt-16 text-sm text-[#cdcdcd]`}>
        Copyright ©2024 All rights reserved | This website designed and made
        with
        <a
          href="https://safarovacademy.com/"
          className=" text-white"
          target="_blank"
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
