"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"
import { footer_banner } from "../../../public/assets/images";

const GetConnected = () => {
  return (
    <>
      <div className="bg-transparent flex items-center justify-center relative mt-0 sm:mt-10 h-full">
        <div className="w-[100%] h-full relative sm:relative footer-banner">
          <div className="flex flex-col w-1/2 absolute left-6 sm:left-24 top-8 sm:top-24 sm:pr-20">
            <h2 className="sm:pt-10 text-[14px] sm:pl-0 sm:text-4xl leading-normal sm:leading-[39px] font-bold capitalize">Grow New Horizon by engaging in effective Partnership Program</h2>
            <Link href="/pages/contact">
                <button className="mt-3 sm:mt-5 text-base sm:text-lg font-[700] sm:font-medium bg-orange-600 text-white-600 border border-orange-600 rounded-xl px-4 sm:px-10 py-1 sm:py-4 mr-2 orange-btn" style={{color:"#ffffff"}}>
                  Let&rsquo;s Connect
                  <span className="bg"></span>
                </button>
              </Link>
          </div>
          <Image src={footer_banner} alt="image" layout="responsive" className="!h-auto"/>
          </div>
        {/*<div className="text-white relative sm:absolute w-full sm:w-[70%] mx-auto block  sm:flex items-center flex-col">
          <p className="p-4 font-Gilroy text-[26px] sm:text-5xl font-extrabold leading-[32px] sm:leading-snug tracking-wide text-center">
            <span className="capitalize">Grow New Horizon by engaging in effective </span> Partnership Program
          </p>
          <a
            href="#"
            className="flex items-center justify-center bg-[#e55b02] rounded-[50px] px-3 w-[260px] m-auto sm:mt-10"
          >
            <div className="[font-family:'Mulish-Bold',Helvetica] text-white text-[16px] sm:text-[20px] font-[700] sm:font-auto leading-[normal] tracking-normal p-[16px] uppercase">
              <p>Let&apos;s Connect</p>
            </div>
          </a>
  </div>*/}
      </div>
    </>
  );
};

export default GetConnected;
