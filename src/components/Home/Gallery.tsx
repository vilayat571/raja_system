import React from "react";
import SingleGallery from "./SingleGallery";
import SEO from "../../SEO/SEO";
import { galleryData } from "../../constants/Gallery/data";

const Gallery = () => {
  return (
    <React.Fragment>
      <SEO
      key={'1'}
        title="Raja Restaurant Gallery"
        description="Immerse yourself in the visual feast of Raja's culinary art. Explore our gallery showcasing the vibrant colors and mouthwatering dishes from our Indian & Azerbaijani fusion cuisine."
        name="’Raja Restaurant Gallery’"
        type="Visual"
        keywords="raja restaurant gallery, indian food pictures, azerbaijani food pictures, fusion cuisine gallery, baku restaurant picture"
      />
      <main
        id="raja-gallery"
        className=" xl:px-48 lg:px-48 md:px-48 sm:px-8 mb-16 "
      >
        <p
          className="mb-8 text-black  
        xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl 
    font-black text-center "
        >
          Our Gallery 
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
    </React.Fragment>
  );
};

export default Gallery;
