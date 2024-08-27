"use client";
import React, { useEffect } from 'react'
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { publisher, callicon, mapicon, messageicon, ContactIcon } from "../../../public/assets/images";
// import {callicon, mapicon, messageicon} from "../../../public/assets/icons"
import {
  publishers1,
  publishers2,
  publishers3,
  publishers4,
  publishers5,
  publishersBg,
} from "../../../public/assets/images";

const images = [
  publishers1,
  publishers2,
  publishers3,
  publishers4,
  publishers5,
  publishers1,
  publishers2,
  publishers3,
  publishers4,
  publishers5,
];

const ContactForm = () => {
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
      <div className="relative block sm:flex justify-between items-center p-4 sm:p-16 pb-0 sm:pb-10 overflow-x-hidden  mb-0 bg-[#fff8f1]">
        <Image
          className="absolute top-2 sm:top-10 max-w-[90%] sm:max-w-[100%]"
          src={ContactIcon}
          width="auto"
          height="auto"
          alt=""
        />
        <div className="w-full sm:w-1/2 leading-7">
          <h2 className="text-[26px] sm:text-5xl leading-[39px]  font-light  mb-3 sm:leading-[4rem] min-h-20 sm:min-h-32 text-center sm:text-left">

            If you need any info, <span className='font-bold'>p</span>lease <span className='font-bold'>contact us!</span>

          </h2>
          <div>

            <div className='flex flex-col gap-5 mt-5'>
              <div className='flex gap-5 items-center'>

                <Image
                  className="w-[54px] h-[54px]"
                  src={callicon}
                  width="54"
                  height="54"
                  alt=""
                />
                <div>
                  <h3>Phone</h3>
                  <h3 className='font-bold te underline'>+91 0124 491 7700 </h3>
                </div>

              </div>
              <div className='flex gap-5  items-center'>
                <Image
                  className="w-[54px] h-[54px]"
                  src={messageicon}
                  width="54"
                  height="54"
                  alt=""
                />
                <div>
                  <h3>Email</h3>
                  <p className='font-bold te underline'>info@shoogloo.com</p>
                </div>

              </div>
              <div className='flex gap-5  items-center'>
              <Image
                className="w-[54px] h-[54px]"
                src={mapicon}
                width="54"
                height="54"
                alt=""
              />
              <div>
                <h1>Address</h1>
                <p className='font-bold'>Shoogloo Network Private Limited</p>
                <h1 className='font-bold te underline'>UNIT 461 – 463, 4th Floor, JMD Megapolis, Sector 48, <br />Gurgaon, Haryana – 122001, India </h1>


               
              </div>

            </div>
              <div className='flex gap-5 hidden'>
                <Image
                  className=""
                  src={mapicon}
                  width="auto"
                  height="auto"
                  alt=""
                />
                <div>
                  <h3>Website</h3>
                  <p className='font-bold te underline'>www.shoogloo.com</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 400 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1.5,
          }} className="w-1/2 bg-[#211515] px-7 py-9 sm:block hidden" style={{ borderRadius: "1.5rem" }}>
          <ul


            className="solution-list list-inside"
          >
            <div>
              <h3 className='text-white text-2xl py-7'>Leave a message</h3>
              <form action="">
                <div className='flex gap-3'>
                  <div className="mb-4 w-1/2">
                    <input
                      className="shadow appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="mb-4 w-1/2">

                    <input
                      className="shadow appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Last Name"
                    />
                  </div>
                </div>


                <div className="mb-4">

                  <input
                    className="shadow appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Mobile Number"
                  />
                </div>

                <div className="mb-4">

                  <input
                    className="shadow appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="confirmPassword"
                    type="password"
                    placeholder="Email*"
                  />
                </div>
                <div className="mb-4">

                  <textarea placeholder='Message Here' className='shadow appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' rows="6" cols="50"></textarea>
                </div>

                <button
                  className="bg-[#e55b02] hover:bg[#e55b02] text-white font-bold py-3 px-14 rounded-xl focus:outline-none focus:shadow-outline" style={{ borderRadius: "30px" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1.5,
          }} className="w-full sm:w-1/2 bg-[#211515] px-7 py-5 sm:hidden block mt-10" style={{ borderRadius: "1.5rem" }}>
          <ul


            className="solution-list list-inside"
          >
            <div>
              <h3 className='text-white text-[18px] sm:text-2xl py-4 text-center'>Leave a message</h3>
              <form action="">
                <div className='flex gap-3'>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="mb-4">

                    <input
                      className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Last Name"
                    />
                  </div>
                </div>


                <div className="mb-4">

                  <input
                    className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Mobile Number"
                  />
                </div>

                <div className="mb-4">

                  <input
                    className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="confirmPassword"
                    type="password"
                    placeholder="Email*"
                  />
                </div>
                <div className="mb-4">

                  <textarea placeholder='Message Here' className='shadow appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' rows="6" cols="50"></textarea>
                </div>

                <button
                  className="bg-[#e55b02] hover:bg[#e55b02] text-white font-bold py-3 px-14 rounded-xl focus:outline-none focus:shadow-outline" style={{ borderRadius: "30px" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </ul>
          
        </motion.div>
        

      </div>


      {/* <div className="flex items-center bg-[#211515]">
        <div className="w-[620px] h-[160px] flex items-center justify-center rounded-tr-[30px] rounded-br-[30px] p-4 bg-[#311C17]">
          <p className="font-gilroy text-4xl text-white font-extrabold leading-10 text-center flex items-center justify-center mb-3 opacity-50">
            Our Publishers
          </p>
        </div>

        <div className="imageslide-container">
          {images.map((image, index) => (
            <div
              key={index}
              className="mx-2 w-[215px] h-[130px] mr-2 bg-[#211515] border-r border-gray-800 imageSlide"
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
      </div> */}
    </>
  );
};

export default ContactForm;

