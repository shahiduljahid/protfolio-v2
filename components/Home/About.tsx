import Image from "next/image";

import { HStack, SectionBase, SectionTitle } from "@/components";

export function About() {
  return (
    <SectionBase refKey="about" id="about">
      <SectionTitle no="01" title="About me" className="mb-[1.5rem]" />
      <HStack className="aboutSection flex flex-col items-center justify-center gap-5 lg:items-start lg:gap-16">
        <div className="grid max-w-xl flex-1">
          <div className="grid gap-5">
            <p className="home-about-body">
              Hello! My name is Shahidul Islam Jahid and I am a seasoned web developer with a strong
              academic background and expertise in programming languages such as{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
                C, C++, Java, Python, JavaScript, and C#{" "}
              </span>{" "}
              . My proficiency lies in full-stack web development and single-page web application
              frameworks such as{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
                Next.js & Node.js!
              </span>
              . I have gained valuable insights into system design, team collaboration, and
              efficient coding practices through internships at{" "}
              <a href="https://ermg.co/" target="_blank" rel="noreferrer">
                start-up
              </a>
              .I am passionate about contributing to the technology industry with my strong
              foundation in software engineering.
              <br />
              <br />
            </p>
          </div>
        </div>
        <Image
          src="/me.jpg"
          alt="Shahidul Islam Jahid"
          width={300}
          height={300}
          className="aspect-square border-4 border-primary-600 object-cover shadow-[10px_10px_0px_0px] shadow-primary-600 duration-500 hover:shadow-none dark:border-primary-500 dark:shadow-primary-500"
        />
      </HStack>
    </SectionBase>
  );
}
