import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { SiTableau } from "react-icons/si";
import { DiGithub } from "react-icons/di";
import { SiR } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { DiAws } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiGit } from "react-icons/di";
import { SiJupyter } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { DiJira } from "react-icons/di";
import { DiSqllite } from "react-icons/di";
import { motion, transform } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transtion={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <FaPython className="text-7xl " />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            Python
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <SiTableau className="text-7xl "></SiTableau>
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            Tableau
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <DiGithub className="text-7xl " />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            Github
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <SiR className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            R
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
        >
          <DiSqllite className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            SQL
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <DiGit className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            Git
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <SiJupyter className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            Jupyter
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <SiGooglecolab className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            Colab
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <DiJava className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            Java
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <SiCplusplus className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            C++
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <DiAws className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            AWS
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <DiJira className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            Jira
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <DiHtml5 className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            HTML
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <DiCss3 className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            CSS
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <DiDjango className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            Django
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <RiTailwindCssFill className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            Tailwind
          </div>
        </motion.div>

        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <DiJavascript className="text-7xl" />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            Javascript
          </div>
        </motion.div>
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <RiReactjsLine className="text-7xl " />
          <div className="text-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-700 ease-in-out transform translate-y-[-20px] group-hover:translate-y-0">
            Reactjs
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
