import Image from "next/image";

import { Button, Container } from "@/components";
import { ScrollTo, useSectionRefContextValue } from "@/providers/SectionRef";

import Type from "./../Hero/Type";

export function Hero() {
  const contextValue = useSectionRefContextValue();
  if (contextValue === undefined) return null;
  const { refs } = contextValue;

  return (
    <section style={{ paddingTop: "50px" }} ref={refs.home}>
      <Container>
        <div className="flex flex-row flex-wrap ">
          <div className="flex w-full max-w-3xl  flex-col">
            <p className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
              Hi my Name is ,
            </p>
            <p className="mb-2 text-4xl font-bold text-gray-600 dark:text-gray-400 md:text-5xl">
              Shahidul Islam Jahid
            </p>

            <h1 className="mb-3 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-4xl font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500 md:text-5xl">
              <Type />
            </h1>
            <h2 className="mb-2 text-3xl font-bold text-gray-600 dark:text-gray-400 md:text-4xl">
              I build things for the web.
            </h2>
            <div className="heading-description" style={{ textAlign: "left" }}>
              As a proficient MERN stack developer, I possess extensive experience in developing
              robust web applications utilizing contemporary{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
                Javascript{" "}
              </span>{" "}
              libraries and frameworks including like
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
                {" "}
                React.js{" "}
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500 ">
                Next.js
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
                Node.js
              </span>
              . My unwavering commitment to excellence is evident in my focus on advancing my
              software engineering skills to keep pace with industry advancements and standards.
            </div>
            <div className="mt-3 flex gap-3">
              <ScrollTo to="projects">
                <Button color="primary">See my projects</Button>
              </ScrollTo>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1WOg4DovR60RMKcoI_wOQ_87EJ0WZ08yD/view"
                rel="noopener noreferrer"
              >
                <Button color="secondary">RESUME</Button>
              </a>
            </div>
          </div>
          <Image alt="heroImage" width={400} height={400} src={"/hero.gif"} />
        </div>
      </Container>
    </section>
  );
}
