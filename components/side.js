import PropTypes from "prop-types";
import React, { useState, useEffect, createRef } from "react";
import styled from "styled-components";

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.orientation === "left" ? "40px" : "auto")};
  right: ${(props) => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${(props) => (props.orientation === "left" ? "20px" : "auto")};
    right: ${(props) => (props.orientation === "left" ? "auto" : "20px")};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Side = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);
  const sideRef = createRef(null);
  return (
    <StyledSideElement orientation={orientation}>
      {isMounted && <div ref={sideRef}>{children}</div>}
    </StyledSideElement>
  );
};

Side.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  orientation: PropTypes.string,
};

export default Side;
