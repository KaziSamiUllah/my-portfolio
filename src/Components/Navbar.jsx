import { HiHome } from "react-icons/hi2";
import PopOutBtn from "./PopOutBtn";
import Link from "next/link";
import { SiAboutdotme } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { GrTechnology, GrDocumentUser } from "react-icons/gr";
import { MdContacts, MdOutlineWeb } from "react-icons/md";




const Navbar = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="flex flex-col px-2 gap-5">
      <Link href="/">
        <PopOutBtn icon={<HiHome />} text={"Home"} />
      </Link>
      <Link href="#about">
        <PopOutBtn icon={<SiAboutdotme />} text={"About Me"} />
      </Link>
      <Link href="#skills">
        <PopOutBtn icon={<GrTechnology />} text={"Skills"} />
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
