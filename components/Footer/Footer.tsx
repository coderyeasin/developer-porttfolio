import React from "react";
import Container from "../UI/Container/Container";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdOutlineCameraAlt } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-16 md:py-30 bg-bgPrimary w-full">
      <Container>
        <section className="flex flex-col md:flex-row justify-between items-start gap-8 w-full">
          <div className="space-y-5 w-full md:w-7/12">
            <h1 className="text-darkTxt font-bold text-[24px] md:text-[35px]">
              Lets Connect
            </h1>
            <p className="text-grayNav text-[15px] md:text-[16px] leading-7">
              Please fill out the form on this section to contact with me or
              call between <br /> 9:00 A.M and 8.00 P.M ET, Monday through
              Friday.
            </p>
            <div className="flex items-center gap-4 md:gap-5">
              <FaFacebookF className="text-xl md:text-2xl text-btnColor" />
              <FaTwitter className="text-xl md:text-2xl text-btnColor" />
              <MdOutlineCameraAlt className="text-xl md:text-2xl text-btnColor" />
            </div>
          </div>
          <div className="space-y-5 w-full md:w-5/12 mt-8 md:mt-0">
            <h1 className="font-bold text-darkTxt text-[24px] md:text-[35px]">
              Let’s Message me
            </h1>
            <form action="#" className="space-y-4 w-full">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="border-0 outline-0 bg-white rounded-[5px] px-4 py-3 w-full text-[15px] md:text-[16px]"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="border-0 outline-0 bg-white rounded-[5px] px-4 py-3 w-full text-[15px] md:text-[16px]"
                />
              </div>
              <div>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Message"
                  className="border-0 outline-0 bg-white rounded-[5px] px-4 py-3 w-full h-32 text-[15px] md:text-[16px]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-md bg-btnColor px-6 py-3 text-[16px] md:text-[20px] text-white cursor-pointer w-full md:w-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
