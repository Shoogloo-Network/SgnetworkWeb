"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { publisher } from "../../../public/assets/images";
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

const Publishers = () => {
  const count = useMotionValue(0);
  const baseText = "Publishers";
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    });
    return controls.stop;
  }, []);

  return (
    <>
    <div className="relative block sm:flex  justify-between items-center p-4 sm:p-16 pb-10 overflow-x-hidden m-0 sm:m-10 mb-0 bg-[#FFF8F1] sm:bg-[#fff]">
      <Image
        className="absolute top-2 sm:top-0 left-[-20px] sm:left-auto"
        src={publisher}
        width="auto"
        height="auto"
        alt=""
      />
      <div className="w-full sm:w-1/2 sm:leading-7">
        <h2 className="text-[28px] sm:text-5xl font-light w-3/4 mb-3 leading-[32px] sm: leading-[4rem] min-h-20 sm:min-h-32">
          Solutions for <br />
          {displayText.length == 0 ? null : (
            <motion.span className="font-extrabold inline-block">{displayText}</motion.span>
          )}
        </h2>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1.5,
          }}
        >
          <p className="pr-0 sm:pr-28 font-light  text-[14px] sm:text-auto leading-[26px] sm:leading-auto">
          Collaborate with renowned international brands through exclusive campaigns and enjoy substantial commissions 
          </p>
          <div className="relative z-50">
            <Link href="https://shoogloo.trackier.io/" target="_blank">
              <button className="uppercase mt-5 text-[18px] sm:text-lg font-[700] sm:font-medium bg-[#fff] bg-transparent text-orange-600 border border-orange-600 rounded-full px-8 py-3 mr-2 orange-btn">
                Login
                <span className="bg"></span>
              </button>
            </Link>
            <Link href="https://shoogloo.trackier.io/register.html" target="_blank">
              <button className="uppercase mt-5 text-[18px] sm:text-lg font-[700] sm:font-medium bg-[#fff] bg-transparent text-orange-600 border border-orange-600 rounded-full px-8 py-3 orange-btn">
                Register as a publisher
                <span className="bg"></span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="w-full sm:w-1/2">
        <motion.ul
          initial={{ opacity: 0, x: 400 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1.5,
          }}
          className="solution-list list-inside ps-5 sm:block hidden"
        >
          <li className="py-3 pb-5 text-lg border-b">
            Wide Selection of Campaigns 
          </li>
          <li className="py-3 pb-5 text-lg border-b">
            Partner with top brands 
          </li>
          <li className="py-3 pb-5 text-lg border-b">
            Exclusive offers and Promos </li>
          <li className="py-3 pb-5 text-lg border-b">
            Reliable and Accurate Tracking 
          </li>
          <li className="py-3 pb-5 text-lg border-b">
            Analytics to Monetize your Traffic 
          </li>
          <li className="py-3 pb-5 text-lg border-b">
            Generous Commission and Timely payouts  
          </li>
        </motion.ul>
        <motion.ul
        initial={{ opacity: 0, x: 350 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1.5,
        }}
        className="solution-list list-inside ps-0 sm:ps-5 sm:hidden block"
      >
        <li className="py-3 pb-5 text-lg border-b">
          Wide Selection of Campaigns 
        </li>
        <li className="py-3 pb-5 text-lg border-b">
          Partner with top brands 
        </li>
        <li className="py-3 pb-5 text-lg border-b">
          Exclusive offers and Promos 
        </li>
        <li className="py-3 pb-5 text-lg border-b">
          Reliable and Accurate Tracking 
        </li>
        <li className="py-3 pb-5 text-lg border-b">
          Analytics to Monetize your Traffic 
        </li>
        <li className="py-3 pb-5 text-lg border-b">
          Generous Commission and Timely payouts  
        </li>
      </motion.ul>
      </div>
    </div>
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
    </>
  );
};

export default Publishers;