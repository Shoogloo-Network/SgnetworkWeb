import Footer from "./components/footer";
import Services from "./components/services";
import WhatisLorem from "./components/whatisLorem";
import EyesOnYou from "./components/eyesOnYou";
import GetConnected from "./components/getConnected";
import BackgroundVideo from "./components/backgroundVideo";
import Header from "./components/header";
import Solutions from "./components/solutions";
import Publishers from "./components/publishers";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-center">
      <Header />
      <BackgroundVideo imgUrl="/assets/header-banner.png"  imgmobileUrl="/assets/homemobilebanner.png"/>
      <Services />
      <WhatisLorem />
      <EyesOnYou />
      <Solutions />
      <Publishers />
      <GetConnected />
      <Footer btnText="Subscribe" />
    </main>
  );
}
