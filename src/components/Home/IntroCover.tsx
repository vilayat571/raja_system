import cover from '../../assets/images/cover.jpg'

function IntroCover() {
  return (
    <div>
      <img
        src={cover}
        className="w-full xl:h-[700px] lg:h-screen sm:h-screen md:h-screen   object-cover"
        alt="cover image of raja restaurant"
      />
      <div className="w-full xl:h-[700px] lg:h-screen sm:h-screen md:h-screen  
       bg-black opacity-60 absolute top-0" />
    </div>
  );
}

export default IntroCover;
