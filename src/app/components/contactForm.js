"use client";
import React, { useState,useEffect } from 'react'
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
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
  
  // useEffect(() => {
  //   const controls = animate(count, baseText.length, {
  //     type: "tween",
  //     duration: 2,
  //     ease: "easeInOut",
  //     repeat: Infinity,
  //   });
  //   return controls.stop;
  // }, []);

  const initial = {
    firstname: '',
    lastname:'',
    email: '',
    phone: '',
    content:'',
   
  }
  const initialerror = {
    firstname: false,
    lastname: false,
    email: false,
    phone:false,
    content:false
}
const [data,setData]=useState(initial)
const [error,setError]=useState(initialerror);
const inputHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    console.log(data);
}
const errorHandler=(e)=>{
  if (e.target.name === 'email') {
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(e.target.value)) {
      setError({ ...error, [e.target.name]: true });
    } else {
      setError({ ...error, [e.target.name]: 'valid' });
    }
  } else {
    if (e.target.value) {
      setError({ ...error, [e.target.name]: 'valid' });
    } else {
      setError({ ...error, [e.target.name]: true });
    }
  }
}

const submit=async()=>{
  console.log("request send")
  try{
  const {
    firstname,
    lastname,
    email,
    phone,
    content
  }=data;
  
  if(firstname!== '' && lastname!== '' && email!== '' &&  email.includes('@') && phone!== '' && content!==''){
    const result=await axios({
      url:`http://localhost:8080/user/contact`,
      method:"POST",
      data:data,
      header:{
        'Content-Type':"application/json"
      }
    })
    console.log(result)
    if(result.status==200){
      toast.success("Thank You for your query. We will connect with you soon");
      setData(initial)
    }
    else{
      toast.error("Not Submitted")
    }
  }
  else{
    Object.keys(data).forEach((fieldname)=>{
        if(data[fieldname].trim()===''){
          setError((error)=>({
            ...error,[fieldname]:true
          }))
        }
    })

    toast.error("Please fill all the required fields")
  }
  }
  catch(error){
    toast.error("Not Submitted")
  }

}

  return (
    <>
    <ToastContainer />
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
              {/* <div className='flex gap-5 hidden'>
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

              </div> */}
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
           
                <div className='flex gap-3'>
                  <div className="mb-4 w-1/2">
                  {(error.firstname!=="valid" && error.firstname==true)?<span className='text-[#FF0000]'>First name is mandatory</span>:null}
                    <input
                      className="shadow appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="firstname"
                      type="text"
                      value={data.firstname}
                      placeholder="First Name *"
                      onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} 
                    />
                  </div>

                  <div className="mb-4 w-1/2">
                  {(error.lastname!=="valid" && error.lastname==true)?<span className='text-[#FF0000]'>Last name is mandatory</span>:null}
                    <input
                      className="shadow appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="lastname"
                      type="text"
                      value={data.lastname}
                      placeholder="Last Name *"
                      onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} 
                    />
                  </div>
                </div>


                <div className="mb-4">
                {(error.phone!=="valid" && error.phone==true)?<span className='text-[#FF0000]'>Mobile number is mandatory</span>:null}
                  <input
                    className="shadow appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="phone"
                    type="number"
                    value={data.phone}
                    placeholder="Mobile Number *"
                    onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} 
                  />
                </div>

                <div className="mb-4">
                {(error.email!=="valid" && error.email==true)?<span className='text-[#FF0000]'>Email is mandatory with @</span>:null}                  
                <input
                    className="shadow appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="email"
                    type="email"
                    value={data.email}
                    placeholder="Email *"
                    onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} 
                  />
                </div>
                <div className="mb-4">
                {(error.content!=="valid" && error.content==true)?<span className='text-[#FF0000]'>Description is mandatory</span>:null}                  
                <textarea placeholder='Message Here *' className='shadow appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' rows="6" cols="50" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} name="content" value={data.content}></textarea>
                </div>

                <button
                  className="bg-[#e55b02] hover:bg[#e55b02] text-white font-bold py-3 px-14 rounded-xl focus:outline-none focus:shadow-outline" style={{ borderRadius: "30px" }}
                 onClick={submit}
                >
                  Submit
                </button>
              
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

                <div className='flex gap-3'>
                  <div className="mb-4">
                  {(error.firstname!=="valid" && error.firstname==true)?<span className='text-[#FF0000]'>First name is mandatory</span>:null}

                    <input
                      className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="firstname"
                      type="text"
                      value={data.firstname}
                      placeholder="First Name *"
                      onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} 
                    />
                  </div>

                  <div className="mb-4">
                  {(error.lastname!=="valid" && error.lastname==true)?<span className='text-[#FF0000]'>Last name is mandatory</span>:null}
                    <input
                      className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="lastname"
                      type="text"
                      value={data.lastname}
                      placeholder="Last Name *"
                      onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} 
                    />
                  </div>
                </div>


                <div className="mb-4">
                {(error.phone!=="valid" && error.phone==true)?<span className='text-[#FF0000]'>Mobile number is mandatory</span>:null}
                  <input
                    className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="phone"
                    type="number"
                    value={data.phone}
                    placeholder="Mobile Number *"
                    onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} 
                  />
                </div>

                <div className="mb-4">
                {(error.email!=="valid" && error.email==true)?<span className='text-[#FF0000]'>Email is mandatory with @</span>:null} 

                  <input
                    className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="email"
                    type="email"
                    value={data.email}
                    placeholder="Email *"
                    onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} 
                  />
                </div>
                <div className="mb-4">
                {(error.content!=="valid" && error.content==true)?<span className='text-[#FF0000]'>Description is mandatory</span>:null}                  
                <textarea placeholder='Message Here' className='shadow appearance-none border rounded-xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' rows="6" cols="50" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} name="content" value={data.content}></textarea>
                </div>

               
                <button
                className="bg-[#e55b02] hover:bg[#e55b02] text-white font-bold py-3 px-14 rounded-xl focus:outline-none focus:shadow-outline" style={{ borderRadius: "30px" }}
                onClick={submit}
              >
                Submit
              </button>
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

