import React from "react";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";

const HomePage = () => {
  return (
    <main>
      <section className="bg-bgPrimary h-auto w-full relative">
        <Header />
        <HeroSection />
      </section>
    </main>
  );
};

export default HomePage;
