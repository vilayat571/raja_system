//import file from "../../assets/images/file.png";
import Button from "./Button";


function Promotion() {
  return (
    <main id="promotion" className="bg-[#F9F9FF] py-20 my-10
    xl:px-[400px] lg:px-32 gap-4 md:px-32 sm:px-4
    grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
      <img
        src={'https://monyo.az/uploads2/uploads2024-05/a_1983_202405060007201190313090.jpg'}
        className=" col-span-1 w-[459px]  h-[542px] rounded-2xl "
        alt="the image of restaurant meal"
      />
      <div className=" col-span-1 text-3xl text-black  relative top-16  ">
      
       <p className="text-black text-[16px] font-bold">About us</p>
        <p className="xl:text-[40px] lg:text-[40px] md:text-[36px] sm:text-[32px] font-bold leading-[50px] text-black">
          Discover Indian best
          <br />
          foods in our restaurant
        </p>
        <p className="text-lg text-[#414141] mt-6  w-11/12">
          Welcome to RaJa, a culinary journey where the vibrant flavors
          of India meet the rich traditions of  Azerbaijan. We are
          passionate about bringing  you an unparalleled dining
          experience, offering a taste of both the East and the Caucasus.
        </p>
        <Button
          text="Discover more"
          style="text-[16px] text-[#1A1A1A] px-3 py-3 rounded border-[#1a1a1a] border-[1px]"
          href="/"
        />
      
      </div>

     
    </main>
  );
}

export default Promotion;
