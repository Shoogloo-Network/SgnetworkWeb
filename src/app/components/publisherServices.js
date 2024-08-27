"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  benifits,
  carbon_network,
  gis_network,
  iconoir_network,
} from "../../../public/assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  publish1,
  publish2,
  publish3,
  publish4,
  publish5,
  publish6,
  publish7,
  publish8,
  publish9,
  publish10,
  publish11,
  publish12,
  publish13,
  publish14,
  publish15,
  publish16,
  publish17,
  publishersBg,
} from "../../../public/assets/images";

const images = [
  publish1,
  publish2,
  publish3,
  publish4,
  publish5,
  publish6,
  publish7,
  publish8,
  publish9,
  publish10,
  publish11,
  publish12,
  publish13,
  publish14,
  publish15,
  publish16,
  publish17
];

const PulisherServices = () => {
  const servicesData = [
    {
      icon: iconoir_network,
      title: "Wide Selection of Campaigns ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      icon: carbon_network,
      title: "Partner with top brands ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      icon: iconoir_network,
      title: "Exclusive offers and Promos ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
  ];
  const servicesData1 = [
    {
      icon: iconoir_network,
      title: "Reliable and Accurate Tracking ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      icon: carbon_network,
      title: "Analytics to Monetize your Traffic ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      icon: iconoir_network,
      title: "Generous Commission and Timely payouts ",
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
    autoplay: false,
    arrows: true,
    autoplaySpeed: 3000,
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
    <div className="bg-[#FFF8F1] pb-2 sm:pb-10 relative overflow-hidden">
      <div className="w-[70%] m-auto absolute left-0 right-0 top-10">
        <Image src={benifits} width={1000} height={100} alt="Image" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
        className="text-3xl sm:text-[48px] font-extralight text-center p-10 pb-0 md:pb-10 capitalize sm:pt-10"
      >
        <h2 className="font-extralight pb-2">
          What Is <span className="font-bold">With Us</span>
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
        className="overflow-hidden px-2 sm:px-10"
      >
        <div className="hidden flex-col px-2 sm:pl-8 sm:pr-5 sm:flex">
          <div className="flex justify-center sm:justify-start mb-5 flex-wrap">
            {servicesData.map((item, index) => (
              <>
                <div
                  className="bg-[#ffffff] w-full h-[240px] sm:w-[270px] sm:h-[220px] rounded-3xl p-8 my-4 mx-5 relative serviceCard overflow-hidden hover:text-white"
                  key={index}
                >
                  <div className="imageIcons relative">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={60}
                      height={60}
                      className="mb-10 z-20 relative left-3"
                    />
                    <div className="bgCircle w-[85px] h-[85px] bg-[#ffd6ae] rounded-full opacity-50 absolute -top-3 left-0 z-10 scaleInCenter scaleDownCenter"></div>
                    <p className="text-xl relative z-20 capitalize">
                      {item.title}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="flex justify-center sm:justify-end sm:-mr-6 flex-wrap">
            {servicesData1.map((item, index) => (
              <>
                <div
                  className="bg-[#ffffff] w-full h-[240px] sm:w-[270px] sm:h-[220px] rounded-3xl p-8 my-4 mx-5 relative serviceCard overflow-hidden hover:text-white"
                  key={index}
                >
                  <div className="imageIcons relative">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={60}
                      height={60}
                      className="mb-10 z-20 relative left-3"
                    />
                    <div className="bgCircle w-[85px] h-[85px] bg-[#ffd6ae] rounded-full opacity-50 absolute -top-3 left-0 z-10 scaleInCenter scaleDownCenter"></div>
                    <p className="text-lg relative z-20 capitalize">
                      {item.title}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="block sm:hidden my-2 sm:my-16 mx-0 py-5 pt-3 sm:mx-5 publisher-slider">
          <Slider {...sliderSettings}>
            {servicesData.map((item, index) => (
              <>
                <div
                  className="bg-[#ffffff] w-full h-[240px] sm:w-[270px] sm:h-[220px] rounded-3xl p-8 my-4 mx-5 relative serviceCard overflow-hidden hover:text-white"
                  key={index}
                >
                  <div className="imageIcons relative">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={60}
                      height={60}
                      className="mb-10 z-20 relative left-3"
                    />
                    <div className="bgCircle w-[85px] h-[85px] bg-[#ffd6ae] rounded-full opacity-50 absolute -top-3 left-0 z-10 scaleInCenter scaleDownCenter"></div>
                    <p className="text-xl relative z-20 capitalize">
                      {item.title}
                    </p>
                  </div>
                </div>
              </>
            ))}
            {servicesData1.map((item, index) => (
              <>
                <div
                  className="bg-[#ffffff] w-full h-[240px] sm:w-[270px] sm:h-[220px] rounded-3xl p-8 my-4 mx-5 relative serviceCard overflow-hidden hover:text-white"
                  key={index}
                >
                  <div className="imageIcons relative">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={60}
                      height={60}
                      className="mb-10 z-20 relative left-3"
                    />
                    <div className="bgCircle w-[85px] h-[85px] bg-[#ffd6ae] rounded-full opacity-50 absolute -top-3 left-0 z-10 scaleInCenter scaleDownCenter"></div>
                    <p className="text-lg relative z-20 capitalize">
                      {item.title} 
                    </p>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </motion.div>

      <div className="sm:bg-transparent bg-[#FFF8F1] pb-10 sm:pb-0">
      <div className="flex items-center bg-[#fff]">
          <div className="w-[620px] h-[130px] sm:h-[160px] flex items-center justify-center rounded-tr-[30px] rounded-br-[30px] p-4 bg-[#311C17]">
            <p className="font-gilroy text-[17px] sm:text-4xl text-white font-extrabold leading-[21px] sm:leading-10 text-center flex items-center justify-center mb-3 opacity-50">
              Our Publishers
            </p>
          </div>

          <div className="imageslide-container items-center">
            {images.map((image, index) => (
              <div
                key={index}
                className="mx-2 w-[215px]  mr-2 bg-[#211515] imageSlide"
              >
                <Image
                  src={image}
                  alt={`logo-${index}`}
                  width={250}
                  height={130}
                  className=""
                />
              </div>
            ))}
          </div>
      </div>    
    </div> 
    </div>
  );
};

export default PulisherServices;
