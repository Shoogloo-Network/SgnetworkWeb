  "use client";
  import React, { useEffect } from "react";
  import { motion, useMotionValue, useTransform, animate } from "framer-motion";
  import { advertiser } from "../../../public/assets/images";
  import Image from "next/image";
  import Link from "next/link";

  import {
    adv1,
    adv2,
    adv3,
    adv4,
    adv5,
    adv6,
    adv7,
    adv8,
    publishersBg,
  } from "../../../public/assets/images";
  
  const images = [
    adv1,
    adv2,
    adv3,
    adv4,
    adv5,
    adv6,
    adv7,
    adv8,
    adv1
  ];

  const Solutions = () => {
    const count = useMotionValue(0);
    const baseText = "Advertisers";
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
    }, );

    return (
      <>
      <div className="block sm:flex relative justify-between items-center p-2 sm:p-20 pb-10 overflow-x-hidden border-b m-2 sm:m-10 sm:mt-0 mb-0">
         <Image className="absolute top-0 sm:top-10 left-[-20px] sm:left-auto" src={advertiser} width={100} height={100}   alt=""/>
        <div className="w-full sm:w-1/2 leading-7">
          <h2 className="text-[28px] sm:text-5xl font-light w-full sm:w-3/4 mb-3 leading-[4rem] sm:leading-[4rem] min-h-20 sm:min-h-32">
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
            <p className="pr-0 sm:pr-28 font-light text-[14px] sm:text-auto leading-[26px] sm:leading-auto">
            Your Preferable Partner for Profitable Partnership 
            <br />
            Trusted Globally 
            {/* <br />
            Contact us now  */}
            </p>
            <Link href="/pages/contact">
              <button className="uppercase mt-5 text-lg font-medium bg-transparent text-orange-600 border border-orange-600 rounded-full px-8 py-3 orange-btn">
                Contact us
                <span className="bg"></span>
              </button>
            </Link>
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
            className="solution-list list-inside ps-5 sm-block hidden"
          >
            <li className="py-3 pb-5 text-lg border-b">
              Smooth Campaign Setup 
            </li>
            <li className="py-3 pb-5 text-lg border-b">
              Increase sales and ROI by 20% 
            </li>
            <li className="py-3 pb-5 text-lg border-b">Access to varied Traffic sources</li>
            <li className="py-3 pb-5 text-lg border-b">
                Expand Audience Reach 
            </li>
            <li className="py-3 pb-5 text-lg border-b">
              Detailed Analytics and Insights 
            </li>
            <li className="py-3 pb-5 text-lg border-b">
              Complete Transparency
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
            className="solution-list list-inside ps-0 sm:ps-5 sm-hidden block"
          >
            <li className="py-3 pb-5 text-lg border-b">
              Smooth Campaign Setup 
            </li>
            <li className="py-3 pb-5 text-lg border-b">
              Increase sales and ROI by 20% 
            </li>
            <li className="py-3 pb-5 text-lg border-b">Access to varied Traffic sources  </li>
            <li className="py-3 pb-5 text-lg border-b">
              Expand Audience Reach 
            </li>
            <li className="py-3 pb-5 text-lg border-b">
              Detailed Analytics and Insights 
            </li>
            <li className="py-3 pb-5 text-lg border-b">
              Complete Transparency
            </li>
          </motion.ul>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-[680px] h-[130px] sm:h-[160px] flex items-center justify-center rounded-tr-[30px] rounded-br-[30px] p-4 bg-[#311C17]">
          <p className="font-gilroy text-[17px] sm:text-4xl text-white font-extrabold leading-[21px] sm:leading-10 text-center flex items-center justify-center mb-3 opacity-50">
            Our Advertisers
          </p>
        </div>

        <div className="imageslide-container items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="mx-2  w-[215px] mr-2 bg-[#211515] imageSlide"
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
      </>
    );
  };

  export default Solutions;
