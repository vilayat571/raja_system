import cover from "../../../assets/images/img6.jpeg";

function IntroCover() {
  return (
    <div>
      <img
        src={cover}
        className="cursor-pointer w-full xl:h-[700px] lg:h-screen sm:h-screen md:h-screen   object-cover"
        alt="cover image of raja restaurant"
      />
      <div
        className="
      w-full 
      xl:h-[700px] lg:h-screen sm:h-screen md:h-screen  
       bg-black opacity-70
       absolute top-0"
      />
    </div>
  );
}

export default IntroCover;
