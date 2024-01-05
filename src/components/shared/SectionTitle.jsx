import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="flex justify-between flex-col sm:flex-row sm:items-end gap-2 sm:gap-4">
      <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bigShoulder leading-[140%] uppercase font-bold sm:w-1/2">
        {title}
      </h2>
      <p className="text-sm sm:text-base lg:text-xl sm:w-1/2 max-w-[450px] sm:leading-[140%]">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
