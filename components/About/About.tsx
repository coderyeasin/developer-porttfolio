import React from "react";
import Container from "../UI/Container/Container";

const About = () => {
  return (
    <section className="py-30">
      <Container className="w-full h-[550px] bg-bgPrimary rounded-[10px] flex justify-center items-center">
        <div className="w-[827px] h-[288px] bg-white">
          <h3 className="font-bold text-[35px] text-darkTxt text-center py-2">
            About Me
          </h3>
        </div>
      </Container>
    </section>
  );
};

export default About;
