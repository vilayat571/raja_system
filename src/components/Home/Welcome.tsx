function Welcome() {
  return (
    <div
      className="
      px-2 relative xl:top-28 lg:top-24 sm:top-56
      font-semibold text-white text-center
      xl:text-[5vw] lg:text-[4vw] sm:text-[8vw] md:text-[5vw] 
      tracking-wide leading-snug "
    >

      Welcome
      <br />
      RaJa Indian and Azerbaijan
      <br className="xl:block md:block lg:block sm:hidden" />
      Restaurant


      <p className=" font-thin mt-8">
        <a
          href="#menu"
          className="
           xl:px-6 lg:px-7 md:px-5 sm:px-4 py-3
         border-white border-[1px] rounded 
           xl:text-[16px] lg:text-[16px] sm:text-[16px] md:text-[16px] 
           tracking-widest"
        >
          See menu
        </a>
      </p>

      
    </div>
  );
}

export default Welcome;
