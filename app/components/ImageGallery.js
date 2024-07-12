"use client";
import React, { useState } from "react";
import { data } from "./Data";
import Button from "./Button";
const ImageGallery = () => {
  const [imgData, setData] = useState(data);
  console.log("imgData", imgData);
  return (
    <div className="container mx-auto px-4 py-8">
      <Button setData={setData} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imgData.map((image, index) => (
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
