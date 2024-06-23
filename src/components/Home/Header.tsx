import Welcome from "./Welcome";
import ContactDetails from "./ContactDetails";
import Navbar from "./Navbar";
function Header() {
  return (
    <div className="flex flex-col  xl:h-[700px] lg:h-screen w-full z-3 absolute top-0 ">
      <ContactDetails />
      <Navbar />

      <Welcome />
    </div>
  );
}

export default Header;
