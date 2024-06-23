import Icon from "./Icon";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import gallery from "../../assets/images/gallery.png";

const Foot = () => {
  return (
    <main id="contact" className="bg-[#141313] w-full h-auto xl:px-40 lg:px-40 md:px-20 sm:px-12 pb-3  pt-8 ">
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
          <p className="text-xl text-white">Our gallery</p>

          <img
            src={gallery}
            width={260}
            height={200}
            className="mt-8 w-[260px] h-[200px] "
            alt="Picture of the gallery"
          />
        </div>

        <div className="mt-16">
          <p className="text-xl text-white">Opening times</p>

          <p className={`text-regular mt-8 text-[#cdcdcd] w-full`}>
            09:30 AM – 11:00 PM
            <br />
            Every Day
          </p>
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
