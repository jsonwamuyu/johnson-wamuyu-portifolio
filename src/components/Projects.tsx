import { ProjectCard } from "./ui/ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Project One",
    description:
      "A web application that allows users to track their tasks and manage their time effectively.",
    imageUrl: "../../public/images/vreality.png",
    projectUrl: "#",
  },
  {
    id: 2,
    title: "Project Two",

    description:
      "An e-commerce platform that provides a seamless shopping experience with secure payment integration.",
    imageUrl: "https://via.placeholder.com/600x400",
    projectUrl: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A social networking site that connects people with similar interests and hobbies.",
    imageUrl: "https://via.placeholder.com/600x400",
    projectUrl: "#",
  },
];
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
        <div className="pt-16 grid gap-8 md:grid-cols-2">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
