import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Hero = () => {
  // Smooth scroll handler
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-24 md:pt-32
    flex items-center justify-center bg-gradient-to-b from-black via-black/70 to-[#1a1a1a] text-white overflow-hidden"
    >
      {/* Subtle glowing background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/30 via-transparent to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center py-16"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-indigo-500 bg-clip-text text-transparent">
            Johnson
          </span>
        </motion.h2>

        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-3 md:text-4xl text-2xl font-semibold text-indigo-300 tracking-wider"
        >
          WEB DEVELOPER
        </motion.h5>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 max-w-2xl text-indigo-100 text-base md:text-lg leading-relaxed"
        >
          I craft elegant, high-performing web applications that bring ideas to
          life. Passionate about clean code, stunning design, and seamless user
          experiences, I help brands build their digital presence with
          confidence and creativity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4 md:gap-8 justify-center"
        >
          <button
            onClick={(e) => handleScroll(e, "#contact")}
            className="px-8 py-3 bg-indigo-500 cursor-pointer font-medium rounded-full text-indigo-100 hover:bg-indigo-700 transition-all duration-300 ease-in-out"
          >
            Hire Me
          </button>
          <button
            onClick={(e) => handleScroll(e, "#projects")}
            className="px-8 py-3 border font-medium cursor-pointer border-indigo-500 text-indigo-500 rounded-full hover:bg-indigo-500 hover:text-indigo-100 transition-all duration-300 ease-in-out"
          >
            View Projects
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-6 mt-16"
        >
          <a
            href="#"
            className="text-2xl text-indigo-400 hover:text-indigo-500 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="text-2xl text-indigo-400 hover:text-indigo-500 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-2xl text-indigo-400 hover:text-indigo-500 transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-2xl text-indigo-400 hover:text-indigo-500 transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
