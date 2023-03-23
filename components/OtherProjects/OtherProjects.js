"use client";
import { srConfig } from "@/utils";
import { useEffect, useRef, useState } from "react";
import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const OtherProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  // useEffect(() => {
  //   async function animate() {
  //     if (revealTitle.current && revealProjects.current) {
  //       const sr = (await import("scrollreveal")).default;
  //       sr().reveal(revealTitle.current, srConfig());
  //       sr().reveal(revealArchiveLink.current, srConfig());
  //       revealProjects.current.forEach((ref, i) =>
  //         sr().reveal(ref, srConfig(i * 100))
  //       );
  //     }
  //   }
  //   animate();
  // }, []);

  const GRID_LIMIT = 6;
  const projects = [
    {
    external: "https://doctor-app-8c617.web.app/",
    title: "Doctor Portal",
    tech: ["React", "express.js", "Firebase", "Mongo DB", "Stripe"],
    githubFront: "https://github.com/shahiduljahid/doctor-portal",
    githubBack: "https://github.com/shahiduljahid/doctor-portal-server",
    description:
    "It's a Doctor Portal’s Website where authenticated users can Register Appointment for doctor and check their appointments status. On the Admin dashboard admin can add/delete/update any appointments and change appointments status",

  },
  {
    external: "https://faruk-portfolio.web.app/",
    title: "Faruk Portfolio",
    tech: ["React", "Bootstrap"],
    githubFront: "https://github.com/shahiduljahid/faruk-Portfolio",
    githubBack: "",
    description:
      "This is a portfolio website for Faruk, a graphic designer, built using React and Bootstrap. The website includes features such as a home page introducing Faruk and his work, a portfolio page with a gallery of Faruk's projects, an about page providing information about Faruk's background and experience, and a contact page with a form to send Faruk a message.",
  },
  {
    external: "https://be-leaf.web.app/",
    title: "Be Leaf",
    tech: ["React", "Bootstrap"],
    githubFront: "https://github.com/shahiduljahid/be-leaf",
    githubBack: "",
    description:
      "created a landing page for Be Leaf, an online plant selling company, using React and Bootstrap. The landing page features a clean and modern design with responsive elements that adjust to different screen sizes. Overall, the landing page effectively conveys the company's brand and mission while providing a seamless user experience for potential customers.",
  },
  ];
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const projectInner = ({
    githubFront,
    githubBack,
    external,
    title,
    tech,
    description,
  }) => {
    return (
      <div className="project-inner flex transform flex-col gap-5 rounded-md bg-white p-5 shadow-md dark:bg-background-400">
        <header>
          <div className="project-top">
            <div className="folder">
              <CiFolderOn />
              {/* <FiFolder /> */}
              {/* <HiOutlineFolder /> */}
            </div>
            <div className="project-links">
              {githubFront && (
                <a 
                  href={githubFront}
                  aria-label="GitHub Link"
                  title="Github Frontend Link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
              )}
              {githubBack && (
                <a
                  href={githubBack}
                  aria-label="GitHub Link"
                  title="Github Backend Link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
              )}
              {external && (
                <a
                  href={external}
                  aria-label="External Link"
                  title="External Link"
                  className="external"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-2xl mb-10 text-dark-600 dark:text-gray-100">
            <a href={external} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>

          <div className="text-sm text-gray-600 dark:text-gray-100">
            <p>{description}</p>
          </div>
        </header>

        <div>
          {tech && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li className="text-sm text-gray-600 dark:text-gray-100" key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="other-projects container text-2xl mb-10 text-dark-600 dark:text-gray-100">
      <h2 ref={revealTitle}>Other Noteworthy Projects</h2>

      {/* <Link
        className="inline-link archive-link"
        to="/archive"
        ref={revealArchiveLink}
      >
        view the archive
      </Link> */}

      <ul className="projects-grid">
      
          {projectsToShow &&
            projectsToShow.map((item, i) => (
            
                <li
                  className="other-project"
                  key={i}
                  ref={(el) => (revealProjects.current[i] = el)}
                  style={{
                    transitionDelay: `${
                      i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                    }ms`,
                  }}
                >
                  {projectInner(item)}
                </li>
            
            ))}
   
      </ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? "Less" : "More"}
      </button>
    </section>
  );
};

export default OtherProjects;
