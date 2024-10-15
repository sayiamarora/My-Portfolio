import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "AWS Cloud Captain",
    company: "AWS",
    description: `As the AWS Cloud Captain for the Punjab region at LPU, I am responsible for nurturing peers about AWS technologies, services, and other edge technologies. I facilitate hands-on projects and organize events to enhance learning and engagement. To date, I have successfully hosted 7 events at the LPU college campus, fostering a collaborative learning environment.`,
  },
];

export const PROJECTS = [
  {
    title: "Flight Prediction",
    image: project1,
    description:
      "This project involves developing a machine learning model to forecast flight prices based on historical data. It uses features like departure time, airline, and duration for accurate predictions. The model helps users make informed decisions when booking flights.",
    technologies: [
      "Python",
      "Jupyter NoteBook",
      "Matplotlib",
      "Numpy",
      "Pandas",
      "Seaborn",
    ],
  },
  {
    title: "Bank Customer Analysis",
    image: project2,
    description:
      "project uses Tableau Desktop and Tableau Prep to clean, analyze, and visualize customer data. It includes creating interactive dashboards and stories to uncover insights and trends in customer behavior. The project aids in making data-driven decisions for better customer management.",
    technologies: ["Tableau Desktop", "Tableau Prep Builder"],
  },
  {
    title: "SMS And Spam Classifier",
    image: project3,
    description:
      "This project involves building a machine learning model using Google Colab to distinguish between spam and legitimate messages. It includes preprocessing text data, feature extraction, and training a classification model. This helps in automatically filtering unwanted spam messages from inboxes.",
    technologies: ["Python", "Google Colab", "Pandas", "Numpy", "Scikit-Learn"],
  },
  {
    title: "SAR'S Restaurant",
    image: project4,
    description:
      "This project involves creating a user-friendly site with a home page, gallery, menu section, and contact us page for a realistic and immersive experience. It showcases the restaurant’s offerings and ambiance through visual content. The project aims to enhance user engagement and provide essential information",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Prayagraj, Uttar Pradesh, India ",
  phoneNo: "+91 81278 92446",
  email: "sayiam0127@gmail.com",
};
