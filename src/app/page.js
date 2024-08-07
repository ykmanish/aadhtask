import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import HeroCard1 from "./components/Hero/HeroCard1";
import HeroCard3 from "./components/Hero/HeroCard3";
import Process from "./components/Process";
import Testimonial from "./components/Testimonial/Testimonial";
import Blog from "./components/Blog/Blog";
import Brands from "./components/Brands";
import Hiring from "./components/Hiring/Hiring";
import Footer from "./components/Footer/Footer";
import Foots from "./components/Footer/Foots";

export default function Home() {
  return (
    <>
  
    <Navbar/>
    <Hero/>
    <Process/>
    <Testimonial/>
    <Blog/>
    <Brands/>
    <Hiring/>
   <Foots/>
    </>
  );
}
