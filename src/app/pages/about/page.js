import React from "react";
import BackgroundVideo from "@/app/components/backgroundVideo";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import TextContent from "@/app/components/textContent";
import OurTeam from "@/app/components/ourTeam";

const About = () => {
  return (
    <>
      <Header />
      <BackgroundVideo imgUrl="/assets/AboutusBanner.jpg"  imgmobileUrl="/assets/AboutusBanner.jpg"/>
      <TextContent />
      <OurTeam />
      <Footer btnText="Subscribe" />
    </>
  );
};

export default About;
