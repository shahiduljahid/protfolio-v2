import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { FiGitBranch, FiGithub, FiLinkedin, FiStar, FiTwitter, FiFacebook } from "react-icons/fi";
import styled from "styled-components";

const socialMedia = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/shahiduljahid71/",
    icon: <FiLinkedin />,
  },
  {
    name: "GitHub",
    url: "https://github.com/shahiduljahid",
    icon: <FiGithub />,
  },
  {
    name: "FaceBook",
    url: "https://www.facebook.com/Shahidul.3333",
    icon: <FiFacebook />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/shahidulJahid1",
    icon: <FiTwitter />,
  },
];

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      color: var(--lightest-slate);
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
    color: var(--light-slate);
    text-decoration: none;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/shahiduljahid/protfolio-v2")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url, icon }, i) => (
              <li key={i}>
                <a target="_blank" href={url} aria-label={name} rel="noreferrer">
                  {icon}
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabindex="-1">
        <a target="_blank" href="https://github.com/shahiduljahid/protfolio-v2" rel="noreferrer">
          <div> Built with love by Shahidul Islam Jahid </div>
          <div className="github-stats">
            {githubInfo.stars ? (
              <span>
                <FiStar />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
            ) : (
              " "
            )}
            {githubInfo.forks ? (
              <div className="github-stats">
                <span>
                  <FiGitBranch />

                  <span>{githubInfo.forks.toLocaleString()}</span>
                </span>
              </div>
            ) : (
              " "
            )}
          </div>
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
