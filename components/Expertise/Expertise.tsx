import Container from "../UI/Container/Container";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SkillsType } from "@/types/type";

const skillsContent: SkillsType[] = [
  {
    icon: <IoLogoJavascript />,
    title: "Vanilla JavaScript",
    content:
      "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    icon: <FaReact />,
    title: "React",
    content:
      "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    content:
      "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    icon: <DiMongodb />,
    title: "MongoDB",
    content:
      "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
];

const Expertise = () => {
  return (
    <section className="py-30">
      <Container>
        <div className="space-y-7 py-10">
          <h3 className="font-bold text-[35px] text-darkTxt text-center">
            What I do
          </h3>
          <p className="text-[18px] leading-7.5 text-grayContent text-center">
            I have more than 10 years experience building software for clients
            all over the world. Below is a quick <br /> overview of my main
            technical skill sets and technologies i use. Want to find out more
            about my experience? <br /> Check out my online resume and project
            portfolio.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:md:grid-cols-4 gap-6">
          {skillsContent.map((skill: SkillsType, i) => (
            <div
              key={i}
              className="rounded-lg w-full px-4 py-6 bg-white space-y-5 flex flex-col items-center shadow-sm"
            >
              <p className="text-4xl md:text-5xl">{skill.icon}</p>
              <h3 className="text-darkTxt font-bold text-[18px] md:text-[20px]">
                {skill.title}
              </h3>
              <p className="text-grayContent text-[15px] md:text-[16px] leading-7 text-center">
                {skill.content}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Expertise;
