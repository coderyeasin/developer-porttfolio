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
    <section className="py-10">
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="#" className="font-extrabold text-[45px]">
            Ma<span className="text-btnColor">r</span>y
          </Link>
          <ul className="flex items-center gap-20">
            {navItem.map((item, i) => (
              <li key={i} className="text-grayNav">
                <Link
                  href={item.path}
                  className={`${item.title === "Hire Me" ? "bg-btnColor rounded-[5px] px-6 py-4 text-white" : "text-[20px] text-grayNav"}`}
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
