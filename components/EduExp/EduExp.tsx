import React from "react";
import Container from "../UI/Container/Container";
import { FaDownload } from "react-icons/fa";

type BackgroundType = {
  id: string;
  title: string;
  institute: string;
  description: string;
};

const backgroundContent: BackgroundType[] = [
  {
    id: "1",
    title: "Master in Computer Engineering",
    institute: "Harvard University / 2015 - 2017",
    description:
      "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    id: "2",
    title: "Master in Computer Engineering",
    institute: "Harvard University / 2015 - 2017",
    description:
      "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    id: "3",
    title: "Master in Computer Engineering",
    institute: "Harvard University / 2015 - 2017",
    description:
      "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    id: "4",
    title: "Sr. Font End Developer",
    institute: "Apple Inc / 2020 - Current",
    description:
      "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    id: "5",
    title: "Jr. Font End Developer",
    institute: "Dribbble Inc / 2018 - 2022",
    description:
      "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    id: "6",
    title: "HTML Developer",
    institute: "Adobe Inc / 2017 - 2018",
    description:
      "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
];

const EduExp = () => {
  return (
    <section className="py-20">
      <Container>
        <h3 className="font-bold text-[35px] text-darkTxt text-center">
          A summary of My Resume
        </h3>
        <div className="flex justify-between items-start gap-5 pt-20 pb-10">
          <div className="space-y-5">
            <h3 className="text-grayNav font-bold text-[30px] py-3">
              My Education
            </h3>
            {backgroundContent.slice(0, 3).map((educate) => (
              <div
                key={educate.id}
                className={`${educate.id === "1" || educate.id === "2" ? "border-b-2 border-[#D1D1D1]" : "border-0"} space-y-2 pb-7`}
              >
                <h3 className="font-bold text-grayNav text-[25px]">
                  {educate.title}
                </h3>
                <h4 className="font-semibold text-grayNav text-[20px]">
                  {educate.title}
                </h4>
                <p className="text-[16px] text-grayContent leading-7 w-120">
                  {educate.description}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-5">
            <h3 className="text-grayNav font-bold text-[30px] py-3">
              My Experience
            </h3>
            {backgroundContent.slice(3, 6).map((educate) => (
              <div
                key={educate.id}
                className={`${educate.id === "4" || educate.id === "5" ? "border-b-2 border-[#D1D1D1]" : "border-0"} space-y-2 pb-7`}
              >
                <h3 className="font-bold text-grayNav text-[25px]">
                  {educate.title}
                </h3>
                <h4 className="font-semibold text-grayNav text-[20px]">
                  {educate.title}
                </h4>
                <p className="text-[16px] text-grayContent leading-7 w-120">
                  {educate.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button className="flex justify-center items-center gap-3 mx-auto rounded-md bg-btnColor px-7 py-4 text-[20px] text-white cursor-pointer">
          <FaDownload /> Download CV
        </button>
      </Container>
    </section>
  );
};

export default EduExp;
