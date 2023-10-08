"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const downloadCV = () => {
  const cvUrl = "/pdf/Divya.P-Resume.pdf";

  const anchor = document.createElement("a");
  anchor.href = cvUrl;
  anchor.target = "_blank";
  anchor.download = "Divya.P-Resume.pdf"; 

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4 md:pb-20">
      <div className="col-span-7 flex flex-col justify-center items-center lg:place-items-start">
        <h1 className="text-black max-w-2xl mb-4 lg:text-6xl text-2xl font-extrabold pb-11">
          <span className="text-transparent text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I&apos;m{" "}
          </span>{" "}
          <br></br>
          <TypeAnimation
            sequence={[
              "A Software Developer",
              1000,
              "A Web Developer",
              1000,
              "A Data Analyst",
              1000,        
              "A Student",
              1000,      
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-black mb-6 textl-lg lg:text-xl">
            Hello, welcome to my portfolio! I&apos;m a 21-year-old student at the University of Lethbridge studying
            Computer Science and Business Management.
        </p>
        <div>
          <button
            className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full"
            onClick={downloadCV}
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0 lg:pt-12">
        <div className="bg-gray-300 lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src="/images/mebutclear.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
