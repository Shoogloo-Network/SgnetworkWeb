"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const Footer = ({ btnText, urlLink }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    try {
      if (!email.trim()) {
        setError("Please enter a valid email address.");
        setSuccessMessage("");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Invalid email address.");
        return;
      }
      setError("");
      setLoading(true);
      const response = await axios.post(
        "https://api.shoogloonetwork.com/subscription/create",
        {
          email: email,
          email_marketing: true,
        }
      );

      console.log("Subscription successful", response.data);
      setEmail("");
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.error("Error during subscription", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccessMessage("");
  };

  return (
    <footer className="w-100 bg-[#FFF8F1] text-black py-2 px-3 md:p-12 sm:p-12 sm:py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between m-10 mb-0">
        <div className="flex items-start justify-center sm:justify-start flex-col  border-b sm:border-b-0">
          <Link href="/" className="w-[260px] h-[80px] mr-2">
            <Image src="/footerLogo.png" alt="logo" width={250} height={70} />
          </Link>
          <p className="pt-10 pl-0  font-mulish font-bold">
            Shoogloo Network Private Limited
          </p>
          <p className="pt-2 pl-0  font-mulish text-[14px] font-bold">
            Address:
          </p>
          <p className="pt-2 pl-0  font-mulish text-[14px] tracking-normal">
            UNIT 461 – 463, 4th Floor,
          </p>
          <p className="pt-1 pl-0  font-mulish text-[14px] tracking-normal ">
            JMD Megapolis, Sector 48,
          </p>
          <p className="pt-1 pl-0  font-mulish text-[14px]  tracking-normal">
            {" "}
            Gurgaon, Haryana – 122001, India {" "}
          </p>
        </div>
        <div className="flex items-start justify-between ">
          <div className="pt-2">
            <h3 className="mb-2 text-black font-mulish  text-[16px] sm:text-lg capitalize font-medium leading-normal tracking-tight">
              Newsletter
            </h3>
            <p className="text-black font-gilroy  text-[28px] sm:text-4xl font-light leading-normal capitalize py-1 sm:py-4">
              Stay up to date
            </p>
            <div className="flex items-center flex-col relative">
              <div className="flex items-center border-b border-black py-3">
                <div className="mr-2">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5" clipPath="url(#clip0_124_3384)">
                      <path
                        d="M14.3689 2.96367C14.3084 2.95742 14.2473 2.95742 14.1867 2.96367H1.74227C1.66251 2.9649 1.58328 2.97685 1.50671 2.99922L7.92894 9.39478L14.3689 2.96367Z"
                        fill="black"
                      />
                      <path
                        d="M15.0267 3.58154L8.55557 10.026C8.38902 10.1915 8.16373 10.2845 7.9289 10.2845C7.69407 10.2845 7.46878 10.1915 7.30223 10.026L0.888899 3.63043C0.869183 3.70289 0.85873 3.77756 0.857788 3.85265V12.7415C0.857788 12.9773 0.951439 13.2034 1.11814 13.3701C1.28484 13.5368 1.51093 13.6304 1.74668 13.6304H14.1911C14.4269 13.6304 14.653 13.5368 14.8197 13.3701C14.9864 13.2034 15.08 12.9773 15.08 12.7415V3.85265C15.0765 3.76006 15.0585 3.66858 15.0267 3.58154ZM2.35557 12.7415H1.73779V12.106L4.9689 8.90154L5.59557 9.52821L2.35557 12.7415ZM14.1822 12.7415H13.56L10.32 9.52821L10.9467 8.90154L14.1778 12.106L14.1822 12.7415Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_124_3384">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.297119)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="ml-2 bg-[#FFF8F1]">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                    className="w-[300px] bg-[#FFF8F1] focus:outline-none outline-none text-sm font-medium"
                    placeholder="Enter Email Address"
                  />
                </div>
              </div>
              {error && (
                <p className="text-red-500 absolute -bottom-7 left-0">
                  {error}
                </p>
              )}
              {successMessage && (
                <p className="text-green-500 absolute -bottom-7 left-0">
                  {successMessage}
                </p>
              )}
            </div>
            <div className={`w-[175px] mt-10`}>
              <button
                onClick={handleSubscribe}
                className={`flex items-center justify-center border-orange-600 rounded-full w-[175px] text-white text-[20px] leading-[normal] tracking-normal p-2 orange-btn z-50 cursor-pointer ${
                  loading ? "opacity-90 hover:text-orange-500" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      width="30px"
                      height="30px"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      stroke="#FB8C00"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="xMidYMid"
                    >
                      <circle cx="75" cy="50" fill="#FB8C00" r="6.39718"> <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.875s" ></animate> </circle>
                      <circle cx="67.678" cy="67.678" fill="#FB8C00" r="4.8"> <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.75s" ></animate> </circle>
                      <circle cx="50" cy="75" fill="#FB8C00" r="4.8"> <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.625s" ></animate> </circle>
                      <circle cx="32.322" cy="67.678" fill="#FB8C00" r="4.8"> <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.5s" ></animate> </circle>
                      <circle cx="25" cy="50" fill="#FB8C00" r="4.8"> <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.375s" ></animate> </circle>
                      <circle cx="32.322" cy="32.322" fill="#FB8C00" r="4.80282" > <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.25s" ></animate> </circle>
                      <circle cx="50" cy="25" fill="#FB8C00" r="6.40282"> <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.125s" ></animate> </circle>
                      <circle cx="67.678" cy="32.322" fill="#FB8C00" r="7.99718" > <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="0s" ></animate> </circle>
                    </svg>{" "}
                    Loading
                  </>
                ) : (
                  <>
                    <span className="text-lg mt-1 font-semibold uppercase">
                      {btnText}
                    </span>
                    <span className="bg"></span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between  ">
          <div className="pt-2 mb-4">
            <h3 className="mb-2 text-black font-mulish text-lg capitalize font-medium leading-normal tracking-tight">
              Quick Links
            </h3>
            <ul className="text-sm pt-2">
              <li className="pl-0 p-2">
                <Link
                  href="/pages/about"
                  className="text-black font-mulish text-sm font-medium leading-normal opacity-70"
                >
                  About us
                </Link>
              </li>
              <li className="pl-0 p-2">
                <Link
                  href="/pages/advertisers"
                  className="text-black font-mulish text-sm font-medium leading-normal opacity-70"
                >
                  Advertisers
                </Link>
              </li>
              <li className="pl-0 p-2">
                <Link
                  href="/pages/publishers"
                  className="text-black font-mulish text-sm font-medium leading-normal opacity-70"
                >
                  Publishers
                </Link>
              </li>
              <li className="pl-0 p-2">
                <Link
                  href="https://shoogloo.trackier.io/"
                  target="_blank"
                  className="text-black font-mulish text-sm font-medium leading-normal opacity-70"
                >
                  Publisher Login
                </Link>
              </li>
              <li className="pl-0 p-2">
                <Link
                  href="/pages/contact"
                  className="text-black font-mulish text-sm font-medium leading-normal opacity-70"
                >
                  Contact us
                </Link>
              </li>
              <li className="pl-0 p-2">
                <Link
                  href="/pages/privacy-policy"
                  className="text-black font-mulish text-sm font-medium leading-normal opacity-70"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="pl-0 p-2">
                <Link
                  href="/pages/cookies-policy"
                  className="text-black font-mulish text-sm font-medium leading-normal opacity-70"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center justify-center w-full  md:w-1/4">
          <p className="text-black font-mulish text-sm font-normal leading-normal opacity-40 mt-10">
            © 2024 Shoogloo.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
