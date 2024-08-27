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

const QualityServices = () => {
  const servicesData = [
    {
      icon: gis_network,
      title: "Smooth Campaign Setup",
      description:
        "Quick and Hassel free setup, thorough testing done",
    },
    {
      icon: carbon_network,
      title: "Increase sales and ROI by 20%",
      description:
        "Dedicated team to create strategy for your growth",
    },
    {
      icon: iconoir_network,
      title: "Access to varied Traffic sources",
      description:
        "New inventory added on daily basis as per Category need",
    },
  ];
  const servicesData1 = [
    {
      icon: gis_network,
      title: "Expand Audience Reach",
      description:
        "Increase valid traffic from validated sources",
    },
    {
      icon: carbon_network,
      title: "Detailed Analytics and Insights",
      description:
        "MIS platform created to monitor the revenue and data on hourly/daily basis",
    },
    {
      icon: iconoir_network,
      title: "Complete Transparency",
      description:
        "All report and data shared with Advertiser to ensure complete transparency is maintained at all times",
    },
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
        className="text-[40px] font-extralight text-center p-10 capitalize pt-24 sm:block hidden"
      >
        <h2 className="font-extralight pb-2">What we promise to provide you</h2>
        <h2 className="font-bold">the hightest quality services</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
        className="text-[28px] sm:text-[40px] font-extralight text-center p-2 sm:p-10 capitalize pt-10 sm:pt-24 sm:hidden block"
      >
        <h2 className="font-extralight pb-2">
          What we promise to provide you{" "}
          <span className="font-bold">the hightest quality services</span>
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 300, rotate: 18 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1.2,
        }}
        className="overflow-hidden px-2 sm:px-10 hidden sm:block"
      >
        <div className="hidden flex-col px-2 sm:pl-8 sm:pr-5 sm:flex">
          <div className="flex justify-center sm:justify-start mb-5 flex-wrap">
            {servicesData.map((item, index) => (
              <div
                className="bg-[#fff8f11a] w-full h-[240px] sm:w-[270px] sm:h-[220px] rounded-3xl p-8 px-6 my-4 mx-5 qualityItem relative overflow-hidden"
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
                  <p className="text-lg slidetop slidebottom">{item.title}</p>
                </div>
                <div className="absolute top-1/2 translate-y-[-50%] flex items-center text-md font-normal leading-7 tracking-normal text-left descText">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center sm:justify-end sm:-mr-6 flex-wrap">
            {servicesData1.map((item, index) => (
              <div
                className="bg-[#fff8f11a] w-full h-[240px] sm:w-[270px] sm:h-[220px] rounded-3xl p-8 px-6 my-4 mx-5 qualityItem relative overflow-hidden"
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
                  <p className="text-lg slidetop slidebottom">{item.title}</p>
                </div>
                <div className="absolute top-1/2 translate-y-[-50%] flex items-center text-md font-normal leading-7 tracking-normal text-left descText">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="px-2 sm:px-20 sm:hidden block">
        <div className="block sm:flex justify-start mb-5">
          <Slider {...sliderSettings} className="advertisers-mobile-slider">
            {servicesData.map((item, index) => (
              <div
                className="bg-[#fff8f11a] p-8 px-2 pb-6 rounded-xl min-h-[230px]  qualityItem relative"
                key={index}
              >
                <div className="text">
                  <Image
                    src={item.icon}
                    alt="Icon"
                    width={70}
                    height={70}
                    className="mb-2  mx-auto"
                  />
                  <p className="text-lg text-center">{item.title}</p>
                </div>
                <div className=" top-5 flex items-center justify-center text-md font-normal leading-7 tracking-normal text-center">
                  {item.description}
                </div>
              </div>
            ))}
            {servicesData1.map((item, index) => (
              <div
                className="bg-[#fff8f11a] p-8 px-2 rounded-xl min-h-[230px]  qualityItem relative"
                key={index}
              >
                <div className="text">
                  <Image
                    src={item.icon}
                    alt="Icon"
                    width={70}
                    height={70}
                    className="mb-2 mx-auto"
                  />
                  <p className="text-lg text-center">{item.title}</p>
                </div>
                <div className=" top-5 flex items-center justify-center text-md font-normal leading-7 tracking-normal text-center">
                  {item.description}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default QualityServices;
