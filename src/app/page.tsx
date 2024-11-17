//" use client";
import About from "@/components/About"
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
//import AOS from "aos"
//import "aos/dist/aos.css";
//import { useEffect } from "react";


export default function home(){
  
  return(
    <main>
      <Hero />
      <Skills />
      <Contact />
      <About />

    </main>
  )
}
