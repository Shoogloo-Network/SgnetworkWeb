"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  left_svg,
  lorem1,
  lorem2,
  right_sgv,
  three_img,
  one_img,
  two_img,
  four_img
} from "../../../public/assets/images";
import Image from "next/image";
import Link from "next/link";
const WhatisLorem = () => {
  return (
    <div className="p-2 sm:p-8 overflow-hidden">
      <p className="font-extralight mb-3 py-2 sm:py-0 sm:pb-5 text-[28px] sm:text-5xl leading-[39px] text-center">
      Your Extended team for Complete Management <span className="font-bold hidden"></span>
      </p>

      <div className="flex justify-center align-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 70 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 2,
          }}
          className="relative p-10 self-center z-50 sm:block hidden mr-5"
        >
          <Image  width="auto"
        height="auto"   alt=""  src={lorem1} />
          <Image
           width="auto"
           height="auto"
            className="absolute bottom-25 left-[-2.625rem]"
            src={left_svg}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          whileInView={{ opacity: 1, x:-30 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 2,
          }}
          className="relative sm:block hidden ml-5"
        >
        <Image  width={430}
        height={400}   alt=""  src={lorem2} />
          <Image
            width={100}
            height={100}
            className="absolute top-[-1.625rem] right-[-2.375rem] w-1/5"
            src={right_sgv}
            alt=""
          />
        </motion.div>

        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 10 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 2,
        }}
        className="relative p-2  self-center z-50 sm:hidden block"
      >
        <Image  width="auto"
      height="auto"   alt=""  src={lorem1} />
        <Image
         width="auto"
         height="auto"
          className="absolute bottom-[-75px] left-[1.625rem] sm:left-[-2.625rem]"
          src={left_svg}
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: -10 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 2,
        }}
        className="relative sm:hidden block"
      >
        <Image width={430} height={400} src={lorem2}   alt="" />
        <Image
          width={100}
          height={100}
          className="absolute top-[-0.75rem] right-[-1rem] w-1/5"
          src={right_sgv}
          alt=""
        />
      </motion.div>
      </div>

      {/* <motion.div
      //   initial={{ opacity: 0, y: 40 }}
      //   whileInView={{ opacity: 1, y: 0 }}
      //   viewport={{ once: true }}
      //   transition={{
      //     ease: "linear",
      //     duration: 1.7,
      //   }}
      //   className=" inline-flex overflow-scroll sm:overflow-hidden w-full  sm:w-[95%] m-auto  sm:flex justify-unset sm:justify-around pt-12 py-0 sm:py-5 text-lg"
      // > 
      //   <div className="relative  flex item-center justify-start sm:justify-center mb-0 sm:mb-[30px] border-b-2 py-3 sm:py-0 border[#ECECEC] sm:border-0  w-[400px]  items-center sm:w-1/4 sm:whitespace-normal whitespace-nowrap">
      //     <Image width={30} height={30} src={one_img}   alt="" className="h-[62px]"/>
      //     <button className="ps-2  text-[16px] text-left capitalize">Our Tracking tool enables Advertisers with Seamless Data Tracking </button>
      //   </div>

      //   <div className="relative flex item-center  justify-start sm:justify-center  mb-0 sm:mb-[30px] border-b-2  py-3 sm:py-0  border[#ECECEC] sm:border-0  w-[400px] items-center sm:w-1/4 sm:whitespace-normal whitespace-nowrap sm:ml-auto ml-[60%]">
      //     <Image width={30} height={30} src={two_img}   alt=""  className="h-[62px]"/>
      //     <button className="ps-2  text-[16px] text-left capitalize">Detailed Reporting and Analytics provided </button>
      //   </div>

      //   <div className="relative flex item-center  justify-start sm:justify-center  mb-0 sm:mb-[30px] border-b-2  py-3 sm:py-0  border[#ECECEC] sm:border-0  w-[400px]  items-center sm:w-1/4 sm:whitespace-normal whitespace-nowrap  sm:ml-auto ml-[30%]">
      //     <Image width={30} height={30} src={three_img}   alt=""  className="h-[62px]"/>
      //     <button className="ps-2  text-[16px] text-left capitalize">End to End Campaign Management </button>
      //   </div>

      //   <div className="relative flex item-center  justify-start sm:justify-center  mb-0 sm:mb-[30px] border-b-2  py-3 sm:py-0  border[#ECECEC] sm:border-0  w-[400px]  items-center sm:w-1/4 sm:whitespace-normal whitespace-nowrap  sm:ml-auto ml-[30%]">
      //     <Image width={30} height={30} src={four_img}   alt=""  className="h-[62px]"/>
      //     <button className="ps-2 text-[16px] text-left">Supports Multiple Integration Methods – Pixel, Postback, API </button>
      //   </div>

       </motion.div>*/}
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1.7,
        }}
        className=" block overflow-hidden sm:overflow-hidden w-full  sm:w-[95%] m-auto  sm:flex justify-unset sm:justify-around pt-12 py-0 sm:py-5 text-lg"
      > 
        <div className="relative  flex item-center justify-start sm:justify-center mb-0 sm:mb-[30px] border-b-2 py-3 sm:py-0 border[#ECECEC] sm:border-0  w-full  items-center sm:w-1/4 sm:whitespace-normal whitespace-normal">
          <Image width={30} height={30} src={one_img}   alt="" className="h-[62px]"/>
          <button className="ps-2  text-[16px] text-left capitalize">Experienced leadership team </button>
        </div>

        <div className="relative flex item-center  justify-start sm:justify-center  mb-0 sm:mb-[30px] border-b-2  py-3 sm:py-0  border[#ECECEC] sm:border-0  w-full items-center sm:w-1/4 sm:whitespace-normal whitespace-normal sm:ml-auto ml-auto">
          <Image width={30} height={30} src={two_img}   alt=""  className="h-[62px]"/>
          <button className="ps-2  text-[16px] text-left capitalize">20+ years of experience in building affiliate network </button>
        </div>

        <div className="relative flex item-center  justify-start sm:justify-center  mb-0 sm:mb-[30px] border-b-2  py-3 sm:py-0  border[#ECECEC] sm:border-0  w-full  items-center sm:w-1/4 sm:whitespace-normal whitespace-normal  sm:ml-auto ml-auto">
          <Image width={30} height={30} src={three_img}   alt=""  className="h-[62px]"/>
          <button className="ps-2  text-[16px] text-left capitalize">Daily new inventory getting added </button>
        </div>

        <div className="relative flex item-center  justify-start sm:justify-center  mb-0 sm:mb-[30px] border-b-2  py-3 sm:py-0  border[#ECECEC] sm:border-0  w-full  items-center sm:w-1/4 sm:whitespace-normal whitespace-normal  sm:ml-auto ml-auti">
          <Image width={30} height={30} src={four_img}   alt=""  className="h-[62px]"/>
          <button className="ps-2 text-[16px] text-left">Detailed MIS tool for reporting and Analytics </button>
        </div>

       </motion.div>
      <div className="self-center flex justify-center py-3 mb-0 sm:mb-[0px] whitespace-normal   sm:ml-auto sm:mr-auto  ml-[10%] mr-[10%]  border-unset sm:border-b sm:border-slate-300">
      <Link href="/pages/[id]" as="/pages/contact" >
        <button className="inline-flex items-center text-[#FD8624] pt-3  text-[16px] ">
        Get started by Registering as an Advertiser with us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="16"
            viewBox="0 0 33 16"
            fill="none"
            className="ml-2"
          >
            <path
              d="M32.1685 8.49861C32.559 8.10809 32.559 7.47492 32.1685 7.0844L25.8045 0.720436C25.414 0.329912 24.7808 0.329912 24.3903 0.720436C23.9998 1.11096 23.9998 1.74413 24.3903 2.13465L30.0472 7.7915L24.3903 13.4484C23.9998 13.8389 23.9998 14.472 24.3903 14.8626C24.7808 15.2531 25.414 15.2531 25.8045 14.8626L32.1685 8.49861ZM0.842781 8.7915H31.4614V6.7915H0.842781V8.7915Z"
              fill="#FD8624"
            />
          </svg>
        </button>
      </Link>
      </div>
    </div>
  );
};

export default WhatisLorem;
