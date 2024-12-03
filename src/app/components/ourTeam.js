"use client";
import React, { useState } from "react";
import Image from "next/image";
import { team1, team2, team3, team4, team5 } from "../../../public/assets/images";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const OurTeam = () => {
  const ourTeam = [team1, team2, team3, team4];
  const teamData1 = [
    {
      text: 'LD Sharma',
      designation: 'Managing Director',
      img: team1,
    },
    {
      text: 'Stephen Suryawanshi',
      designation: 'Chief Executive Officer',
      img: team2,
    },
    {
      text: 'Sumit Sharma',
      designation: 'Chief Financial Officer',
      img: team3,
    },
    {
      text: 'Abhijit Banerjee',
      designation: 'Chief Operating Officer',
      img: team4,
    },
  ];
  const teamData2 = [
    {
      text: 'LD Sharma',
      designation: 'Managing Director',
      img: team1,
    },
    {
      text: 'Stephen Suryawanshi',
      designation: 'Chief Executive Officer',
      img: team2,
    },
    {
      text: 'Tamal Kundu',
      designation: 'Network Head CPS',
      img: team3,
    },
    {
      text: 'Abhijit Banerjee',
      designation: 'Chief Operating Officer',
      img: team4,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <>
      <section className="bg-[#211515] p-5 sm:px-20 sm:py-10 ">
        <div className="flex items-center justify-center">
          <h2 className="text-[28px] sm:text-5xl capitalize text-white text-center">
            Team
            {/* <span>Our Amazing </span> */}
            {/* <span className="font-bold">Core Team</span> */}
          </h2>
        </div>
        <div className="block sm:flex flex-col py-5 sm:py-10">
          {/* <div className="hidden sm:flex w-full items-center justify-between">
            {teamData1.map((item, index) => (
              <div key={index}>
                <div
                  key={index}
                  className={`flex items-center justify-center bg-[#33292F] flex-col w-[260px] h-[418px] rounded-full relative cursor-pointer`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="information absolute top-16">
                    <h3 className="text-xl font-bold leading-8 text-center text-white">
                      {item.text}
                    </h3>
                    <p className="text-sm font-light leading-5 text-center text-white py-2">
                      {item.designation}
                    </p>
                  </div>
                  <div
                    className={`w-full flex items-center justify-center absolute top-0 p-2 slide-bottom ${
                      hoverIndex === index ? "slide-bottom1" : "slide-top"
                    }`}
                  >
                    <Image
                      src={item.img}
                      alt="Core Team"
                      width={240}
                      height={240}
                    />
                  </div>
                  <div className="information absolute bottom-14">
                    <h3 className="text-xl font-bold leading-8 text-center text-white">
                      {item.text}
                    </h3>
                    <p className="text-sm font-light leading-5 text-center text-white py-2">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          {/* <div className="block sm:hidden w-full items-center justify-between">
            <Slider {...sliderSettings} >
            {teamData1.map((service, index) => (
              <div
                key={index} className="flex justify-center flex-important">
                <div
                  key={index}
                  className={`flex items-center justify-center bg-[#33292F] flex-col w-[260px] h-[418px] rounded-full relative cursor-pointer`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="information absolute top-16">
                    <h3 className="text-xl font-bold leading-8 text-center text-white">
                      {service.text}
                    </h3>
                    <p className="text-sm font-light leading-5 text-center text-white py-2">
                      {service.designation}
                    </p>
                  </div>
                  <div
                    className={`w-full flex items-center justify-center absolute top-0 p-2 slide-bottom ${
                      hoverIndex === index ? "slide-bottom1" : "slide-top"
                    }`}
                  >
                    <Image
                      src={service.img}
                      alt="Core Team"
                      width={240}
                      height={240}
                    />
                  </div>
                  <div className="information absolute bottom-14">
                    <h3 className="text-xl font-bold leading-8 text-center text-white">
                    {service.text}
                    </h3>
                    <p className="text-sm font-light leading-5 text-center text-white py-2">
                      {service.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </Slider>
          </div> */}
          <div className="hidden sm:flex w-full items-center justify-between py-2">
            {teamData2.map((item, index) => (
              <div key={index}>
                <div
                  key={index}
                  className={`flex items-center justify-center bg-[#33292F] flex-col w-[260px] h-[418px] relative cursor-pointer rounded-[50px] squareImage`}
                >
                  <div className="information absolute top-16">
                    <h3 className="text-xl font-bold leading-8 text-center text-white">
                      {item.text}
                    </h3>
                    <p className="text-sm font-light leading-5 text-center text-white py-2">
                      {item.designation}
                    </p>
                  </div>
                  <div className={`w-full flex items-center justify-center p-2 absolute bottom-0 profileImg`}>
                    <Image
                      src={item.img}
                      alt="Core Team"
                      width={240}
                      height={240}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="block sm:hidden w-full items-center justify-between py-2">
          <Slider {...sliderSettings} >
            {teamData2.map((service, index) => (
              <div key={index} className="flex justify-center flex-important">
                <div
                  key={index}
                  className={`flex items-center justify-center bg-[#33292F] flex-col w-[260px] h-[418px] relative cursor-pointer rounded-[50px] squareImage`}
                >
                  <div className="information absolute top-16">
                    <h3 className="text-xl font-bold leading-8 text-center text-white">
                      {service.text}
                    </h3>
                    <p className="text-sm font-light leading-5 text-center text-white py-2">
                      {service.designation}
                    </p>
                  </div>
                  <div className={`w-full flex items-center justify-center p-2 absolute bottom-0 profileImg`}>
                    <Image
                      src={service.img}
                      alt="Core Team"
                      width={240}
                      height={240}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          </div>

        </div>
      </section>
    </>
  );
};

export default OurTeam;
