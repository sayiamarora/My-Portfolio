import profilePic from "../assets/sayiamaroraimage.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse ">
        <div className="flex justify-center w-full lg:w-1/2 lg:pl-10">
          <div className="flex justify-center rounded-3xl bg-gray-800 w-[30rem] hover:scale-[1.05] ease-in-out transition-all duration-500">
            <motion.img
              src={profilePic}
              alt="Sayiam Arora"
              className="h-[20rem] lg:h-[34rem] rounded-3xl"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Sayiam Arora
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Data Scientist
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              As a passionate data scientist, I am eager to delve into the
              exciting world of data-driven insights. Equipped with a strong
              foundation in data analysis and visualization, I am confident in
              my ability to extract meaningful information from complex
              datasets. My enthusiasm for uncovering hidden patterns and trends
              motivates me to continuously develop my skills and contribute to
              innovative solutions.
            </motion.p>
            <motion.a
              variants={childVariants}
              href="Sayiam_Arora_CV1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-gray-100 rounded-full px-4 py-2 text-sm font-bold  text-black mb-10 hover:bg-gray-300 ease-in-out transition-all duration-500 hover:-translate-y-1"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
