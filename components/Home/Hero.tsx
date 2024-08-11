import { Button, Container } from "@/components";
import ComputersCanvas from "@/components/canvas/Computer";
import { ScrollTo, useSectionRefContextValue } from "@/providers/SectionRef";

import StarsCanvas from "./../canvas/Stars";
import Type from "./../Hero/Type";

export function Hero() {
  const contextValue = useSectionRefContextValue();
  if (contextValue === undefined) return null;
  const { refs } = contextValue;

  return (
    <section style={{ paddingTop: "50px" }} ref={refs.home}>
      <Container>
        <StarsCanvas />
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12  flex  max-w-3xl flex-col sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-6">
            <p className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
              Hi my Name is ,
            </p>
            <p className="mb-2 text-4xl font-bold text-gray-600 dark:text-gray-400 md:text-5xl">
              Shahidul Islam Jahid
            </p>

            <h1 className="mb-3 h-[50px] bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-3xl  font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500 md:text-5xl md:h-[55px]">
              <Type />
            </h1>
            <h2 className="mb-2 text-3xl font-bold text-gray-600 dark:text-gray-400 md:text-4xl">
              I build things for the web And AI.
            </h2>
            <div className="heading-description text-justify">
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
                Node.js{" "}
              </span>
              In addition to my expertise in web development, I am also skilled in{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
                Python
              </span>{" "}
              and frameworks like{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
                FastAPI{" "}
              </span>
              My research focuses on deep learning and neural networks, with a passion for{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500">
                integrating AI with web technologies
              </span>
              . I am dedicated to advancing my skills and staying at the forefront of industry
              standards.
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
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-6 ">
            <ComputersCanvas />
          </div>
        </div>
      </Container>
    </section>
  );
}
