import Image from "next/image";

import { HStack, SectionBase, SectionTitle } from "@/components";

export function About() {
  return (
    <SectionBase refKey="about" id="about">
      <SectionTitle no="01" title="About me" className="mb-[1.5rem]" />
      <HStack className="aboutSection flex flex-col items-center justify-center gap-2 lg:items-start lg:gap-16">
        <div className="grid text-justify">
          <p className="home-about-body">
            Hello! I&rsquo;m Shahidul Islam Jahid from Bangladesh 🔴. I hold a {"Bachelor's"} degree
            in
            <span className="mx-1 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
              Computer Science
            </span>
            🎓. I completed my Master&rsquo;s in
            <span className="mx-1 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
              Software Engineering
            </span>
            📚 at the University of Electronic Science and Technology of China and am now pursuing a
            PhD at the same university, focusing my research on
            <span className="mx-1 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
              Text-to-SQL and LLM integration
            </span>
            .
          </p>
          <p className="home-about-body">
            With a strong foundation in programming languages such as
            <span className="mx-1 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
              C, C++, Java, Python, JavaScript, and C#
            </span>
            , I specialize in
            <span className="mx-1 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
              full-stack web development
            </span>{" "}
            🌐 and have hands-on experience with frameworks like
            <span className="mx-1 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
              Next.js & Node.js
            </span>
            . I have gained valuable insights into system design, team collaboration, and efficient
            coding practices through internships at
            <a href="https://ermg.co/" target="_blank" rel="noreferrer">
              start-up
            </a>
            . I am passionate about contributing to the tech industry by integrating AI into web
            technologies and am excited about the future possibilities of merging advanced AI with
            web development ✨🔍.
          </p>
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
