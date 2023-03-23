"use client";
import { About } from "@/components/Home/About";
import { Contact } from "@/components/Home/Contact";
import { Hero } from "@/components/Home/Hero";
import { Projects } from "@/components/Home/Projects";
import { OthersProject } from "@/components/Home/OthersProject";
import { Skills } from "@/components/Home/Skills";
import { WorkExperience } from "@/components/Home/WorkExperience";
import { useEffect, useState } from "react";
import Preloader from "@/components/Pre";
import { useRouter } from "next/router";
import Particle from './../components/Particle';

export default function RootPage() {
  const [load, upadateLoad] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (load) {
      return;
    }

    if (router?.asPath) {
      const id = router?.asPath.substring(2); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [load]);
  return (
    <div>
      <Preloader load={load} />

      {!load && (
        <>
          {" "}
          <Particle />
          <Hero />
          <About />
          <Skills />
          <WorkExperience />
          <Projects />
          <OthersProject />
          <Contact />
        </>
      )}
    </div>
  );
}
