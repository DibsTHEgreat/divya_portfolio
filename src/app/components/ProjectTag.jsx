import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black border-black"
    : "text-[#868783] border-slate-400 hover:border-black";

  return (
    <button
      onClick={() => onClick(name)}
      className={`border-2 rounded-full px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;