import { FaGithub, FaRocket } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ease-in-out ">
      <img
        src={project.imageUrl}
        // src="../../public/images/vreality.png"
        alt="Project 1"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-row gap-4">
          <a
            href="#"
            className="bg-transparent hover:bg-indigo-500 hover:text-white text-indigo-400 font-semibold border-transparent py-1 px-2 text-sm border hover:border-indigo-500 rounded-full transition duration-300 flex items-center gap-2 flex-row"
          >
            <FaGithub />
            Code
          </a>
          <a
            href="#"
            className="bg-transparent hover:bg-indigo-500 hover:text-white text-indigo-400 font-semibold border-transparent py-1 px-2 text-sm border hover:border-indigo-500 rounded-full transition duration-300 flex items-center gap-2 flex-row"
          >
            <FaRocket />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
