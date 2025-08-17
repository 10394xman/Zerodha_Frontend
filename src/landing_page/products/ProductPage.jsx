import React from "react";
import Hero from "./Hero";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Universe from "./Universe";
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/images/kite.png"
        productName="Kite"
        productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        TryDemo="https://example.com/try-demo"
        learnMore="https://example.com/learn-more"
        googlePlay="https://play.google.com/store/apps/details?id=com.example.app"
        appStore="https://apps.apple.com/app/id123456789"
      />
      <RightSection
        imageUrl="media/images/console.png"
        productName="Console"
        productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="https://example.com/learn-more"
      />
      <LeftSection
        imageUrl="media/images/coin.png"
        productName="Coin"
        productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        TryDemo="https://example.com/try-demo"
        learnMore="https://example.com/learn-more"
        googlePlay="https://play.google.com/store/apps/details?id=com.example.app"
        appStore="https://apps.apple.com/app/id123456789"
      />
      <RightSection
        imageUrl="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="https://example.com/learn-more"
      />
      <LeftSection
        imageUrl="media/images/varsity.png"
        productName="Varsity"
        productDesc="Learn about trading and investing with our comprehensive educational platform."
        googlePlay="https://play.google.com/store/apps/details?id=com.example.app"
        appStore="https://apps.apple.com/app/id123456789"
      />
      <p className="text-center my-5">Want to know more about our technology stack? Check out the <Link to="https://zerodha.tech">Zerodha.tech</Link> blog.</p>
      <Universe />
    </>
  );
}

export default AboutPage;
