import { galleryData } from "../../constants/data";
import SingleGallery from "./SingleGallery";

const Gallery = () => {
  return (
    <main className=" xl:px-48 lg:px-48 md:px-48 sm:px-8 mb-16 ">
      <p
        className="mb-8 text-black  
        xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl 
    font-black text-center "
      >
        Our Gallery 🔥
      </p>
      <div
        className="grid
  gap-2  text-center xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3"
      >
        {galleryData.map((gallery) => (
          <SingleGallery id={gallery.id} key={gallery.id} img={gallery.img} />
        ))}
      </div>
    </main>
  );
};

export default Gallery;
