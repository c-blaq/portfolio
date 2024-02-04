import Link from "next/link";
import React from "react";
import { HiArrowUpRight } from "@/lib/reactIcons";
import { IProjects } from "../../types/project";
import { urlForImage } from "../../../sanity/lib/image";

const Card = ({ project }) => {
  return (
    <div className="bg-primary-dark transition-all duration-100 hover:bg-secondary-blue group">
      <div
        className={`bg-primary-dark2 max-w-full min-h-[150px] sm:min-h-[200px] relative group-hover:after:absolute group-hover:after:w-full group-hover:after:h-full group-hover:after:bg-black/20 transition duration-200`}
        style={{
          background: `url(${urlForImage(project.image.asset)}) center/cover`,
        }}
      ></div>

      <div className="pt-5 p-4 lg:p-8">
        <div className="mb-5 ">
          <h3 className="font-bigShoulder font-bold leading-[140%] uppercase mb-3 text-2xl sm:text-3xl lg:text-4xl">
            {project.name}
          </h3>
          <p className="text-sm">{project.desc}</p>
        </div>

        <div className="flex gap-4 justify-between">
          <div className="flex gap-2">
            {project.tags.map((t: string) => (
              <label className="text-xs text-textGray lowercase bg-gray-700 group-hover:bg-secondary-blue-light p-2">
                {t}
              </label>
            ))}
          </div>

          <Link
            href={project.previewLink}
            target="_blank"
            className="bg-gray-700 group-hover:bg-secondary-blue-light p-2 transition duration-200 group-hover:hover:bg-gray-700"
          >
            <HiArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
