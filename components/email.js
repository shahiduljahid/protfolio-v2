import PropTypes from "prop-types";
import React from "react";

import Side from "./side";

const Email = ({ isHome }) => {
  const email = "shahiduljahid71@gmail.com";
  return (
    <Side isHome={isHome} orientation="right">
      <div className="email">
        <a target="_blank" href={`mailto:${email}`} rel="noreferrer">
          {email}
        </a>
      </div>
    </Side>
  );
};

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
