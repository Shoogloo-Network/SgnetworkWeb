import React from "react";
import LetterSlider from "../../components/letterSlider.js";
import Header from "./../../components/header";
import Footer from "@/app/components/footer.js";
import BackgroundVideo from "@/app/components/backgroundVideo.js";
import QualityServices from "@/app/components/qualityServices.js";

const Advertisers = () => {
  return (
    <div>
      <Header />
      <BackgroundVideo imgUrl="/assets/Advertisersbanner.png" imgmobileUrl="/assets/Advertisersmobilebanner.png"/>
      <LetterSlider />
      <QualityServices />
      <Footer btnText="Subscribe" />
    </div>
  );
};

export default Advertisers;
