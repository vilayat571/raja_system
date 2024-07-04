import ScrollToTop from "react-scroll-to-top";

export default function Totop() {
  return (
    <ScrollToTop
      smooth
      width="16"
      height="16"
      color="white"
    style={{backgroundColor:"#0f0f0f",borderRadius:"100%"}}
      className="rounded-full flex justify-center items-center  outline-none"
    />
  );
}
