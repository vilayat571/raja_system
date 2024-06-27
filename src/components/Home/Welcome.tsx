function Welcome() {
  return (
    <div
      className="text-center px-2 relative xl:top-28 lg:top-28 sm:top-44 leading-tight font-semibold text-white 
xl:text-[5vw] lg:text-[4vw] sm:text-[8vw] md:text-[5vw] tracking-wide"
    >
      Welcome
      <br className="" />
      RaJa Indian and Azerbaijan {""}
      <br className="xl:block md:block lg:block sm:hidden" />
      Restaurant
      <p className=" font-thin text-[3vh] mt-4">
        <button className="xl:px-6 lg:px-6 md:px-5 sm:px-4 py-3 border-white border-[1px] rounded 
        xl:text-normal lg:text-normal sm:text-[16px] md:text-normal 
        tracking-wider mt-1">
          See menu
        </button>
      </p>
    </div>
  );
}

export default Welcome;
