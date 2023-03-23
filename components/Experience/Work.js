 ;
import React, { useState, useEffect, useRef, createRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Work = () => {
  const jobsData = [
    {
      date: "2017-12-21",
      title: "Front End Developer",
      company: "Lively",
      location: "Freelancing Project",
      range: "(19th November - 23th November) 2022",
      url: "https://livelystudio.io/",
      des: [
        "Developed and shipped web applications for Lively Studio using Next.js, Prisma, Sql light",
        "Built two api end point using Next.js api route to add reviews and posts",
        "Deployed the web app on aws using EC2 linux server using NGINX",
      ],
      nodeRef: createRef(null),
    },
    {
      date: "2017-12-21",
      title: "Full Stack Developer",
      company: "Prime Oman",
      location: "Freelance Project",
      range: "January - April 2022",
      url: "#",
      des: [
        "Developed and maintained code for the client website primarily using HTML, CSS, React, Next.js, Material UI, Node.js, express.js, mongo db",
        "Helped to move their manual workflow online by implementing dynamic pdf certificate generation using PDF-Lib, sending certificates to their clients via email",
        "Implemented device authentication to prevent unknown user to access their secret dashboard",
      ],
      nodeRef: createRef(null),
    },
    {
      date: "2017-12-21",
      title: "Front End Engineer",
      company: "eRMG",
      location: "Singapore(Remote)",
      range: "July - November 2021",
      url: "https://www.ermg.co/",
      des: [
        "Worked with a dedicated team to build a SASS webapp for RMG(Ready made garments), an ambitious startup originating from Singapore",
        "Helped to build the whole front end part from the scratch using React.js and Material UI",
        "Architected and implemented the front-end part of the dashboard",
      ],
      nodeRef: createRef(null),
    },
  ];

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  return (
    <Container style={{ paddingTop: "0px" }} id="work">
      <Row className="padding-container align-items-center justify-content-center">
        <Col ref={revealContainer} md={10}>
          <section style={{ maxWidth: 900 }} id="jobs">
            <div style={{ display: "flex" }} className="inner">
              <div
                className="tablist"
                role="tablist"
                aria-label="Job tabs"
                //   onKeyDown={(e) => onKeyDown(e)}
              >
                {jobsData &&
                  jobsData.map(({ company }, i) => {
                    return (
                      <button
                        className="tab-button"
                        key={i}
                        isactive={(activeTabId === i).toString()}
                        onClick={() => setActiveTabId(i)}
                        ref={(el) => (tabs.current[i] = el)}
                        id={`tab-${i}`}
                        role="tab"
                        tabIndex={activeTabId === i ? "0" : "-1"}
                        aria-selected={activeTabId === i ? true : false}
                        aria-controls={`panel-${i}`}
                      >
                        <span>{company}</span>
                      </button>
                    );
                  })}
                <div
                  className="highlight-tab"
                  style={{
                    transform: `translateY(
                  calc(${activeTabId} * var(--tab-height))
                  )`,
                  }}
                  activetabid={activeTabId}
                />
                <div
                  className="highlight-mobile"
                  style={{
                    transform: `translateX(
                  calc(${activeTabId} * var(--tab-width))
                  )`,
                  }}
                  activetabid={activeTabId}
                />
              </div>

              <div className="panels">
                {jobsData &&
                  jobsData.map(({ title, url, company, range, des, nodeRef }, i) => {
                    return (
                      <div
                        key={i}
                        className="panel"
                        id={i}
                        role="tabpanel"
                        tabIndex={activeTabId === i ? "0" : "-1"}
                        aria-labelledby={`tab-${i}`}
                        aria-hidden={activeTabId !== i}
                        hidden={activeTabId !== i}
                        ref={nodeRef}
                      >
                        <h3>
                          <span>{title}</span>
                          <span className="company">
                            &nbsp;@&nbsp;
                            <a target="_blank" href={url} className="inline-link" rel="noreferrer">
                              {company}
                            </a>
                          </span>
                        </h3>
                        <p className="range">{range}</p>
                        <div className="description">
                          <ul>
                            {des.map((item, i) => {
                              return <li key={i}>{item}</li>;
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
