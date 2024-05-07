import React from "react";

function About() {
  return (
    <div className="pt-28 max-w-7xl mx-auto">
      <img
        src="/we.svg"
        alt=""
        style={{
          maskImage: "./w3logo.png",

          // -webkit-mask-image: url(w3logo.png);
          // mask-image: url(w3logo.png);
          // -webkit-mask-repeat: no-repeat;
          // mask-repeat: no-repeat;
        }}
      />
    </div>
  );
}

export default About;
