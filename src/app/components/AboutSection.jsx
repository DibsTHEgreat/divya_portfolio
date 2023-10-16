"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-black py-16 md:pt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <div className="relative h-0 pb-[100%] border-solid border-4 border-blue-600 rounded-2xl shadow-2xl">
            <Image
              src="/images/me.JPG"
              alt="A random picture"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-black text-base md:text-lg mb-6 pb-3">
            I am an avid learner of Computer Science, deeply passionate about creating meaningful 
            projects that serve a purpose and will leave an impact on the world. My approach 
            to learning is all about hands-on experience; I believe in jumping right into 
            projects to grasp complex concepts. This approach I believe, is the key to not only 
            understanding, but also excelling in the world of computer science.
          </p>
          <h2 className="text-4xl font-bold text-black mb-4">My Skills</h2>
          <p className="text-black text-base md:text-lg mb-6">
            Throughout my studies, I&apos;ve developed a solid understanding of software development, 
            data analytics, and web development concepts. My skills include:
          </p>
          <ul className=" list-disc grid grid-cols-2 md:grid-cols-3 gap-4 text-base md:text-lg">
            <li>Python</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>SAAS</li>
            <li>Next.js</li>
            <li>Data Analytics</li>
            <li>HTML</li>
            <li>SQL</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
