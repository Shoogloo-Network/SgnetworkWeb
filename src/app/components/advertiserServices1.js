"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  category,
  carbon_network,
  gis_network,
  iconoir_network,
} from "../../../public/assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdvertiserServices1 = () => {
  const servicesData = [
    {
      icon: gis_network,
      title: "Leads Generation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      icon: carbon_network,
      title: "Leads Generation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      icon: iconoir_network,
      title: "Leads Generation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#211515] text-white pb-10 relative overflow-hidden">
      <div className="w-[70%] m-auto absolute left-0 right-0 top-10">
        <Image src={category} width={1000} height={100} alt="Image" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -400 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
        className="text-3xl sm:text-[40px] font-extralight text-center p-5 px-2 sm:p-10 capitalize sm:pt-24"
      >
        <h2 className="font-extralight pb-2">What we promise to provide you</h2>
        <h2 className="font-bold">the hightest quality services</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 300, rotate: 18 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1.2,
        }}
        className="overflow-hidden sm:px-10"
      >
        <div className="hidden flex-col px-2 sm:pl-8 sm:pr-5 sm:flex">
          <div className="flex justify-center sm:justify-start mb-5 flex-wrap">
            {servicesData.map((item, index) => (
              <>
                <div
                  className="bg-[#fff8f11a] w-full h-[240px] sm:w-[270px] sm:h-[220px] rounded-xl p-8 my-4 mx-5 qualityItem relative"
                  key={index}
                >
                  <div className="text">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={70}
                      height={70}
                      className="mb-10 slideright slideleft"
                    />
                    <p
                      whileHover={{ y: -100 }}
                      className="text-lg slidetop slidebottom"
                    >
                      Leads <br /> Generation
                    </p>
                  </div>
                  <div className="absolute left-1 top-5 px-4 flex items-center text-[13px] font-light leading-7 tracking-normal text-left descText">
                    {item.description}
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="flex justify-center sm:justify-end sm:-mr-6 flex-wrap">
            {servicesData.map((item, index) => (
              <>
                <div
                  className="bg-[#fff8f11a] w-full h-[240px] sm:w-[270px] sm:h-[220px] rounded-xl p-8 my-4 mx-5 qualityItem relative"
                  key={index}
                >
                  <div className="text">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={70}
                      height={70}
                      className="mb-10 slideright slideleft"
                    />
                    <p className="text-lg slidetop slidebottom">
                      Leads <br /> Generation
                    </p>
                  </div>
                  <div className="absolute left-1 top-5 px-4 flex items-center text-[13px] font-light leading-7 tracking-normal text-left descText">
                    {item.description}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="block sm:hidden my-2 sm:my-16 mx-0 py-5 pt-3 sm:mx-5 advertisers1-slider">
          <Slider {...sliderSettings}>
            {servicesData.map((item, index) => (
              <>
                <div
                  className="bg-[#fff8f11a] w-full h-[240px] sm:w-[270px] sm:h-[220px] rounded-xl p-8 my-4 mx-5 qualityItem relative"
                  key={index}
                >
                  <div className="text">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={70}
                      height={70}
                      className="mb-10 slideright slideleft"
                    />
                    <p
                      whileHover={{ y: -100 }}
                      className="text-lg slidetop slidebottom"
                    >
                      Leads <br /> Generation
                    </p>
                  </div>
                  <div className="absolute left-1 top-5 px-4 flex items-center text-[13px] font-light leading-7 tracking-normal text-left descText">
                    {item.description}
                  </div>
                </div>
              </>
            ))}
            {servicesData.map((item, index) => (
              <>
                <div
                  className="bg-[#fff8f11a] w-full h-[240px] sm:w-[270px] sm:h-[220px] rounded-xl p-8 my-4 mx-5 qualityItem relative"
                  key={index}
                >
                  <div className="text">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={70}
                      height={70}
                      className="mb-10 slideright slideleft"
                    />
                    <p className="text-lg slidetop slidebottom">
                      Leads <br /> Generation
                    </p>
                  </div>
                  <div className="absolute left-1 top-5 px-4 flex items-center text-[13px] font-light leading-7 tracking-normal text-left descText">
                    {item.description}
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvertiserServices1;
