import React, { useState } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';

const Preview = ({ images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const originalWidth = 1920;
  const originalHeight = 1080;
  const aspectRatio = originalWidth / originalHeight;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="button-container">
        <div className="flex flex-col opacity-75 items-end absolute top-0 right-0 p-4">
          <button
            className="flex items-center px-3 py-2 border rounded bg-blue-400 border-blue-400 text-black hover:text-black hover:border-red-400 hover:bg-red-400"
            onClick={onClose}
          >
            <XMarkIcon className="w-7 h-7" />
          </button>
        </div>
        <div className="absolute top-1/2 opacity-75 transform -translate-y-1/2 left-3 cursor-pointer">
          <ChevronLeftIcon
            className="w-12 h-12 border rounded bg-blue-400 border-blue-400 text-black hover:text-black hover:border-red-400 hover:bg-red-400"
            onClick={goToPreviousImage}
          />
        </div>
        <div className="absolute top-1/2 opacity-75 transform -translate-y-1/2 right-3 cursor-pointer">
          <ChevronRightIcon
            className="w-12 h-12 border rounded bg-blue-400 border-blue-400 text-black hover:text-black hover:border-red-400 hover:bg-red-400"
            onClick={goToNextImage}
          />
        </div>
      </div>
      <div 
        className="flex items-center justify-center" 
        style={{ width: '1920px', height: `${1920 / aspectRatio}px` }}
      >
        <Image
          src={images[currentImageIndex]}
          width={originalWidth}
          height={originalHeight}
          alt="Enlarged Project Image"
          className="w-auto h-auto rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Preview;
