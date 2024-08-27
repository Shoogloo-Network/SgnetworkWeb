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

const AdvertiserServices = () => {
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
        className="text-[40px] font-extralight text-center p-10 capitalize pt-24"
      >
        <h2 className="font-extralight pb-2">What we promise to provide you</h2>
        <h2 className="font-bold">the hightest quality services</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 300,rotate: 18 }}
        whileInView={{ opacity: 1, y: 0,rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1.2,
        }}
        className="overflow-hidden px-10"
      >
        <div className="flex flex-col px-10">
          <div className="flex justify-start mb-5">
            {servicesData.map((item, index) => (
              <>
                <div
                  className="bg-[#fff8f11a] p-8 px-18 ps-5 pr-36 pb-2.5 rounded-xl mx-5 qualityItem relative"
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
          <div className="flex justify-end">
            {servicesData.map((item, index) => (
              <>
                <div
                  className="bg-[#fff8f11a] p-8 px-18 ps-5 pr-36 pb-2.5 rounded-xl mx-5 qualityItem relative"
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
      </motion.div>
      
    </div>
  );
};

export default AdvertiserServices;
