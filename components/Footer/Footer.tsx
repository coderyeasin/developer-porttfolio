import React from "react";
import Container from "../UI/Container/Container";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdOutlineCameraAlt } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-30 bg-bgPrimary w-full h-[780px]">
      <Container>
        <section className="flex justify-between items-start gap-5 w-full">
          <div className="space-y-5 w-7/12">
            <h1 className="text-darkTxt font-bold text-[35px]">Lets Connect</h1>
            <p className="text-grayNav text-[16px] leading-7">
              Please fill out the form on this section to contact with me or
              call between <br /> 9:00 A.M and 8.00 P.M ET, Monday through
              Friday.
            </p>
            <div className="flex items-center gap-5">
              <FaFacebookF className="text-2xl text-btnColor" />
              <FaTwitter className="text-2xl text-btnColor" />
              <MdOutlineCameraAlt className="text-2xl text-btnColor" />
            </div>
          </div>
          <div className="space-y-5 w-5/12">
            <h1 className="font-bold text-darkTxt text-[35px]">
              Let’s Message me
            </h1>
            <form action="#" className="space-y-5 w-full">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="border-0 outline-0 bg-white rounded-[5px] px-5 py-3 w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="border-0 outline-0 bg-white rounded-[5px] px-5 py-3 w-full"
                />
              </div>
              <div>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Message"
                  className="border-0 outline-0 bg-white rounded-[5px] px-5 py-3 w-full h-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-md bg-btnColor px-7 py-3 text-[20px] text-white cursor-pointer"
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
