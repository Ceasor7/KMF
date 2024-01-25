'use client'
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/home.jpg",
  "/home.jpg",
  "/home.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 6000); 

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-96">
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={prevImage}>
          <ArrowLeftIcon className="h-8 w-8 text-white/60" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={nextImage}>
          <ArrowRightIcon className="h-8 w-8 text-white/60" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
