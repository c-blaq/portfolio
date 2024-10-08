import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImg from "@/assets/png/profileImg.png";
import handWave from "@/assets/svg/waveHand.svg";

interface HeroProps {
  heroText1: string;
  heroText2: string;
  description: string;
  showGreeting?: Boolean;
  showContactLink?: Boolean;
}

const Hero: React.FC<HeroProps> = ({
  heroText1,
  heroText2,
  description,
  showGreeting = true,
  showContactLink = true,
}) => {
  return (
    <div className="flex max-h-screen relative">
      <div className="bg-secondary-blue-light pt-20 pb-5 lg:pb-0 flex-1 flex items-center">
        <div className="max-w-[640px] md:ml-auto w-full px-4 2xl:pr-4 2xl:px-0">
          {showGreeting && (
            <div className="flex items-center gap-2">
              <h3 className="text-lg">Hey there</h3>
              <Image
                src={handWave}
                alt="Hand Wave"
                fetchPriority="high"
                className="w-5 h-5"
              />
            </div>
          )}
          <h1 className="font-bigShoulder leading-[100%] text-7xl lg:text-[120px] uppercase mt-5">
            <span className="font-bold">{heroText1}</span> &nbsp;
            {showContactLink && <br />}
            <span className="font-normal">{heroText2}</span>
          </h1>

          <p className="text-sm lg:text-lg md:leading-[120%] my-10">
            {description}
          </p>

          <div className="flex gap-6 lg:gap-10">
            <div className="text-center">
              <span className="text-textGray block mb-2">
                Years of Experience
              </span>
              <b className="font-bigShoulder text-4xl lg:text-6xl">+5</b>
            </div>

            <div className="bg-white w-[0.5px] mt-6 self-stretch"></div>

            <div className="text-center">
              <span className="text-textGray block mb-2">
                Featured Projects
              </span>
              <b className="font-bigShoulder text-4xl lg:text-6xl">+8</b>
            </div>
          </div>
        </div>
      </div>

      {showContactLink && (
        <div className="bg-white hidden md:block rounded-full w-32 h-32 lg:w-40 lg:h-40 xl:w-[180px] xl:h-[180px] absolute top-1/2 left-1/2 -ml-16 -mt-24 lg:-ml-[90px] lg:-mt-36 p-3">
          <Link
            href="/contact-me"
            className="bg-primary w-full h-full rounded-full flex justify-center items-center font-bigShoulder font-semibold text-4xl lg:text-[40px] rotate-[-30deg] hover:rotate-0 hover:bg-primary-dark hover:text-textGray transition duration-300"
          >
            Let's <br /> Talk
          </Link>
        </div>
      )}

      <div className="bg-secondary-blue flex-1 hidden md:flex items-center overflow-clip">
        <div className="max-w-[640px] h-4/5 mx-auto 2xl:mx-0 2xl:ml-28 px-4 2xl:pr-4 2xl:px-0 lg:scale-110 mt-auto">
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
