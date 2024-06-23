import Banner from "@/Components/Banner";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Resume from "@/Components/Resume";
import Contacts from "@/Components/Contacts";
import Footer from "@/Components/Footer";



export default function Home() {
  return (
    <div className=" flex justify-center items-center ">
      <div>
        <Banner></Banner>
        <main>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Resume></Resume>
        <Contacts></Contacts>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
}
