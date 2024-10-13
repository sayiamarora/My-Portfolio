import profilePic from "../assets/sayiamaroraimage.png";

function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse ">
        <div className="flex justify-center w-full lg:w-1/2 lg:pl-10">
          <div className="flex justify-center rounded-3xl bg-gray-800 w-[30rem] hover:scale-[1.05] ease-in-out transition-all duration-500">
            <img
              src={profilePic}
              alt="Sayiam Arora"
              className="h-[20rem] lg:h-[34rem] rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Sayiam Arora
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Data Scientist
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              As a passionate data scientist, I am eager to delve into the
              exciting world of data-driven insights. Equipped with a strong
              foundation in data analysis and visualization, I am confident in
              my ability to extract meaningful information from complex
              datasets. My enthusiasm for uncovering hidden patterns and trends
              motivates me to continuously develop my skills and contribute to
              innovative solutions.
            </p>
            <a
              href="Sayiam_Arora_CV1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-gray-100 rounded-full px-4 py-2 text-sm font-bold  text-black mb-10 hover:bg-gray-300 ease-in-out transition-all duration-500 hover:-translate-y-1"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
