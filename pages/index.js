import Head from "next/head";
import { About } from "@/components/Home/About";
import { Contact } from "@/components/Home/Contact";
import { Hero } from "@/components/Home/Hero";
import { OthersProject } from "@/components/Home/OthersProject";
import { Projects } from "@/components/Home/Projects";
import { Skills } from "@/components/Home/Skills";
import { WorkExperience } from "@/components/Home/WorkExperience";


export default function Home() {
  return (
    <>
      <Head></Head>

      <main>
          <Hero />
          <About />
          <Skills />
          <WorkExperience />
          <Projects />
          <OthersProject />
          <Contact />
      </main>
    </>
  );
}
