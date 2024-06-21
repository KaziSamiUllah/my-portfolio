import Banner from "@/Components/Banner";
import Intro from "@/Components/About";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import About from "@/Components/About";

export default function Home() {
  return (
    <div className=" flex justify-center items-center ">
      <div className="">
        <Banner></Banner>
       <About></About>
      </div>
    </div>
  );
}
