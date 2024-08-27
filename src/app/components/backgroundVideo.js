"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { playpause } from "../../../public/assets/images";

const BackgroundVideo = ({imgUrl,imgmobileUrl}) => {
  return (
    <>
      <div className="relative mt-16 sm:mt-0">
      {/* <Image src={imgUrl} alt="image" width={1200} height={800} layout="responsive" /> */}
      <Image src={imgUrl} alt="image" width={1200} height={800} layout="responsive" className="w-full h-auto object-cover sm:block hidden" />
      {imgmobileUrl && 
      <Image src={imgmobileUrl} alt="mobileimage" width={1200} height={800} layout="responsive" className="w-full h-auto sm:h-[100vh] object-cover sm:hidden block" />
      }
      {/* <img src={imgUrl} alt="Image" className="w-full h-auto object-cover sm:block hidden"/>
      <img src={imgmobileUrl} alt="Image" className="w-full h-auto sm:h-[100vh] object-cover sm:hidden block"/> */}

        {/*<video autoPlay muted loop className="w-full h-[500px] sm:h-full object-cover">
          <source src="/assets/bgvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 1,
            }}
            className="relative p-5 sm:p-10 pl-7 -top-4 self-center z-10 text-white sm:hidden block"
          >
            <h3 className="font-gilroy  text-[28px] sm:text-5xl font-[300] leading-[65px] sm:leading-96 text-left">
              
              Welcome to
            </h3>
            <p className="font-gilroy text-[54px] sm:text-8xl font-extrabold leading-[65px] sm:leading-96 text-left sm:leading-96">
              Shoogloo Network
            </p>
            <p className="text-[14px] leading-[18px] font-[600] sm:text-3xl mt-5" >
              Leading Affiliate and Performance Partner since 2011 
            </p>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 100 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className="relative p-5 sm:p-10 pl-7 -top-4 self-center z-10 text-white sm:block hidden"
        >
          <h3 className="font-gilroy  text-3xl sm:text-5xltext-5xl font-extralight leading-8 sm:leading-96  text-left">
            
            Welcome to
          </h3>
          <p className="font-gilroy text-5xl sm:text-8xl font-extrabold leading-8 sm:leading-96 text-left sm:leading-96">
            Shoogloo Network
          </p>
          <p className="text-xl sm:text-3xl">
            Leading Affiliate and Performance Partner since 2011 
          </p>
        </motion.div>
          <div className="text-white relative  right-[2rem] sm:right-[7rem]">
            <Image src={playpause} alt="image" width={190} height={190} />
          </div>
        </div>
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 1,
            }}
            className="text-white w-full sm:w-[300px]  border absolute bottom-[10%] sm:bottom-[20%]"
          >

          </motion.div>
        {/* <div className="text-white w-[300px] border absolute bottom-[20%]">
        </div> */}
      </div>
    </>
  );
};

export default BackgroundVideo;
