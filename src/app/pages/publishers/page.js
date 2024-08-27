import BackgroundVideo from "@/app/components/backgroundVideo";
import PublisherServices from "@/app/components/publisherServices.js";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import React from "react";
import TextButton from "@/app/components/textButton";

const Publishers = () => {
  
  return (
    <div>
      <Header />
      <BackgroundVideo imgUrl="/assets/Publishersbanner.png"  imgmobileUrl="/assets/Publishersmobilebanneranner.png"/>
      <PublisherServices />
      <TextButton />
      <Footer btnText="Contact Us" urlLink="/pages/contact" />
    </div>
  );
};

export default Publishers;
