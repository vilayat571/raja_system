import logo from "../../assets/images/logo.png";
function Navbar() {
  return (
    <div className=" mt-4 xl:px-32 lg:px-32 md:px-32 sm:px-2 w-full flex justify-between items-center">
      <img src={logo} alt="the logo of raja restaurant" className="object-fit " />

   
        <div className="flex justify-between text-lg  xl:block lg:block sm:hidden md:hidden">
          <a className="px-12" href="#promotion">About us</a>
          <a className="px-12" href="#menu">Menu</a>
          <a className="px-12" href="#contact">Contact</a>
        </div>
  

      <a
        href="https://wa.me/"
        className="px-4 mr-4 py-2 border-white rounded border-[1px]"
      >
       Reservation
      </a>


    </div>
  );
}

export default Navbar;
