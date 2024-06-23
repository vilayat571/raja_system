import { FaEnvelope, FaPhone } from "react-icons/fa6";

function ContactDetails() {
  return (
    <div className=" xl:px-32 lg:px-32 md:px-32 sm:px-4 w-full flex justify-between items-center
     h-12 border-white border-b-[1.5px] text-white">
      <div className="flex items-center   ">
        <FaPhone className="" />
        <span className="ml-1">(+994) 51 998 9889</span>
      </div>

      <div className="flex items-center ">
        <FaEnvelope />
        <span className="ml-1">rajarestauran@gmail.com</span>
      </div>
    </div>
  );
}

export default ContactDetails;
