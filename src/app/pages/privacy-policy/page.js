import React from "react";
import BackgroundVideo from "@/app/components/backgroundVideo";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import PrivacyPolicy from "@/app/components/privacyPolicy";

const Privacy = () => {
  
  return (
    <div>
      <Header />
      {/* <BackgroundVideo imgUrl="/assets/header-banner.png"  imgmobileUrl="/assets/homemobilebanner.png"/> */}
      <PrivacyPolicy />
      <Footer btnText="Subscribe" urlLink="/pages/contact" />
    </div>
  );
};

export default Privacy;
