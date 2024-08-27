"use client"
import React, { useState, useEffect } from 'react';
import Images from "next/image";
import {
  services_1,
  services_2,
  services_3,
  services_4,
  services_purple,
  services,
} from "../../../public/assets/images";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Services = () => {

  const servicesData = [
    {
      text: 'Experienced team Delivering Performance',
      img1: services_purple,
      img2: services_1,
    },
    {
      text: 'Trusted by Brands globally',
      img1: services_purple,
      img2: services_2,
    },
    {
      text: 'Dedicated Account management team appointed',
      img1: services_purple,
      img2: services_3,
    },
    {
      text: 'Consultative and Strategic Approach in Planning and execution',
      img1: services_purple,
      img2: services_4,
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
          slidesToShow: 1.05, 
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [rotation1, setRotation1] = useState(-10);
  const [rotation2, setRotation2] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Swap rotations for the first image
      setRotation1(prevRotation => (prevRotation === 0 ? -10 : 0));

      // Swap rotations for the second image
      setRotation2(prevRotation => (prevRotation === 0 ? 10 : 0));
    }, 2000);

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);
  return (
    <div className="w-100 bg-[#FFF8F1] text-black p-2 sm:p-8 sm:pb-2 pt-5 relative">
      <Images
        width={200}
        height={100}
        className="absolute w-1/2 top-0"
        src={services}
        alt=""
      />
      <div className="sm:block hidden">
        <p className="font-extralight text-[28px] sm:text-5xl leading-[39px] text-center mb-3 capitalize">
        We Aspire to be our Advertisers Long Term Partner
        </p>
        <p className="font-extrabold text-[28px] sm:text-4xl leading-[39px] text-center hidden">The HighTest Quality Services</p>
      </div>
      <div className="sm:hidden block">
        <p className="font-extralight text-[28px] sm:text-5xl leading-[39px] text-center mb-3 capitalize">
          We Aspire to be our Advertisers Long Term Partner
        <span className="font-extrabold text-[28px] sm:text-4xl leading-[39px] text-center hidden"> The HighTest Quality Services</span></p>
      </div>
      <div className="hidden sm:flex justify-around my-2 sm:my-2 mx-0 sm:mx-5 ">
        <div className="w-[50%] sm:w-1/5  inline-block mt-0 sm:mt-0">
          <div className="relative animation-img-container">
            <Images
              src={services_purple}
              width={300}
              height={100}
              className="m-w-full transition-transform duration-300 purple-img relative"
              alt=""
            />
            <Images
              src={services_1}
              width={300}
              height={100}
              className="transition-transform duration-300 animated-img absolute service_img top-10 w-70 left-10"
              alt=""
            />
          </div>
          <p className="text-center mt-4 font-normal services-font capitalize">
            Experienced team Delivering Performance 
          </p>
        </div>

        <div className="w-[50%] sm:w-1/5 inline-block  mt-0 sm:mt-20">
          <div className="relative animation-img-container">
            <Images
              width={300}
              height={100}
              className="hover: transition-transform duration-300 purple-img relative"
              src={services_purple}
              alt=""
            />
            <Images
              width={300}
              height={100}
              className="transition-transform duration-300 animated-img absolute service_img top-10 w-70 left-10"
              src={services_2}
              alt=""
            />
          </div>
          <p className="text-center mt-4 font-normal services-font capitalize">
            Trusted by Brands globally 
          </p>
        </div>

        <div className="w-[50%] sm:w-1/5  inline-block  mt-0 sm:mt-0">
          <div className="relative animation-img-container">
            <Images
              width={300}
              height={100}
              className="hover: transition-transform duration-300 purple-img relative"
              src={services_purple}
              alt=""
            />
            <Images
              width={300}
              height={100}
              className="transition-transform duration-300 animated-img absolute service_img top-10 w-70 left-10"
              src={services_3}
              alt=""
            />
          </div>
          <p className="text-center mt-4 font-normal services-font capitalize">
            Dedicated Account management team appointed 
          </p>
        </div>

        <div className="w-[50%] sm:w-1/5 inline-block  mt-0 sm:mt-20">
          <div className="relative animation-img-container">
            <Images
              width={300}
              height={100}
              className="hover: transition-transform duration-300 purple-img relative"
              src={services_purple}
              alt=""
            />
            <Images
              width={300}
              height={100}
              className="transition-transform duration-300 animated-img absolute service_img top-10 w-70 left-10"
              src={services_4}
              alt=""
            />
          </div>
          <p className="text-center mt-4 font-normal services-font capitalize">
            Consultative and Strategic Approach in Planning and execution 
          </p>
        </div>
      </div>
      <div className="block sm:hidden justify-around my-2 sm:my-2 mx-0 sm:mx-5 service-slider">
      <Slider {...sliderSettings} >
      {servicesData.map((service, index) => (
        
        <div key={index} className="inline-block sm:hidden justify-around my-2 sm:my-2 mx-0 sm:mx-5 !w-[80%]">
          <div className="w-[100%] sm:w-1/5  block mt-0 sm:mt-0">
            <div className="relative animation-img-container left-3">
           
              <Images
                src={service.img1.src}
                width={300}
                height={100}
                style={{ transform: `rotate(${rotation1}deg)` }}
                className="m-w-full transition-transform duration-300"
                alt=""
              />
              <Images
                src={service.img2.src}
                width={300}
                height={100}
                style={{ transform: `rotate(${rotation2}deg)` }}
                className="transition-transform duration-300 absolute top-7 left-7 !w-[75%]"
                alt=""
              />
            </div>
            <p className="text-center mt-4 font-normal services-font capitalize">{service.text}</p>
          </div>
        </div>
      ))}
    </Slider>
      </div>
    </div>
  );
};

export default Services;
