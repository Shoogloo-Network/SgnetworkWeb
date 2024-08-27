"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  benifits,
  pink_page,
  line_page,
  two_page,
  purple_page,
  one_page,
  three_page,
  four_page,
  adv5,
  adv1,
  adv7,
  adv3,
  myntra,adidas,samsung,veromoda,

    adv2,
    
    adv4,
   
    adv6,
   
    adv8,
    adv9,
    adv10,
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
  adv9,
  adv10
];

import { motion } from "framer-motion";
import Link from "next/link";
const slides = [
  {
    key: 1,
    imageSrc: adv5,
    imageSrc1:myntra,
    content:["Delivered ROAS of 20 demonstrating increase in ROI by 45% from Q1 to Q4"],
    bgImageSrc: purple_page,
  },
  {
    key: 2,
    imageSrc: adv1,
    imageSrc1:adidas,
    content:["Jump in Revenue through strategic activities by 1.5X during new product Launch"],
    bgImageSrc: pink_page,
  },
  {
    key: 3,
    imageSrc: adv9,
    imageSrc1:samsung,
    content:["75% jump in the traffic during new Product Launch leading to 5.5X jump in the Revenue through strategic activities being carried out"],
    bgImageSrc: purple_page,
  },
  {
    key: 4,
    imageSrc: adv10,
    imageSrc1:veromoda,
    content:["Increase in Conversion rate from 1% to 2.2% leading to growth in revenue by 40% from Q2 to Q4"],
    bgImageSrc: pink_page,
  },
];

const LetterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isNextPage, setIsNextPage] = useState(false);

  const nextSlide = () => {
    if(isNextPage)
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    setIsNextPage(true);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
    setIsNextPage(false);
  };
  console.log(`slides[${currentSlide}] -`,slides[currentSlide].content);
  console.log('currentSlide',currentSlide);

  return (
    <div className="bg-[#FFF8F1] overflow-hidden ">
      <div>
        <div className="flex justify-center">
          <Image className="absolute" src={benifits} alt=""/>
        </div>

        <div className="block sm:flex justify-between  p-2 sm:p-24 relative overflow-hidden">
          <h2 className="leading-[1.3] text-[28px] sm:text-[3rem] font-extralight mt-10 mr-5 capitalize w-full sm:w-8/12 sm:pr-20 pr-2 inline">
            Brand’s Trusted Partner for 
            <span className="font-bold w-5/12 pl-2">
            Growth
            </span>
            <div className="relative z-50">
            <Link href="/pages/contact">
              <button className="uppercase mt-5 text-[18px] sm:text-lg font-[700] sm:font-medium bg-[#fff] sm:bg-transparent text-orange-600 border border-orange-600 rounded-full px-8 py-3 mr-2 orange-btn">
                Contact Us
                <span className="bg"></span>
              </button>
            </Link>
          </div>
          </h2>

          <div className="absolute sm:z-20 z-[99] sm:left-[51%] left-0 sm:top-[10%] top-[27%]">
            <motion.div
              initial={isNextPage ? { x: 0, y: 0 } : { x: -1500 }}
              animate={isNextPage ? { x: -1500 } : { x: 0, y: 0 }}
              // viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
              key={slides[currentSlide].key}
            >
              <Image className="z-10" src={slides[currentSlide].bgImageSrc} alt=""/>
              <div className="z-10 z-20 absolute p-10 top-0 -rotate-2">
              {/*<p>{slides[currentSlide].content}</p>
              <ul className="list-disc">
                {slides[currentSlide].content.map((item,index)=>{
                  return(
                  <li className="p-2">{item}</li>)
                })}
              </ul>*/}
                <Image
                    className="z-10"
                    src={slides[currentSlide].imageSrc1}
                    alt=""
                />
                <div className="block  p-2 bg-[#843C0B] text-[#fff]">
                <h2 className="text-center font-bold">Impact</h2>
                <p className="text-center text-[14px]">{slides[currentSlide].content}</p>
              </div>
                <div className="flex items-center py-10">
                  <Image
                    className="z-10 pr-2 max-w-[35%]"
                    src={slides[currentSlide].imageSrc}
                    alt=""
                  />
                  <Image className="z-10" src={line_page}  alt=""/>
                </div>
                {/*<h2 className="text-2xl w-4/6">Large Advertiser portfolio</h2>*/}
              </div>
            </motion.div>
          </div>

          <div className="z-10 sm:block hidden">
            <motion.div
              initial={isNextPage ? { x: 20, y: 20 } : { x: -20, y: -20 }}
              animate={isNextPage ? { x: -20, y: -20 } : { x: 0, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
              key={
                currentSlide != slides.length - 1
                  ? slides[currentSlide + 1].key
                  : slides[0].key
              }
            >
              <Image
                className="z-10 max-w-5xl"
                src={
                  currentSlide != slides.length - 1
                    ? slides[currentSlide + 1].bgImageSrc
                    : slides[0].bgImageSrc
                }
                alt=""
              />
              <div className="z-10 z-20 absolute p-10 top-0 -rotate-2">
                {/*<p>
                  {currentSlide != slides.length - 1
                    ? slides[currentSlide + 1].content
                    : slides[0].content}
                  </p>*/}
                  <Image
                  className="z-10"
                  src={currentSlide != slides.length - 1
                    ? slides[currentSlide + 1].imageSrc1
                    : slides[0].imageSrc1}
                  alt=""
                  />
                  <div className="block  p-2 bg-[#843C0B] text-[#fff]">
                  <h2 className="text-center font-bold">Impact</h2>
                  <p className="text-center text-[14px]">{
                    currentSlide != slides.length - 1
                      ? slides[currentSlide + 1].content
                      : slides[0].content
                  }</p>
                </div>
                <div className="flex items-center py-10">
                  <Image
                    className="z-10 pr-2 max-w-[35%]"
                    src={
                      currentSlide != slides.length - 1
                        ? slides[currentSlide + 1].imageSrc
                        : slides[0].imageSrc
                    }
                    alt=""
                  />
                  <Image className="z-10" src={line_page}  alt=""/>
                </div>
                {/*<h2 className="text-2xl w-4/6">Large Advertiser portfolio</h2>*/}
              </div>
            </motion.div>
          </div>

          <div className="sm:z-10 z-[9] relative  sm:hidden block mobile">
            <motion.div
              initial={isNextPage ? { x: 20, y: 20 } : { x: -20, y: -20 }}
              animate={isNextPage ? { x: 0, y: -20 } : { x: 0, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative my-[20px]"
              key={
                currentSlide != slides.length - 1
                  ? slides[currentSlide + 1].key
                  : slides[0].key
              }
            >
              <Image
                className="z-10 max-w-[23rem] sm:max-w-5xl"
                src={
                  currentSlide != slides.length - 1
                    ? slides[currentSlide + 1].bgImageSrc
                    : slides[0].bgImageSrc
                }
                alt=""
              />
              <div className="z-10 z-20 absolute p-10 top-0 -rotate-2">
                {/*<p>
                  {currentSlide != slides.length - 1
                    ? slides[currentSlide + 1].content
                    : slides[0].content}
                  </p>*/}
                  <Image
                  className="z-10"
                  src={
                    currentSlide != slides.length - 1
                      ? slides[currentSlide + 1].imageSrc1
                      : slides[0].imageSrc1
                  }
                  alt=""
                  />
                  <div className="block  p-2 bg-[#843C0B] text-[#fff]">
                  <h2 className="text-center font-bold">Impact</h2>
                  <p className="text-center text-[14px]">{
                    currentSlide != slides.length - 1
                      ? slides[currentSlide + 1].content
                      : slides[0].content
                  }</p>
                </div>
                <div className="flex items-center py-10">
                  <Image
                    className="z-10 pr-2 max-w-[35%]"
                    src={
                      currentSlide != slides.length - 1
                        ? slides[currentSlide + 1].imageSrc
                        : slides[0].imageSrc
                    }
                    alt=""
                  />
                  <Image className="z-10" src={line_page}  alt=""/>
                </div>
               {/* <h2 className="text-2xl w-4/6">Large Advertiser portfolio</h2>*/}
              </div>
            </motion.div>
          </div>

          <div className="absolute sm:left-[52%] left-0 z-[9] sm:top-[14%] top-[26%] sm:block block">
            <motion.div
              initial={isNextPage ? { x: 1000, y: 300 } : { x: 0, y: 0 }}
              animate={isNextPage ? { x: 0, y: 0 } : { x: 1000, y: 300 }}
              transition={{ duration: 0.7 }}
              className="relative"
              key={slides[currentSlide].key}
            >
              <Image className="z-10" src={slides[currentSlide].bgImageSrc}  alt=""/>
              <div className="z-10 z-20 absolute p-10 top-0 -rotate-2">
                {/*<p>{slides[currentSlide].content}</p>*/}
                <Image
                className="z-10"
                src={slides[currentSlide].imageSrc1}
                alt=""
                />
                <div className="block  p-2 bg-[#843C0B] text-[#fff]">
                  <h2 className="text-center font-bold">Impact</h2>
                  <p className="text-center text-[14px]">{slides[currentSlide].content}</p>
                </div>
                <div className="flex items-center py-10">
                  <Image
                    className="z-10 pr-2 max-w-[35%]"
                    src={slides[currentSlide].imageSrc}
                    alt=""
                  />
                  <Image className="z-10" src={line_page}  alt=""/>
                </div>
                {/*<h2 className="text-2xl w-4/6">Large Advertiser portfolio</h2>*/}
              </div>
            </motion.div>
          </div>

          <div className="ml-3 flex flex-row-reverse	sm:block gap-[20px] sm:h-auto h-[135px] sm:top-auto top-[40px] relative">
            <button onClick={nextSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
              >
                <circle cx="26.0615" cy="26.5518" r="25.5" stroke="black" />
                <path
                  d="M30.0629 27.2589C30.4535 26.8683 30.4535 26.2352 30.0629 25.8447L23.699 19.4807C23.3084 19.0902 22.6753 19.0902 22.2848 19.4807C21.8942 19.8712 21.8942 20.5044 22.2848 20.8949L27.9416 26.5518L22.2848 32.2086C21.8942 32.5991 21.8942 33.2323 22.2848 33.6228C22.6753 34.0133 23.3084 34.0133 23.699 33.6228L30.0629 27.2589ZM27.834 27.5518L29.3558 27.5518L29.3558 25.5518L27.834 25.5518L27.834 27.5518Z"
                  fill="black"
                />
              </svg>
            </button>

            <button onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="25.5"
                  transform="matrix(-1 0 0 1 52.1025 0.469727)"
                  stroke="black"
                />
                <path
                  d="M22.1011 27.1768C21.7106 26.7863 21.7106 26.1531 22.1011 25.7626L28.4651 19.3987C28.8556 19.0081 29.4888 19.0081 29.8793 19.3987C30.2698 19.7892 30.2698 20.4223 29.8793 20.8129L24.2225 26.4697L29.8793 32.1266C30.2698 32.5171 30.2698 33.1503 29.8793 33.5408C29.4888 33.9313 28.8556 33.9313 28.4651 33.5408L22.1011 27.1768ZM24.3301 27.4697L22.8082 27.4697L22.8082 25.4697L24.3301 25.4697L24.3301 27.4697Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-[#fff] mb-5">
        <div className="sm:w-[680px] w-full h-[130px] sm:h-[160px] flex items-center justify-center rounded-tr-[30px] rounded-br-[30px] p-4 bg-[#311C17]">
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
    </div>
  );
};

export default LetterSlider;
