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
    PublisherPink,
    PublisherPurple,
    PublisherRight1
} from "../../../public/assets/images";

import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
      key: 1,
      imageSrc: one_page,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      bgImageSrc: purple_page,
    },
    {
      key: 2,
      imageSrc: two_page,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      bgImageSrc: pink_page,
    },
    {
      key: 3,
      imageSrc: three_page,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      bgImageSrc: purple_page,
    },
    {
      key: 4,
      imageSrc: four_page,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      bgImageSrc: pink_page,
    },
  ];

const PublishersSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
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


    return (
        <div className="bg-[#FFF8F1] overflow-hidden">
        <div>
          <div className="flex justify-center">
            <Image className="absolute" src={benifits} />
          </div>
  
          <div className="flex justify-between p-24 relative overflow-hidden">
            <h2 className="leading-[1.3] text-5xl font-extralight mt-10 mr-5 capitalize w-8/12 pr-20">
              What we promise to provide you{" "}
              <span className="font-bold w-5/12">
                {" "}
                the hightest quality services{" "}
              </span>
            </h2>
  
            <div className="absolute z-20 left-[50%] top-[10%]">
              <motion.div
                initial={isNextPage ? { x: 0, y: 0 } : { x: -1500 }}
                animate={isNextPage ? { x: -1500 } : { x: 0, y: 0 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
                key={slides[currentSlide].key}
              >
                <Image className="z-10" src={slides[currentSlide].bgImageSrc} />
                <div className="z-10 z-20 absolute p-10 top-0 -rotate-2">
                  <p>{slides[currentSlide].content}</p>
                  <div className="flex items-center py-10">
                    <Image
                      className="z-10 pr-2"
                      src={slides[currentSlide].imageSrc}
                    />
                    <Image className="z-10" src={line_page} />
                  </div>
                  <h2 className="text-2xl w-4/6">Large Advertiser portfolio</h2>
                </div>
              </motion.div>
            </div>
  
            <div className="z-10">
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
                />
                <div className="z-10 z-20 absolute p-10 top-0 -rotate-2">
                  <p>
                    {currentSlide != slides.length - 1
                      ? slides[currentSlide + 1].content
                      : slides[0].content}
                  </p>
                  <div className="flex items-center py-10">
                    <Image
                      className="z-10 pr-2"
                      src={
                        currentSlide != slides.length - 1
                          ? slides[currentSlide + 1].imageSrc
                          : slides[0].imageSrc
                      }
                    />
                    <Image className="z-10" src={line_page} />
                  </div>
                  <h2 className="text-2xl w-4/6">Large Advertiser portfolio</h2>
                </div>
              </motion.div>
            </div>
  
            <div className="absolute left-[52%] z-[9] top-[14%]">
              <motion.div
                initial={isNextPage ? { x: 1000, y: 300 } : { x: 0, y: 0 }}
                animate={isNextPage ? { x: 0, y: 0 } : { x: 1000, y: 300 }}
                transition={{ duration: 0.7 }}
                className="relative"
                key={slides[currentSlide].key}
              >
                <Image className="z-10" src={slides[currentSlide].bgImageSrc} />
                <div className="z-10 z-20 absolute p-10 top-0 -rotate-2">
                  <p>{slides[currentSlide].content}</p>
                  <div className="flex items-center py-10">
                    <Image
                      className="z-10 pr-2"
                      src={slides[currentSlide].imageSrc}
                    />
                    <Image className="z-10" src={line_page} />
                  </div>
                  <h2 className="text-2xl w-4/6">Large Advertiser portfolio</h2>
                </div>
              </motion.div>
            </div>
  
            <div className="ml-3">
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
      </div>
    );
};

export default PublishersSlider;
