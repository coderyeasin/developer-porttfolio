import React from "react";
import Image from "next/image";
import { FaDownload, FaPhoneAlt } from "react-icons/fa";
import Container from "../UI/Container/Container";

const HeroSection = () => {
  return (
    <section className="relative ">
      <h1 className="absolute -left-60 top-4/12 mt-10 -translate-y-1/2 -rotate-90 text-[100px] font-bold tracking-[33px] text-darkTxt/10 hidden xl:block">
        Developer
      </h1>
      <div className="overflow-hidden">
        <Container>
          <div className="relative flex min-h-175 items-center justify-between ">
            <div className="w-full lg:w-6/12 z-10">
              <h3 className="text-[45px] font-semibold text-grayNav">
                Hi, I am
              </h3>
              <h1 className="text-[85px] font-bold text-darkTxt leading-tight">
                Mary Hardy
              </h1>
              <p className="mt-4 max-w-[520px] text-[18px] leading-7 text-grayNav">
                Shot what able cold new see hold. Friendly as an betrayed
                formerly he. Morning because as to society behaved moments.
              </p>

              <div className="mt-7 flex items-center gap-6">
                <button className="flex items-center gap-3 rounded-md bg-btnColor px-7 py-4 text-[20px] text-white">
                  <FaDownload /> Download CV
                </button>
                <button className="flex items-center gap-3 rounded-md border-2 border-btnColor px-7 py-4 text-btnColor">
                  <FaPhoneAlt /> Contact
                </button>
              </div>
            </div>

            {/* Image + Circles */}
            <div className="relative hidden lg:flex w-6/12 justify-center">
              <Image
                src="/images/hardy.png"
                width={580}
                height={680}
                alt="Mary Hardy"
                className="relative z-10 ml-150 mt-15"
                priority
              />

              <div className="absolute -bottom-5 -right-18 flex items-center justify-center">
                <div className="absolute h-259 w-259 rounded-full bg-btnColor/10" />
                <div className="absolute h-217.5 w-217.5 rounded-full bg-btnColor/15" />
                <div className="absolute h-174.5 w-174.5 rounded-full bg-btnColor/20" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
