import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="flex justify-between items-end">
      <h2 className="text-6xl font-bigShoulder leading-[140%] uppercase font-bold w-1/2">
        {title}
      </h2>
      <p className="text-xl max-w-[450px] leading-[140%]">{description}</p>
    </div>
  );
};

export default SectionTitle;
