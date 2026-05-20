import { useRef, useState } from "react";
import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const OtherProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);

  const GRID_LIMIT = 3;
  const projects = [
    {
      external: "https://github.com/shahiduljahid/Smart_Traffic_Sandbox",
      title: "Smart Traffic Sandbox",
      tech: ["Python", "YOLOv11", "BoT-SORT", "OpenCV", "Flask", "SAHI"],
      githubFront: "https://github.com/shahiduljahid/Smart_Traffic_Sandbox",
      githubBack: "",
      description:
        "Built an end-to-end vehicle detection and tracking system using YOLOv11s and BoT-SORT, upgraded from a YOLOv8n + DeepSORT baseline. Added TTA/SAHI evaluation, tracking analysis, and a Flask dashboard with live confidence/IoU controls for real-time monitoring.",
    },
    {
      external: "https://www.youtube.com/watch?v=VAqPvSXJvRI",
      title: "Pro Car Racing",
      tech: ["Unity", "C#"],
      githubFront: "https://drive.google.com/file/d/16Kid7LoSvmHSNbB7Jj_HsrMmR0cd9kAP/view",
      githubBack: "https://drive.google.com/file/d/1ZhUrYSzmJwvlp2Pk1Q8Bds43Xq4d62eq/view",
      description:
        "Developed a car racing game in Unity, using Asset Store tracks and car models. Programmed gameplay interactivity with C# scripts, integrated multiple camera views, added racing music, and implemented local storage for player progress. Created custom AI opponents with independent tracks and performance tracking.",
    },
    {
      external: "https://your--moments.web.app/",
      title: "MOMENTS",
      tech: ["React", "Node.js", "express.js", "Firebase", "Mongo DB", "Stripe"],
      githubFront: "https://github.com/shahiduljahid/Moments",
      githubBack: "https://github.com/shahiduljahid/wedding-photographer-server",
      description:
        "Moments is a single page web application created using React.js for a wedding photography agency. It provides users with the ability to browse and book services, view their booking history, and leave reviews for the services they received. Additionally, it provides administrators with the ability to manage services, view orders, and add new administrators.",
    },
    {
      external: "https://bookshop-9dab3.web.app/",
      title: "Book Shop",
      tech: ["React", "Node.js", "Firebase", "Mongo DB"],
      githubFront: "https://github.com/shahiduljahid/bookshopclient",
      githubBack: "https://github.com/shahiduljahid/bookshopserver",
      description:
        "This is a Book shop web application created using React.js. It allows users to place orders and view their order history, while administrators can add and delete products, and manage the application through a dashboard. The application has a responsive design that supports both desktop and mobile devices.",
    },

    {
      external: "https://doctor-app-8c617.web.app/",
      title: "Doctor Portal",
      tech: ["React", "express.js", "Firebase", "Mongo DB", "Stripe"],
      githubFront: "https://github.com/shahiduljahid/doctor-portal",
      githubBack: "https://github.com/shahiduljahid/doctor-portal-server",
      description:
        "It's a Doctor Portal’s Website where authenticated users can Register Appointment for doctor and check their appointments status. On the Admin dashboard admin can add/delete/update any appointments and change appointments status",
    },
  ];
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const projectInner = ({ githubFront, githubBack, external, title, tech, description }) => {
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

          <h3 className="text-dark-600 mb-10 text-2xl dark:text-gray-100">
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
                <li className="text-sm text-gray-600 dark:text-gray-100" key={i}>
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="other-projects text-dark-600 container mb-10 text-2xl dark:text-gray-100">
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
                transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
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
