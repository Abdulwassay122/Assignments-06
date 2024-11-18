import Achievements from "@/Components/Achievements";
import Services from "@/Components/Services";
import Header from "@/Components/Header";
import Section1 from "@/Components/Section1";
import Image from "next/image";
import Courses from "@/Components/Courses";
import AboutUs from "@/Components/AboutUs";
import Testimonials from "@/Components/Testimonials";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
  <>
  <Header/>
  <Section1/>
  <Services/>
  <Achievements/>
  <Courses/>
  <AboutUs/>
  <Testimonials/>
  <Footer/>
  </>
  );
}
