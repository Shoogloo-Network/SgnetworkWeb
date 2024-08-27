"use client";
import React from "react";
import Image from "next/image";
import { dashedBorder } from "../../../public/assets/images";
import Link from "next/link";

const WithUs = () => {

  return (
    <>
      <div className="relative flex justify-between items-center p-10 overflow-x-hidden min-h-screen">
        <div className="w-full leading-7 flex items-center justify-center text-center flex-col mx-10 py-10">
          <h2 className="text-5xl font-light capitalize w-3/4 mb-3 leading-[4rem] min-h-32">
            <span className="">What we promise to provide you</span>
            <br />
            <span className="font-bold">the hightest quality services</span>
          </h2>
          <div className="w-full flex items-center justify-between m-10 relative z-20">
            <div className="absolute w-[85%] -left-[50px] z-10 top-20">
              <Image src={dashedBorder} alt="dashedBorder" layout="responsive" />
            </div>
            <div className="flex items-center justify-center flex-col border border-black rounded-full w-[240px] h-[240px] hover:text-white hover:bg-[#211515] transition-all duration-500 ease-in-out textIcon z-20 relative bg-white">
              <div className="flex items-center justify-center text-center w-[80px] h-[80px] p-3">
                <svg
                  width="68"
                  height="69"
                  viewBox="0 0 68 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.7109 31.5679V65.2827L29.4609 66.4077L0.210938 51.8179V15.2554L29.4609 0.630371L58.7109 15.2554V41.4116H54.2109V20.3179L31.7109 31.5679ZM29.4609 5.69287L20.9883 9.91162L42.8203 20.9507L51.4336 16.6616L29.4609 5.69287ZM27.2109 60.2554V31.5679L4.71094 20.3179V49.0054L27.2109 60.2554ZM7.48828 16.6616L29.4609 27.6304L37.8281 23.4819L15.9609 12.4429L7.48828 16.6616ZM45.2109 59.4116V54.9116H67.7109V59.4116H45.2109ZM45.2109 45.9116H67.7109V50.4116H45.2109V45.9116ZM36.2109 68.4116V63.9116H40.7109V68.4116H36.2109ZM36.2109 50.4116V45.9116H40.7109V50.4116H36.2109ZM36.2109 59.4116V54.9116H40.7109V59.4116H36.2109ZM45.2109 68.4116V63.9116H67.7109V68.4116H45.2109Z"
                    fill="black"
                  />
                </svg>
              </div>
              <p className="text-xl font-semibold text-center p-4">
                Product & Solution <br /> market fit
              </p>
            </div>
            <div className="flex items-center justify-center flex-col border border-black rounded-full w-[240px] h-[240px] text-white bg-[#211515] transition-all duration-500 ease-in-out textIcon z-20 relative">
              <div className="flex items-center justify-center text-center w-[80px] h-[80px] p-3">
                <svg
                  width="68"
                  height="69"
                  viewBox="0 0 68 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.7109 31.5679V65.2827L29.4609 66.4077L0.210938 51.8179V15.2554L29.4609 0.630371L58.7109 15.2554V41.4116H54.2109V20.3179L31.7109 31.5679ZM29.4609 5.69287L20.9883 9.91162L42.8203 20.9507L51.4336 16.6616L29.4609 5.69287ZM27.2109 60.2554V31.5679L4.71094 20.3179V49.0054L27.2109 60.2554ZM7.48828 16.6616L29.4609 27.6304L37.8281 23.4819L15.9609 12.4429L7.48828 16.6616ZM45.2109 59.4116V54.9116H67.7109V59.4116H45.2109ZM45.2109 45.9116H67.7109V50.4116H45.2109V45.9116ZM36.2109 68.4116V63.9116H40.7109V68.4116H36.2109ZM36.2109 50.4116V45.9116H40.7109V50.4116H36.2109ZM36.2109 59.4116V54.9116H40.7109V59.4116H36.2109ZM45.2109 68.4116V63.9116H67.7109V68.4116H45.2109Z"
                    fill="#ea580c"
                  />
                </svg>
              </div>
              <p className="text-xl font-semibold text-center p-4">
              350+ campaigns <br /> available
              </p>
            </div>
            <div className="flex items-center justify-center flex-col border border-black rounded-full w-[240px] h-[240px] hover:text-white hover:bg-[#211515] transition-all duration-500 ease-in-out textIcon z-20 relative bg-white">
              <div className="flex items-center justify-center text-center w-[80px] h-[80px] p-3">
                <svg
                  width="68"
                  height="69"
                  viewBox="0 0 68 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.7109 31.5679V65.2827L29.4609 66.4077L0.210938 51.8179V15.2554L29.4609 0.630371L58.7109 15.2554V41.4116H54.2109V20.3179L31.7109 31.5679ZM29.4609 5.69287L20.9883 9.91162L42.8203 20.9507L51.4336 16.6616L29.4609 5.69287ZM27.2109 60.2554V31.5679L4.71094 20.3179V49.0054L27.2109 60.2554ZM7.48828 16.6616L29.4609 27.6304L37.8281 23.4819L15.9609 12.4429L7.48828 16.6616ZM45.2109 59.4116V54.9116H67.7109V59.4116H45.2109ZM45.2109 45.9116H67.7109V50.4116H45.2109V45.9116ZM36.2109 68.4116V63.9116H40.7109V68.4116H36.2109ZM36.2109 50.4116V45.9116H40.7109V50.4116H36.2109ZM36.2109 59.4116V54.9116H40.7109V59.4116H36.2109ZM45.2109 68.4116V63.9116H67.7109V68.4116H45.2109Z"
                    fill="black"
                  />
                </svg>
              </div>
              <p className="text-xl font-semibold text-center p-4">
                Market analysis
              </p>
            </div>
            <div className="flex items-center justify-center flex-col border border-black rounded-full w-[240px] h-[240px] hover:text-white hover:bg-[#211515] transition-all duration-500 ease-in-out textIcon z-20 relative bg-white">
              <div className="flex items-center justify-center text-center w-[80px] h-[80px] p-3">
                <svg
                  width="68"
                  height="69"
                  viewBox="0 0 68 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.7109 31.5679V65.2827L29.4609 66.4077L0.210938 51.8179V15.2554L29.4609 0.630371L58.7109 15.2554V41.4116H54.2109V20.3179L31.7109 31.5679ZM29.4609 5.69287L20.9883 9.91162L42.8203 20.9507L51.4336 16.6616L29.4609 5.69287ZM27.2109 60.2554V31.5679L4.71094 20.3179V49.0054L27.2109 60.2554ZM7.48828 16.6616L29.4609 27.6304L37.8281 23.4819L15.9609 12.4429L7.48828 16.6616ZM45.2109 59.4116V54.9116H67.7109V59.4116H45.2109ZM45.2109 45.9116H67.7109V50.4116H45.2109V45.9116ZM36.2109 68.4116V63.9116H40.7109V68.4116H36.2109ZM36.2109 50.4116V45.9116H40.7109V50.4116H36.2109ZM36.2109 59.4116V54.9116H40.7109V59.4116H36.2109ZM45.2109 68.4116V63.9116H67.7109V68.4116H45.2109Z"
                    fill="black"
                  />
                </svg>
              </div>
              <p className="text-xl font-semibold text-center p-4">
                Leadership and team training
              </p>
            </div>
          </div>
          <div>
          <Link href="https://shoogloo.trackier.io/" target="_blank">
            <button className="uppercase mt-5 text-lg font-medium bg-transparent text-orange-600 border border-orange-600 rounded-full px-8 py-3 mr-2 w-[160px] orange-btn">
              Login
              <span className="bg"></span>
            </button>
          </Link>
          <Link href="https://shoogloo.trackier.io/register.html" target="_blank">
            <button className="uppercase mt-5 text-lg font-medium bg-transparent text-orange-600 border border-orange-600 rounded-full px-8 py-3 orange-btn">
              Register as a publisher
              <span className="bg"></span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithUs;
