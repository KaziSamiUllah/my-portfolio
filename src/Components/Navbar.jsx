import { HiHome } from "react-icons/hi2";
import PopOutBtn from "./PopOutBtn";
import Link from "next/link";
import { SiAboutdotme } from "react-icons/si";
import { GrTechnology, GrDocumentUser } from "react-icons/gr";
import { MdContacts, MdOutlineWeb } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";





const Navbar = () => {
  return (
    <div className="flex h-screen items-center opacity-20  hover:opacity-85 transition duration-500">
      <div className="flex flex-col px-2 gap-5">
      <Link className="hover:scale-125 translate-x-10" href="/">
        <PopOutBtn icon={<HiHome />} text={"Home"} />
      </Link>
      <Link href="#about">
        <PopOutBtn icon={<SiAboutdotme />} text={"About Me"} />
      </Link>
      <Link href="#skills">
        <PopOutBtn icon={<GrTechnology />} text={"Skills"} />
      </Link>
      <Link href="#education">
        <PopOutBtn icon={<FaUserGraduate />} text={"Education"} />
      </Link>
      <Link href="#projects">
        <PopOutBtn icon={<MdOutlineWeb />} text={"Projects"} />
      </Link>
      <Link href="#resume">
        <PopOutBtn icon={<GrDocumentUser />} text={"Resume"} />
      </Link>
      <Link href="#contact">
        <PopOutBtn icon={<MdContacts />} text={"Contact"} />
      </Link>
    </div>
    </div>
  );
};

export default Navbar;
