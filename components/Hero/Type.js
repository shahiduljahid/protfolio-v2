import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      style={{ fontSize: 10 }}
      options={{
        strings: [
          "Software Engineer",
          "MERN Stack Developer",
          "Problem Solver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
