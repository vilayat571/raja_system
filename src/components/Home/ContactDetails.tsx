import "../../assets/styles/index.css";
import ContactAtom, { IContactDetails } from "../../atoms/Header/ContactAtoms";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function ContactDetails() {
  const details: IContactDetails[] = [
    {
      id: 1,
      style: "mt-2 flex items-center",
      text: "+994 50 726 98 99",
      icon: faPhone,
    },
    {
      id: 2,
      style: "mt-2 flex items-center",
      text: "rajarestaurant@gmail.com",
      icon: faEnvelope,
    },
  ];

  return (
    <div>
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
