import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Geoffrey Nguyen | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Geoff',
  subtitle: "I'm a Test Engineer with a passion for software dev.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hi, I'm Geoff — a software developer with a passion for solving complex problems and building high-quality software. With a background in RF Software Test Engineering, I bring a strong focus on test planning, automated testing, and ensuring software reliability. Outside of work, I enjoy developing software as a hobby and exploring new technologies to expand my skill set.",
  paragraphTwo:
    'My expertise spans backend development using Python, Django, and MySQL, as well as frontend development with ReactJS. I have hands-on experience in developing full-stack applications and implementing automated testing using pytest to ensure software quality.',
  paragraphThree:
    "I'm always eager to collaborate and connect with other professionals. Feel free to explore my resume and projects below to learn more about my work and experience.",
  resume: 'https://drive.google.com/file/d/1feIrzXVloW-HCkwqhvMj51gpf2l_6Ele/view?usp=drive_link',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gardenway.png',
    title: 'Gardenway',
    info: 'A full-stack e-commerce platform for an online garden center.',
    info2:
      'Django backend • MySQL database • JWT authentication • pytest automated testing • ReactJS frontend • Cloudinary image hosting • Heroku & Netlify deployment',
    url: 'https://gardenway.netlify.app',
    repo: 'https://github.com/nougat-rey/gardenway',
  },
  {
    id: nanoid(),
    img: 'engineering_project.png',
    title: 'Smart sensor‑based sleep therapy using biofeedback',
    info: 'A system that focuses on improving sleep quality through temperature & humidity regulation, detection of sleep phases from heart rate and control of surrounding light and music.',
    info2: 'Java • SQL • JSON',
    url: '',
    repo: 'https://github.com/nougat-rey/FourthYearProject',
  },
  {
    id: nanoid(),
    img: 'unggoy_runner.png',
    title: 'Halo - Unggoy Runner',
    info: 'Fun little project as a fan of the Halo universe. The user plays as an unggoy (grunt) from the Halo universe as it tries to evade the flood infection form coming after it.',
    info2: 'Python • pygame',
    url: 'https://youtu.be/bq7V6-kzDR0',
    repo: 'https://github.com/nougat-rey/unggoy-runner',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'geoffrey.nguyen9@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://ca.linkedin.com/in/geoffreynguyen77',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nougat-rey',
    },
  ],
};
