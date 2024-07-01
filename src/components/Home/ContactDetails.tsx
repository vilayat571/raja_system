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
      style: "flex items-center",
      text: "rajarestaurant@gmail.com",
      icon: faEnvelope,
    },
  ];

  return (
    <div
      className=" mt-2 "
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
