import React from "react";
import BackgroundVideo from "@/app/components/backgroundVideo";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import CookiesPolicy from "@/app/components/cookiesPolicy";

const Cookies = () => {
  
  return (
    <div>
      <Header />
      {/* <BackgroundVideo imgUrl="/assets/header-banner.png"  imgmobileUrl="/assets/homemobilebanner.png"/> */}
      <CookiesPolicy />
      <Footer btnText="Subscribe" urlLink="/pages/contact" />
    </div>
  );
};

export default Cookies;
