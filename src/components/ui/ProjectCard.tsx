import { FaGithub, FaRocket } from "react-icons/fa";

interface ProjectDataType {
  imageUrl: string;
  title: string;
  description: string;
}

export const ProjectCard = ({
  imageUrl,
  title,
  description,
}: ProjectDataType) => {
  return (
    <div className="bg-gray-800 rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ease-in-out ">
      <img
        src={imageUrl}
        // src="../../public/images/vreality.png"
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
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
