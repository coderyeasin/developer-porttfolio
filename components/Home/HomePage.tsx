import React from "react";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import About from "../About/About";
import Expertise from "../Expertise/Expertise";
import EduExp from "../EduExp/EduExp";

const HomePage = () => {
  return (
    <main>
      <section className="bg-bgPrimary h-auto w-full relative">
        <Header />
        <HeroSection />
      </section>
      <section>
        <About />
        <Expertise />
        <EduExp />
      </section>
    </main>
  );
};

export default HomePage;
