"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { minus } from "../../../public/assets/images";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [headerBackground, setHeaderBackground] = useState("#00000061");
  const [hemburgerBg, setHemburgerBg] = useState("#D9D9D9");
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const windowWidth = window.innerWidth;
      setScreenWidth(windowWidth);
      const position = window.scrollY;
      setScrollPosition(position);
      console.log('position',position);
      if (position > window.innerHeight) {
        setHeaderBackground("#FFF8F1");
        setHemburgerBg("#ffffff")
      } else {
        setHeaderBackground("#00000061");
        setHemburgerBg("#D9D9D9")
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, screenWidth]);

  const handleRouteChange = (e) => {
    const href = e.target.getAttribute('href');
    if (pathName === href) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setScreenWidth(window.innerWidth);
  };

  const handleHover = () => {
    setIsHover(!isHover);
  };
  const handleHover1 = () => {
    setIsHover(!isHover);
  };

  return (
    <header style={{background:headerBackground}} className={`fixed top-0 left-0 right-0 text-white p-4 flex justify-between items-center z-[100] sm:h-[90px] h-[65px] transition-all duration-300 ease-in-out`}>
      <div className="flex items-center z-[100]">
        <Link href="/" className="sm:w-[260px] w-[200px] sm:h-[80px] h-[50px] mr-2">
          <Image src="/logonetwork.png" alt="logo" width={250} height={70} className="sm:w-[250px] sm:h-[90px] w-[130px] h-[50px]"/>
        </Link>
      </div>
      <div className="z-[100]">
        <button
          onClick={toggleMenu}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover1}
          className="text-white focus:outline-none flex items-center justify-center focus:text-white"
        >
          <div className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] bg-[#342929] bg-opacity-20 rounded-full flex items-center justify-center">
            {!isMenuOpen ? (
              <>
                <svg
                  className={` ${isHover ? "hidden" : "block"}`}
                  width="34"
                  height="27"
                  viewBox="0 0 34 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Group 1">
                    <rect id="Rectangle 2" x="0.625977" y="11.75" width="33.0944" height="5.12287" fill={hemburgerBg} />
                    <rect id="Rectangle 3" x="0.625977" y="0.103516" width="15.6513" height="5.12287" fill={hemburgerBg} />
                    <rect id="Rectangle 5" x="0.625977" y="22.6509" width="15.6513" height="5.12287" fill={hemburgerBg} />
                    <rect id="Rectangle 4" x="18.0693" y="0.103516" width="15.6513" height="5.12287" fill={hemburgerBg} />
                    <rect id="Rectangle 6" x="18.0693" y="22.6509" width="15.6513" height="5.12287" fill={hemburgerBg} />
                  </g>
                </svg>

                <svg
                  className={` ${!isHover ? "hidden" : "block"}`}
                  width="34"
                  height="27"
                  viewBox="0 0 34 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Group 1">
                    <rect id="Rectangle 2" x="0.625977" y="11.75" width="33.0944" height="5.12287" fill={hemburgerBg} />
                    <rect id="Rectangle 3" x="0.625977" y="0.103516" width="15.6513" height="5.12287" fill={hemburgerBg} />
                    <rect id="Rectangle 5" x="0.625977" y="22.6509" width="15.6513" height="5.12287" fill="transparent" />
                    <rect id="Rectangle 4" x="18.0693" y="0.103516" width="15.6513" height="5.12287" fill="transparent" />
                    <rect id="Rectangle 6" x="18.0693" y="22.6509" width="15.6513" height="5.12287" fill={hemburgerBg} />
                  </g>
                </svg>
              </>
            ) : (
              <Image src={minus} alt="logo" width={250} height={70} />
            )}
          </div>
        </button>
      </div>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, x: 1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: screenWidth < 640 ? 0.5 : 1,
          }}
          className="p-10 pl-7 self-center text-white fixed top-0 left-0 w-full min-h-screen bg-[#211515] items-center justify-center z-[50] sm:block hidden"
        >
          <motion.div
            initial={{ opacity: 0, x: -600 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: screenWidth < 640 ? 1 : 2,
            }}
            className="relative p-10 pl-7 top-5 sm:-top-4 self-center z-10 text-white"
          >
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link href="https://shoogloo.trackier.io/" target="_blank" className="font-Gilroy text-3xl sm:text-4xl font-extrabold leading-[3.5rem] sm:leading-loose opacity-50 hover:opacity-100" > Log In </Link>
              </li>
              <li>
                <Link href="/pages/advertisers" className="font-Gilroy text-3xl sm:text-4xl font-extrabold leading-[3.5rem] sm:leading-loose opacity-50 hover:opacity-100" > Advertisers </Link>
              </li>
              <li>
                <Link href="/pages/publishers" className="font-Gilroy text-3xl sm:text-4xl font-extrabold leading-[3.5rem] sm:leading-loose opacity-50 hover:opacity-100" > Publishers </Link>
              </li>
              <li>
                <Link href="/pages/contact" className="font-Gilroy text-3xl sm:text-4xl font-extrabold leading-[3.5rem] sm:leading-loose opacity-50 hover:opacity-100" > Contact Us </Link>
              </li>
            </ul>
          </motion.div>
        </motion.nav>
      )}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: screenWidth < 640 ? 0.5 : 1,
          }}
          className="p-10 pl-7 self-center text-white fixed top-0 left-0 w-full min-h-screen bg-[#211515] items-center justify-center z-[50] sm-hidden block"
        >
          <motion.div
            initial={{ opacity: 0, x: -600 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: screenWidth < 640 ? 1 : 2,
            }}
            className="relative p-10 pl-7 top-5 sm:-top-4 self-center z-10 text-white"
          >
            <ul onClick={(e) => {handleRouteChange(e)}} className="flex flex-col items-center space-y-4">
              <li>
                <Link href="https://shoogloo.trackier.io/" target="_blank" className="font-Gilroy text-3xl sm:text-4xl font-extrabold leading-[3.5rem] sm:leading-loose opacity-50 hover:opacity-100" > Log In </Link>
              </li>
              <li>
                <Link href="/pages/advertisers" className="font-Gilroy text-3xl sm:text-4xl font-extrabold leading-[3.5rem] sm:leading-loose opacity-50 hover:opacity-100" > Advertisers </Link>
              </li>
              <li>
                <Link href="/pages/publishers" className="font-Gilroy text-3xl sm:text-4xl font-extrabold leading-[3.5rem] sm:leading-loose opacity-50 hover:opacity-100" > Publishers </Link>
              </li>
              <li>
                <Link href="/pages/contact" className="font-Gilroy text-3xl sm:text-4xl font-extrabold leading-[3.5rem] sm:leading-loose opacity-50 hover:opacity-100" > Contact Us </Link>
              </li>
              <li>
                <Link href="/pages/about" className="font-Gilroy text-3xl sm:text-4xl font-extrabold leading-[3.5rem] sm:leading-loose opacity-50 hover:opacity-100" > About Us </Link>
              </li>
            </ul>
          </motion.div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
