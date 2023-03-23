import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import bookShop from "@/Assets/Projects/bookShop.png";
import Esports_Ground from "@/Assets/Projects/es.png";
import Moments from "@/Assets/Projects/moment.png";
import { Button, Section } from "@/components";

export type Project = {
  id: string;
  category: string;
  name: string;
  description: string;
  imageURL: StaticImageData;
  stack: string[];
  githubFront?: string;
  githubBack?: string;
  preview?: string;
};

type ProjectProps = Project;
const projectData: Project[] = [
  {
    id: "1",
    category: "In Progress",
    preview: "https://esports-ground.vercel.app/",
    name: "ESPORTS GROUND",
    stack: ["Next.js", "express.js", "Material UI", "Mongo DB", "PdfLib"],
    githubFront: "https://github.com/shahiduljahid/Esports-Management",
    githubBack: "https://github.com/shahiduljahid/esports-management-server",
    imageURL: Esports_Ground,
    description:
      "Esports management software is designed to help esports organizations and teams manage their operations more efficiently. It offers features such as tournament creation, generate overall standings what automated sorted , serve banner and certificate templates for teams and player. It also provides an easy-to-use interface for managing schedules, and events.",
  },
  {
    id: "2",
    category: "Launched",
    preview: "https://your--moments.web.app/",
    name: "MOMENTS",
    stack: ["React", "Node.js", "express.js", "Firebase", "Mongo DB", "Stripe"],
    githubFront: "https://github.com/shahiduljahid/Moments",
    githubBack: "https://github.com/shahiduljahid/wedding-photographer-server",
    imageURL: Moments,
    description:
      "Moments is a single page web application created using React.js for a wedding photography agency. It provides users with the ability to browse and book services, view their booking history, and leave reviews for the services they received. Additionally, it provides administrators with the ability to manage services, view orders, and add new administrators.",
  },
  {
    id: "3",
    category: "Launched",
    preview: "https://bookshop-9dab3.web.app/",
    name: "Book Shop",
    stack: ["React", "Node.js", "Firebase", "Mongo DB"],
    githubFront: "https://github.com/shahiduljahid/bookshopclient",
    githubBack: "https://github.com/shahiduljahid/bookshopserver",
    imageURL: bookShop,
    description:
      "This is a Book shop web application created using React.js. It allows users to place orders and view their order history, while administrators can add and delete products, and manage the application through a dashboard. The application has a responsive design that supports both desktop and mobile devices.",
  },
];

export function Project(props: ProjectProps) {
  const { name, description, id, imageURL, category, stack, preview, githubFront, githubBack } =
    props;
  return (
    <div
      // style={{justifyContent: "space-between"}}
      id={id}
      className="flex transform flex-col gap-5 rounded-md bg-white p-5 shadow-md dark:bg-background-400"
    >
      <Image
        src={imageURL}
        alt={name}
        width={500}
        height={700}
        className="aspect-[2/1] w-full rounded-md object-cover"
      />
      <div className="flex flex-col gap-3">
        <div>
          <p className="mb-[2px] text-sm uppercase text-primary-600 dark:text-primary-500">
            {category}
          </p>
          <h2 className="text-2xl">{name}</h2>
        </div>
        <div className="flex flex-wrap gap-2 p-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="inline-flex flex-auto items-center justify-center rounded-md bg-primary-600 py-1 px-3 text-center align-middle text-xs text-primary-50 dark:bg-primary-500 dark:text-primary-800"
            >
              {tech}
            </span>
          ))}
        </div>
        <p style={{ paddingBottom: "70px" }} className="text-sm text-gray-600 dark:text-gray-100">
          {description}
        </p>
        <div style={{ position: "absolute", bottom: "20px" }} className="flex gap-3">
          {preview && (
            <a href={preview} target="_blank" rel="noreferrer">
              <Button size="sm" startIcon={<ArrowTopRightOnSquareIcon width={18} height={18} />}>
                Demo
              </Button>
            </a>
          )}
          {githubFront && (
            <a href={githubFront} target="_blank" rel="noreferrer">
              <Button style={{ padding: "9px" }} size="sm">
                <div
                  style={{
                    margin: "0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span style={{ marginLeft: "2px" }}>Front End</span>
                </div>
              </Button>
            </a>
          )}
          {githubBack && (
            <a href={githubBack} target="_blank" rel="noreferrer">
              <Button style={{ padding: "9px" }} size="sm">
                <div
                  style={{
                    margin: "0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span style={{ marginLeft: "2px" }}>Back End</span>
                </div>
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section refKey="projects" no="04" title="Projects">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {projectData.map((project) => (
          <Project {...project} key={project.id} />
        ))}
      </div>
    </Section>
  );
}
