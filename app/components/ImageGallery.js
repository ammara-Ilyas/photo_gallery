// src/ImageGallery.js
import React from "react";
import Image from "next/image";
import { data } from "./Data";
const images = [];

const ImageGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((image, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={image.img}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
