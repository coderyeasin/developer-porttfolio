import Container from "../UI/Container/Container";
import Link from "next/link";
import { NaveType } from "@/types/type";

const navItem: NaveType[] = [
  { title: "Portfolio", path: "#" },
  { title: "Blog", path: "#" },
  { title: "Hire Me", path: "#" },
];

const Header = () => {
  return (
    <section className="py-6 md:py-10 relative">
      <Container>
        <nav className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <Link href="#" className="font-extrabold text-[32px] md:text-[45px]">
            Ma<span className="text-btnColor">r</span>y
          </Link>
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-20">
            {navItem.map((item, i) => (
              <li key={i} className="text-grayNav w-full md:w-auto">
                <Link
                  href={item.path}
                  className={`${item.title === "Hire Me" ? "bg-btnColor rounded-[5px] px-6 py-3 md:py-4 text-white w-full md:w-auto block text-center" : "text-[18px] md:text-[20px] text-grayNav w-full md:w-auto block text-center"}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
};

export default Header;
