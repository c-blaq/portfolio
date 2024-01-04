import React from "react";
import profileImg from "@/assets/png/profileImg.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex max-h-screen">
      <div className="bg-secondary-blue-light pt-20 flex-1 flex items-center">
        <div className="max-w-[640px] ml-auto w-full px-4 2xl:pr-4 2xl:px-0">
          <h3 className="text-xl">Hey there</h3>
          <h1 className="font-bigShoulder leading-[100%] lg:text-[120px] uppercase mt-5">
            <span className="font-bold">Fathi</span> &nbsp; <br />
            <span className="font-normal">Babayeju</span>
          </h1>

          <p className="text-lg leading-[120%] my-10">
            A passionate front-end developer with a creative flair and a knack
            for turning ideas into beautiful, functional websites. With a
            meticulous attention to detail and a deep understanding of HTML,
            CSS, and JavaScript, I have mastered the art of crafting seamless
            user experiences.
          </p>

          <div className="flex gap-6 lg:gap-10">
            <div className="text-center">
              <span className="text-textGray block mb-2">
                Years of Experience
              </span>
              <b className="font-bigShoulder lg:text-6xl">+3</b>
            </div>

            <div className="bg-white w-[0.5px] mt-6 self-stretch"></div>

            <div className="text-center">
              <span className="text-textGray block mb-2">
                Featured Projects
              </span>
              <b className="font-bigShoulder lg:text-6xl">+3</b>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-full w-[180px] h-[180px] absolute top-1/2 left-1/2 -ml-[90px] -mt-36 p-3">
        <Link
          href="/"
          className="bg-primary w-full h-full rounded-full flex justify-center items-center font-bigShoulder font-semibold text-[40px] from-stone-600 rotate-[-30deg] hover:rotate-0 transition duration-300"
        >
          Let's <br /> Talk
        </Link>
      </div>

      <div className="bg-secondary-blue flex-1 flex items-center overflow-clip">
        <div className="max-w-[640px] h-4/5 mx-auto ml-auto px-4 2xl:pr-4 2xl:px-0 lg:scale-110 mt-auto">
          <Image
            src={profileImg}
            alt="profile image"
            className="filter grayscale"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
