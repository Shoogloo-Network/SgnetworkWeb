import React from "react";
import Image from "next/image";
import { bgImage, circleFrame } from "../../../public/assets/images";
import Link from "next/link";

const TextButton = () => {
  const sectionStyle = {
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <section className="relative h-[220px] sm:h-[200px]" style={sectionStyle}>
        <div className="flex items-center justify-center flex-col md:flex-row sm:flex-row absolute top-0 z-20 w-full h-full">
          <div className="flex items-center justify-evenly w-full sm:w-1/2 h-full ">
            <Image
              src={circleFrame}
              alt="Icon"
              width={90}
              height={90}
              className="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px]"
            />
            <div className="flex items-center justify-center flex-col px-1 sm:px-10 capitalize">
              <p className="font-light text-sm  sm:text-2xl py-2 text-white">
              Earn Generous Commissions by becoming
              </p>
              <p className="text-2xl sm:text-5xl font-extrabold leading-14 text-white tracking-tight text-left">
                part of our network
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full sm:w-1/2 h-full px-1 sm:px-10">
          <Link href="https://shoogloo.trackier.io/" target="_blank">
            <button className="uppercase mt-1 sm:mt-5 text-sm sm:text-lg font-medium bg-white text-orange-600 border border-orange-600 rounded-full px-8 py-3 mr-2 w-[100px] sm:w-[160px] orange-btn relative z-40">
              Login
              <span className="bg"></span>
            </button>
            </Link>
            <Link href="https://shoogloo.trackier.io/register.html" target="_blank">
              <button className="uppercase mt-1 sm:mt-5 text-sm sm:text-lg font-medium bg-white text-orange-600 border border-orange-600 rounded-full px-8 py-3 orange-btn relative z-40">
                Register as a publisher
                <span className="bg"></span>
              </button>
            </Link>
          </div>
        </div> 
      </section>
    </>
  );
};

export default TextButton;
