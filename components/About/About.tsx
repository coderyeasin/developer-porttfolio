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
    <section className="py-16 md:py-24">
      <Container className="w-full bg-bgPrimary rounded-[10px] flex justify-center items-center py-8 md:py-12">
        <div className="w-full max-w-2xl md:max-w-3xl bg-white rounded-[10px] md:p-10 lg:p-2">
          <h3 className="font-bold text-[28px] md:text-[35px] text-darkTxt text-center">
            About Me
          </h3>
          <p className="text-[16px] md:text-[18px] leading-7.5 text-grayContent text-center">
            I, m a designer & developer with a passion for web design. I enjoy
            developing simple, clean and slick websites that provide real value
            to the end user. Thousands of clients have procured exceptional
            resulfs while working with me. Delivering work within time and
            budget which meets clients requirements in our mata.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0 lg:mx-0 mx-3 py-7 lg:py-7">
            {userInfo.map((info: UserInfoType, i) => (
              <div
                key={i}
                className="text-center bg-bgPrimary lg:bg-transparent rounded-lg p-4 lg:p-0"
              >
                <p className="text-[16px] md:text-[20px] leading-7.5 text-grayContent">
                  {info.title}
                </p>
                <h3 className="font-bold text-[16px] md:text-[20px] leading-7.5 text-darkTxt">
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
