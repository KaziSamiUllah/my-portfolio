import Banner from "@/Components/Banner";
import Intro from "@/Components/Intro";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex justify-center items-center ">
      <div className="">
        <Banner></Banner>
        <Intro></Intro>
      </div>
    </div>
  );
}
