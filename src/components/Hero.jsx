import React from "react";

const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-secondary-blue-light flex-1 flex items-center">
        <div className="max-w-[640px] ml-auto w-full px-4 lg:px-0">
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
            <div>
              <span className="text-textGray block mb-2">
                Years of Experience
              </span>
              <b className="font-bigShoulder lg:text-6xl">+3</b>
            </div>

            <div className="bg-white w-[0.5px] mt-6 self-stretch"></div>

            <div>
              <span className="text-textGray block mb-2">
                Years of Experience
              </span>
              <b className="font-bigShoulder lg:text-6xl">+3</b>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary-blue flex-1 flex items-center">
        <div className="max-w-[640px] w-full ml-auto px-4">Image here</div>
      </div>
    </div>
  );
};

export default Hero;
