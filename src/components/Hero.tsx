const Hero = () => {
  return (
    <section className="w-full min-h-96 mb-64 bg-gray-50/10 flex items-center ">
      <div className="container justify-center flex flex-col items-center py-8 md:py-16">
        <div className="flex flex-col gap-4 my-8 text-center">
          <h2 className="text-6xl font-bold">
            Hi, I'am{" "}
            <span className="bg-gradient-to-r text-transparent from-indigo-400 to-indigo-600 bg-clip-text">
              Johnson
            </span>
          </h2>
          <h5 className="text-2xl font-semibold text-indigo-100 ">WEB DEVELOPER</h5>
          <p className="w-full md:max-w-xl">
            I create beautiful, responsive, and performant web applications with
            modern technologies. Passionate about clean code and exceptional
            user experiences.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4 md:gap-8 justify-center ">
          <button className=" px-8 py-3 bg-indigo-600 cursor-pointer font-medium text-white rounded-full hover:bg-indigo-700 transition-transform hover:scale-105 ease-in-out duration-100">
            Hire Me
          </button>
          <button className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-full cursor-pointer hover:bg-indigo-600 hover:text-white transition-all hover:scale-105 duration-100 ease-in-out">
            Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
