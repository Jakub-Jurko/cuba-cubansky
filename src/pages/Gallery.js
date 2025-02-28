import React, { useState } from "react";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./Gallery.css"
import { motion } from "framer-motion";
import image1 from "../images/tattoo/tattoo1.jpg";
import image1t from "../images/tattoo/tattoo1t.jpg";
import image2 from "../images/tattoo/tattoo2.jpg";
import image2t from "../images/tattoo/tattoo2t.jpg";
import image3 from "../images/tattoo/tattoo3.jpg";
import image3t from "../images/tattoo/tattoo3t.jpg";
import image4 from "../images/tattoo/tattoo4.jpg";
import image4t from "../images/tattoo/tattoo4t.jpg";
import image5 from "../images/tattoo/tattoo5.jpg";
import image5t from "../images/tattoo/tattoo5t.jpg";
import image6 from "../images/tattoo/tattoo6.jpg";
import image6t from "../images/tattoo/tattoo6t.jpg";
import image7 from "../images/tattoo/tattoo7.jpg";
import image7t from "../images/tattoo/tattoo7t.jpg";
import image8 from "../images/tattoo/tattoo8.jpg";
import image8t from "../images/tattoo/tattoo8t.jpg";
import image9 from "../images/tattoo/tattoo9.jpg";
import image9t from "../images/tattoo/tattoo9t.jpg";
import image10 from "../images/tattoo/tattoo10.jpg";
import image10t from "../images/tattoo/tattoo10t.jpg";
import image11 from "../images/tattoo/tattoo11.jpg";
import image11t from "../images/tattoo/tattoo11t.jpg";
import image12 from "../images/tattoo/tattoo12.jpg";
import image12t from "../images/tattoo/tattoo12t.jpg";
import image13 from "../images/tattoo/tattoo13.jpg";
import image13t from "../images/tattoo/tattoo13t.jpg";
import image14 from "../images/tattoo/tattoo14.jpg";
import image14t from "../images/tattoo/tattoo14t.jpg";
import image15 from "../images/tattoo/tattoo15.jpg";
import image15t from "../images/tattoo/tattoo15t.jpg";
import image16 from "../images/tattoo/tattoo16.jpg";
import image16t from "../images/tattoo/tattoo16t.jpg";
import image17 from "../images/tattoo/tattoo17.jpg";
import image17t from "../images/tattoo/tattoo17t.jpg";
import image18 from "../images/tattoo/tattoo18.jpg";
import image18t from "../images/tattoo/tattoo18t.jpg";
import image19 from "../images/tattoo/tattoo19.jpg";
import image19t from "../images/tattoo/tattoo19t.jpg";
import image20 from "../images/tattoo/tattoo20.jpg";
import image20t from "../images/tattoo/tattoo20t.jpg";
import image21 from "../images/tattoo/tattoo21.jpg";
import image21t from "../images/tattoo/tattoo21t.jpg";
import image22 from "../images/tattoo/tattoo22.jpg";
import image22t from "../images/tattoo/tattoo22t.jpg";
import image23 from "../images/tattoo/tattoo23.jpg";
import image23t from "../images/tattoo/tattoo23t.jpg";

const images = [
  { itemImageSrc: image1, thumbnailImageSrc: image1t, alt: "Obrázek 1" },
  { itemImageSrc: image2, thumbnailImageSrc: image2t, alt: "Obrázek 2" },
  { itemImageSrc: image3, thumbnailImageSrc: image3t, alt: "Obrázek 4" },
  { itemImageSrc: image4, thumbnailImageSrc: image4t, alt: "Obrázek 5" },
  { itemImageSrc: image5, thumbnailImageSrc: image5t, alt: "Obrázek 6" },
  { itemImageSrc: image6, thumbnailImageSrc: image6t, alt: "Obrázek 7" },
  { itemImageSrc: image7, thumbnailImageSrc: image7t, alt: "Obrázek 8" },
  { itemImageSrc: image8, thumbnailImageSrc: image8t, alt: "Obrázek 9" },
  { itemImageSrc: image9, thumbnailImageSrc: image9t, alt: "Obrázek 10" },
  { itemImageSrc: image10, thumbnailImageSrc: image10t, alt: "Obrázek 11" },
  { itemImageSrc: image11, thumbnailImageSrc: image11t, alt: "Obrázek 12" },
  { itemImageSrc: image12, thumbnailImageSrc: image12t, alt: "Obrázek 13" },
  { itemImageSrc: image13, thumbnailImageSrc: image13t, alt: "Obrázek 14" },
  { itemImageSrc: image14, thumbnailImageSrc: image14t, alt: "Obrázek 15" },
  { itemImageSrc: image15, thumbnailImageSrc: image15t, alt: "Obrázek 16" },
  { itemImageSrc: image16, thumbnailImageSrc: image16t, alt: "Obrázek 17" },
  { itemImageSrc: image17, thumbnailImageSrc: image17t, alt: "Obrázek 18" },
  { itemImageSrc: image18, thumbnailImageSrc: image18t, alt: "Obrázek 19" },
  { itemImageSrc: image19, thumbnailImageSrc: image19t, alt: "Obrázek 20" },
  { itemImageSrc: image20, thumbnailImageSrc: image20t, alt: "Obrázek 21" },
  { itemImageSrc: image21, thumbnailImageSrc: image21t, alt: "Obrázek 22" },
  { itemImageSrc: image22, thumbnailImageSrc: image22t, alt: "Obrázek 23" },
  { itemImageSrc: image23, thumbnailImageSrc: image23t, alt: "Obrázek 24" },
];

const Gallery = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeIn" }}>
    <div className="p-6 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Moje práce</h1>
      <div className="grid grid-cols-3 gap-6 max-w-3xl">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.thumbnailImageSrc}
            alt={img.alt}
            className="cursor-pointer w-full h-40 object-cover rounded-xl shadow-lg border  hover:scale-105 border-none  transition-transform duration-300"
            onClick={() => {
              setActiveIndex(index);
              setVisible(true);
            }}
          />
        ))}
      </div>

      {visible && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setVisible(false)}
            >
              <IoClose />
            </button>
            
            <button
              className="absolute left-4 text-white text-5xl hover:text-gray-300"
              onClick={prevImage}
            >
              <IoChevronBack />
            </button>
            
            <div>
  <img
    src={images[activeIndex].itemImageSrc}
    alt={images[activeIndex].alt}
    className="w-auto max-w-[85vw] md:max-w-[60vw] max-h-[90vh] object-contain rounded-2xl shadow-[0px_0px_20px_rgb(231,217,139,0.534)]"
  />
</div>

            


            
            <button
              className="absolute right-4 text-white text-5xl hover:text-gray-300"
              onClick={nextImage}
            >
              <IoChevronForward />
            </button>
          </div>
        </div>
      )}
    </div>
    </motion.div>
  );
};

export default Gallery;
