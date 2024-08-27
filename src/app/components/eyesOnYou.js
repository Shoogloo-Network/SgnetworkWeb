"use client";

import React from "react";
import { motion } from "framer-motion";
import { outline_avatar, outline_target,Advertisericon, Deliveredicon, deliveredproductsicon, productsicon } from "../../../public/assets/images";
import Image from "next/image";

const EyesOnYou = () => {
  return (
    <div className="bg-[#211515] text-white pb-16 pt-5 overflow-x-hidden">
      <motion.h2
        initial={{ opacity: 0, x: 400 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 2,
        }}
        className="text-5xl font-extralight text-center p-10 pb-14 sm:block hidden"
      >
        All Eyes On the <span className="font-bold">Numbers</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -400 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 2,
        }}
        className="sm:flex justify-around mx-16  hidden"
      >
        <div className="flex flex-col justify-center items-center border-r border-gray-600 w-1/3">
          <Image  width={300}
              height={100} src={productsicon}   alt="" className="w-[13%]" />
          <p className="font-bold text-3xl py-2">5000+</p>
          <p className="text-orange-400 text-lg">Products</p>
        </div>

        <div className="flex flex-col justify-center items-center border-r border-gray-600  w-1/3">
          <Image  width={300}
              height={100} src={Deliveredicon}   alt="" className="w-[13%]" />

          <p className="font-bold text-3xl py-2">6M+</p>
          <p className="text-orange-400  text-lg">Orders in 2022</p>
        </div>

        <div className="flex flex-col justify-center items-center w-1/3">
          <Image  width={300}
              height={100} src={Advertisericon}   alt="" className="w-[13%]" />

          <p className="font-bold text-3xl py-2">300+</p>
          <p className="text-orange-400  text-lg">Advertisers and campaigns live</p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3">
        <Image  width={300}
            height={100} src={deliveredproductsicon}   alt="" className="w-[13%]" />

        <p className="font-bold text-3xl py-2">INR 13B</p>
        <p className="text-orange-400  text-lg">GMV Delivered</p>
      </div>
      </motion.div>


      {/* on mobile device*/}
      <motion.h2
      initial={{ opacity: 0, x: 300 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "linear",
        duration: 2,
      }}
      className="text-[28px] leading-[39px] font-extralight text-center p-5 pb-5 sm:pb-14 sm:hidden block"
    >
      All Eyes On the <span className="font-bold">Numbers</span>
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "linear",
        duration: 2,
      }}
      className="sm:hidden justify-around mx-5 sm:mx-16  block"
    >
      <div className="inline-flex flex-col justify-center items-center border-b border-r border-gray-600 py-3 w-1/2">
        <Image  width={300}
            height={100} src={productsicon}   alt="" className="w-[52px] h-[52px] sm:w-[13%] sm:h-[auto]" />
        <p className="font-bold text-[32px] sm:text-3xl py-2">5000+</p>
        <p className="text-orange-400 text-[14px] sm:text-lg  text-center">Products</p>
      </div>

      <div className="inline-flex flex-col justify-center items-center border-b border-gray-600  py-3 w-1/2">
        <Image  width={300}
            height={100} src={Deliveredicon}   alt="" className="w-[52px] h-[52px] sm:w-[13%] sm:h-[auto]" />

        <p className="font-bold text-[32px] sm:text-3xl py-2">6M+</p>
        <p className="text-orange-400  text-[14px] sm:text-lg  text-center">Orders in 2022</p>
      </div>

      <div className="inline-flex flex-col justify-center items-center border-r border-gray-600 py-3 w-1/2">
        <Image  width={300}
            height={100} src={Advertisericon}   alt="" className="w-[52px] h-[52px] sm:w-[13%] sm:h-[auto]" />

        <p className="font-bold text-[32px] sm:text-3xl py-2">300+</p>
        <p className="text-orange-400  text-[14px] sm:text-lg text-center">Advertisers and campaigns live</p>
      </div>
      <div className="inline-flex flex-col justify-center items-center py-3 w-1/2">
      <Image  width={300}
          height={100} src={deliveredproductsicon}   alt="" className="w-[52px] h-[52px] sm:w-[13%] sm:h-[auto]" />

      <p className="font-bold text-[32px] sm:text-3xl py-2">INR 13B</p>
      <p className="text-orange-400  text-[14px] sm:text-lg  text-center">GMV Delivered</p>
    </div>
    </motion.div>
    </div>
  );
};

export default EyesOnYou;
