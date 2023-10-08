"use client";
import React, { useState } from 'react';
import { XMarkIcon } from "@heroicons/react/24/solid";

const ImageModal = ({ imgUrl, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-screen-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <img src={imgUrl} alt="Enlarged Project Image" className="w-full h-auto rounded-md" />
      </div>
    </div>
  );
};

export const ProjectCard = ({ imgUrl, title, description, visitLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="group relative overflow-hidden hover:shadow-lg hover:bg-white hover:bg-opacity-80 hover:ring-2 hover:ring-blue-500 transition-all duration-500 rounded-xl ">
      <div
        className="h-52 md:h-75 rounded-t-xl relative cursor-pointer"
        onClick={openModal}
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className="text-black rounded-b-xl bg-[#AFB0B3] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 text-center">{title}</h5>
        <p className="text-black">{description}</p>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            onClick={openModal}
          >
            Preview
          </button>
          <a href={visitLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
              Visit Site
            </button>
          </a>
        </div>
      </div>
      {isModalOpen && (
        <ImageModal imgUrl={imgUrl} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProjectCard;