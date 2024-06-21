import Banner from "@/Components/Banner";
import Intro from "@/Components/About";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import SliderTest from "@/Components/SliderTest";
import Projects from "@/Components/Projects";
import Resume from "@/Components/Resume";
import Contacts from "@/Components/Contacts";

export default function Home() {
  return (
    <div className=" flex justify-center items-center ">
      <div className="">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Resume></Resume>
        <Contacts></Contacts>
      </div>
    </div>
  );
}
