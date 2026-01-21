import { UserInfoType } from "@/types/type";
import Container from "../UI/Container/Container";

const userInfo: UserInfoType[] = [
  { title: "Name", heading: "Mary Hardy" },
  { title: "Email", heading: "info@gmail.com" },
  { title: "Date of birth", heading: "11 November 1987" },
  { title: "From", heading: "Los Angeles, USA" },
];

const About = () => {
  return (
    <section className="py-30">
      <Container className="w-full h-137.5 bg-bgPrimary rounded-[10px] flex justify-center items-center">
        <div className="w-206.75 h-72 bg-white">
          <h3 className="font-bold text-[35px] text-darkTxt text-center py-2">
            About Me
          </h3>
          <p className="text-[18px] leading-7.5 text-grayContent text-center">
            I, m a designer & developer with a passion for web design. I enjoy
            developing simple, clean and slick websites that provide real value
            to the end user. Thousands of clients have procured exceptional
            resulfs while working with me. Delivering work within time and
            budget which meets clients requirements in our mata.
          </p>
          <div className="flex justify-between items-center gap-3 mx-3 py-7">
            {userInfo.map((info: UserInfoType, i) => (
              <div key={i} className="text-center">
                <p className="text-[20px] leading-7.5 text-grayContent">
                  {info.title}
                </p>
                <h3 className="font-bold text-[20px] leading-7.5 text-darkTxt">
                  {info.heading}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
