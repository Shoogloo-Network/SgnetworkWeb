import React from 'react'
import Image from 'next/image';
import Link from "next/link";


const Footer = ({ btnText,urlLink }) => {
  return (
    <footer className="w-100 bg-[#FFF8F1] text-black py-2 px-3 md:p-12 sm:p-12 sm:py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between m-10 mb-0">
        <div className="flex items-start justify-center sm:justify-start flex-col  border-b sm:border-b-0">
          
          <Link href="/" className="w-[260px] h-[80px] mr-2">
            <Image src="/logonetwork.png" alt="logo" width={250} height={70} />
          </Link>
          <p className="pt-10 pl-0  font-mulish font-bold">Shoogloo Network Private Limited</p>
          <p className='pt-2 pl-0  font-mulish text-[14px] font-bold'>Address:</p>
          <p className="pt-2 pl-0  font-mulish text-[14px] tracking-normal">UNIT 461 – 463, 4th Floor,</p>
          <p className="pt-1 pl-0  font-mulish text-[14px] tracking-normal ">JMD Megapolis, Sector 48,</p>
          <p className="pt-1 pl-0  font-mulish text-[14px]  tracking-normal"> Gurgaon, Haryana – 122001, India  </p>
          {/*<p className="pt-6 pl-0 sm:pl-4 font-mulish text-[16px] sm:text-xl tracking-normal font-medium">Follow us</p>
          <div className="flex items-center justify-start py-2 sm:py-6 space-x-2 sm:space-x-4">
            <a href="#" className="text-white">
              <div className="w-[40px] h-[40px] flex items-center justify-center" >
                <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" fill="#C3C3C3" />
                  <g clipPath="url(#clip0_124_2985)">
                    <rect width="1440" height="5154" transform="translate(-114 -4975)" fill="white" />
                    <rect x="-114" y="-237.984" width="1440.33" height="417.313" fill="#FFF8F1" />
                    <g opacity="0.5">
                      <path d="M14.5 14.1726H17L18 10.1726H14.5V8.17261C14.5 7.14261 14.5 6.17261 16.5 6.17261H18V2.81261C17.674 2.76961 16.443 2.67261 15.143 2.67261C12.428 2.67261 10.5 4.32961 10.5 7.37261V10.1726H7.5V14.1726H10.5V22.6726H14.5V14.1726Z" fill="gray" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_124_2985">
                      <rect width="1440" height="5154" fill="white" transform="translate(-114 -4975)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
            <a href="#" className="text-white">
              <div className="w-[40px] h-[40px] flex items-center justify-center" >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.8334 2.67261H7.83337C5.07195 2.67261 2.83337 4.91118 2.83337 7.67261V17.6726C2.83337 20.434 5.07195 22.6726 7.83337 22.6726H17.8334C20.5948 22.6726 22.8334 20.434 22.8334 17.6726V7.67261C22.8334 4.91118 20.5948 2.67261 17.8334 2.67261Z" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.3333 7.17261H18.3433M16.8333 12.0426C16.9567 12.8749 16.8146 13.7248 16.4271 14.4716C16.0396 15.2184 15.4265 15.824 14.675 16.2023C13.9234 16.5805 13.0718 16.7122 12.2411 16.5785C11.4105 16.4449 10.6431 16.0527 10.0482 15.4578C9.45324 14.8628 9.06106 14.0955 8.92739 13.2648C8.79373 12.4342 8.92539 11.5825 9.30365 10.831C9.68191 10.0795 10.2875 9.46635 11.0343 9.07885C11.7811 8.69135 12.6311 8.5492 13.4633 8.67261C14.3122 8.79849 15.0982 9.19407 15.705 9.80091C16.3119 10.4078 16.7074 11.1937 16.8333 12.0426Z" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
            <a href="#" className="text-white">
              <div className="w-[40px] h-[40px] flex items-center justify-center" >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_124_3351)">
                    <path d="M13.2148 9.98823L21.2286 0.672607H19.3294L12.3712 8.76105L6.81345 0.672607H0.403198L8.80754 12.9039L0.403198 22.6726H2.30242L9.65076 14.1309L15.5199 22.6726H21.9302L13.2142 9.98823H13.2148ZM10.6136 13.0115L9.76196 11.7936L2.98665 2.10226H5.90371L11.3712 9.92361L12.2227 11.1415L19.3302 21.3079H16.4135L10.6136 13.012V13.0115Z" fill="gray" />
                  </g>
                  <defs>
                    <clipPath id="clip0_124_3351">
                      <rect width="24" height="24" fill="white" transform="translate(0.166748 0.672607)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
            <a href="#" className="text-white">
              <div className="w-[40px] h-[40px] flex items-center justify-center" >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.43994 5.88992C7.43968 6.42035 7.22871 6.92895 6.85345 7.30384C6.47819 7.67872 5.96937 7.88918 5.43894 7.88892C4.90851 7.88865 4.39991 7.67768 4.02502 7.30242C3.65014 6.92716 3.43968 6.41835 3.43994 5.88792C3.44021 5.35748 3.65117 4.84888 4.02644 4.474C4.4017 4.09911 4.91051 3.88865 5.44094 3.88892C5.97137 3.88918 6.47998 4.10015 6.85486 4.47541C7.22975 4.85067 7.44021 5.35948 7.43994 5.88992ZM7.49994 9.36992H3.49994V21.8899H7.49994V9.36992ZM13.8199 9.36992H9.83994V21.8899H13.7799V15.3199C13.7799 11.6599 18.5499 11.3199 18.5499 15.3199V21.8899H22.4999V13.9599C22.4999 7.78992 15.4399 8.01992 13.7799 11.0499L13.8199 9.36992Z" fill="gray" />
                </svg>
              </div>
            </a>
  </div>*/}
        </div>
        <div className="flex items-start justify-between ">
          <div className='pt-2'>
            <h3 className="mb-2 text-black font-mulish  text-[16px] sm:text-lg capitalize font-medium leading-normal tracking-tight">Newsletter</h3>
            <p className="text-black font-gilroy  text-[28px] sm:text-4xl font-light leading-normal capitalize py-1 sm:py-4">Stay up to date</p>
            <div className="flex items-center border-b border-black py-3">
              <div className="mr-2">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5" clipPath="url(#clip0_124_3384)">
                    <path d="M14.3689 2.96367C14.3084 2.95742 14.2473 2.95742 14.1867 2.96367H1.74227C1.66251 2.9649 1.58328 2.97685 1.50671 2.99922L7.92894 9.39478L14.3689 2.96367Z" fill="black" />
                    <path d="M15.0267 3.58154L8.55557 10.026C8.38902 10.1915 8.16373 10.2845 7.9289 10.2845C7.69407 10.2845 7.46878 10.1915 7.30223 10.026L0.888899 3.63043C0.869183 3.70289 0.85873 3.77756 0.857788 3.85265V12.7415C0.857788 12.9773 0.951439 13.2034 1.11814 13.3701C1.28484 13.5368 1.51093 13.6304 1.74668 13.6304H14.1911C14.4269 13.6304 14.653 13.5368 14.8197 13.3701C14.9864 13.2034 15.08 12.9773 15.08 12.7415V3.85265C15.0765 3.76006 15.0585 3.66858 15.0267 3.58154ZM2.35557 12.7415H1.73779V12.106L4.9689 8.90154L5.59557 9.52821L2.35557 12.7415ZM14.1822 12.7415H13.56L10.32 9.52821L10.9467 8.90154L14.1778 12.106L14.1822 12.7415Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_124_3384">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.297119)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="ml-2 bg-[#FFF8F1]">
                <input type="email" name="email" id="email" className='w-[300px] bg-[#FFF8F1] outline-none text-sm font-medium' placeholder='Enter Email Address' />
              </div>
            </div>
            <div className="w-[175px] mt-10">
            {(urlLink ? (
              <Link href="/pages/contact">
                <button className="flex items-center justify-center border-orange-600 rounded-full w-[175px] text-white text-[20px] leading-[normal] tracking-normal p-2 orange-btn z-50 cursor-pointer">
                  <span className='text-lg mt-1 font-semibold uppercase'>{btnText}</span>
                  <span className="bg"></span>
                </button>
              </Link>
            ): (
              <button className="flex items-center justify-center border-orange-600 rounded-full w-[175px] text-white text-[20px] leading-[normal] tracking-normal p-2 orange-btn z-50 cursor-pointer">
                  <span className='text-lg mt-1 font-semibold uppercase'>{btnText}</span>
                  <span className="bg"></span>
                </button>
            ))}
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between  ">
          <div className='pt-2 mb-4'>
            <h3 className="mb-2 text-black font-mulish text-lg capitalize font-medium leading-normal tracking-tight">Quick Links</h3>
            <ul className="text-sm pt-2">
              <li className='pl-0 p-2'><Link href="/pages/about" className='text-black font-mulish text-sm font-medium leading-normal opacity-70'>About us</Link></li>
              <li className='pl-0 p-2'><Link href="/pages/advertisers" className='text-black font-mulish text-sm font-medium leading-normal opacity-70'>Advertisers</Link></li>
              <li className='pl-0 p-2'><Link href="/pages/publishers" className='text-black font-mulish text-sm font-medium leading-normal opacity-70'>Publishers</Link></li>
              <li className='pl-0 p-2'><Link href="https://shoogloo.trackier.io/" target="_blank" className='text-black font-mulish text-sm font-medium leading-normal opacity-70'>Publisher Login</Link></li>
              <li className='pl-0 p-2'><Link href="/pages/contact" className='text-black font-mulish text-sm font-medium leading-normal opacity-70'>Contact us</Link></li>
            </ul>
          </div>
        </div>
        {/*<div className="flex items-start justify-between ">
          <div className='pt-2 mb-4'>
            <h3 className="mb-2 text-black font-mulish text-lg capitalize font-medium leading-normal tracking-tight">About</h3>
            <ul className="text-sm pt-2">
              <li className='pl-0 p-2'><a href="#" className='text-black font-mulish text-sm font-medium leading-normal opacity-70'>Help Center</a></li>
              <li className='pl-0 p-2'><a href="#" className='text-black font-mulish text-sm font-medium leading-normal opacity-70'>Shipping/Returns</a></li>
              <li className='pl-0 p-2'><a href="#" className='text-black font-mulish text-sm font-medium leading-normal opacity-70'>Affiliates</a></li>
            </ul>
          </div>
</div>*/}
      </div>
      {/* <div className="conatiner w-[90%] mx-auto border-t border-gray-500 my-4"></div> */}
      <div className="container mx-auto flex justify-center">
        <div className='flex items-center justify-center w-full  md:w-1/4'>
          <p className="text-black font-mulish text-sm font-normal leading-normal opacity-40 mt-10">© 2024 Shoogloo.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

