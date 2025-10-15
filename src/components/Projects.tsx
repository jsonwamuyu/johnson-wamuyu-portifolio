import React from "react";

const Projects = () => {
  return (
    <section className="wrapper" id="projects">
      <div className="container flex-col">
        <h2 className="font-bold text-5xl md:text-7xl text-center">
          My{" "}
          <span className="bg-gradient-to-r to-indigo-700 from-indigo-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="pt-4 text-center">Here are some of my recent works.</p>
      </div>
    </section>
  );
};

export default Projects;
