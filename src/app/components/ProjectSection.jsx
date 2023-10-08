"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "All-In-One Boutique By Vilas",
    description: "This is an E-Commerce website designed for a clothing store, powered by Next.JS, Typescript, Tailwind CSS, and more. Currently, still working on this site.",
    link: "https://allinoneboutiquebyvilas.com/",
    image: "/images/projects/test1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "Administrator dashboard which controls the e-commerce website. Using database management logic and more. Unfortunately, not accessible to the public.",
    link: "https://ecommerce-admin-pormg4tlz-dibsthegreat.vercel.app/",
    image: "/images/projects/test2.png",
    tag: ["All", "Software"],
  },
  {
    id: 2,
    title: "Personal Github Repository",
    description: "This GitHub repository serves as a central hub for my portfolio of coding projects. These projects showcase my skills, creativity, and dedication to the field of software development.",
    link: "https://github.com/DibsTHEgreat",
    image: "/images/projects/test3.png",
    tag: ["All", "Software"],
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
        See What I'm Working On
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            visitLink={project.link}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;