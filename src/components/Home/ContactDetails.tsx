import "../../assets/styles/index.css";
import ContactAtom, { IContactDetails } from "../../atoms/Header/ContactAtoms";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function ContactDetails() {

  const details: IContactDetails[] = [
    {
      id: 1,
      style: "flex items-center",
      text: "(+994) 51 998 9889",
      icon: faPhone,
    },
    {
      id: 2,
      style: "items-center xl:flex lg:flex md:flex sm:hidden",
      text: "rajarestaurant@gmail.com",
      icon: faEnvelope,
    },
  ];

  return (
    <div
      className="
      xl:px-32 lg:px-32 md:px-32 sm:px-4
       w-full py-3
      flex justify-between items-center
      border-[#a39999] border-b-[0.5px]
       text-white  text-[12px]"
    >
      {details.map((detail: IContactDetails) => {
        return (
          <ContactAtom
            key={detail.id}
            style={detail.style}
            icon={detail.icon}
            text={detail.text}
          />
        );
      })}
    </div>
  );
}

export default ContactDetails;
