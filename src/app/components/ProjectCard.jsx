"use client";
import React, { useState } from 'react';
import Preview from './Preview';

export const ProjectCard = ({ previewImage, title, description, images, visitLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="group relative hover:shadow-2xl hover:bg-opacity-80 hover:ring-2 hover:ring-blue-500 transition-all duration-500 rounded-xl" style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        className="h-52 md:h-75 rounded-t-xl relative cursor-pointer"
        onClick={openModal}
        style={{ background: `url(${previewImage})`, backgroundSize: 'cover' }}
      >
      </div>
      <div className="text-black rounded-b-xl bg-gradient-to-b from-blue-300 to-blue-400 py-6 px-4" style={{ flex: 1 }}>
        <div>
          <h5 className="text-xl font-semibold mb-2 text-center">{title}</h5>
          <p className="text-black">{description}</p>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            className="bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 text-white py-2 px-4 rounded-md"
            onClick={openModal}
          >
            Preview
          </button>
          <a href={visitLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 text-white py-2 px-4 rounded-md">
              Visit Site
            </button>
          </a>
        </div>
      </div>
      {isModalOpen && <Preview images={images} onClose={closeModal} />}
    </div>
  );
};

export default ProjectCard;
