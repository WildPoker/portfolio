import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Denzel Bayani', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Denzel',
  subtitle: "I'm a Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I started learning Web Development since 2019 starting from HTML5, CSS3, and JavaScript. After studying for 2 Years i also learned some Frameworks that will help me improve my Website. From then on im confident to call myself a Web Developer.',
  paragraphTwo:
    "I'm well versed using React JS as my Front-End Framework. I'm also familiar on using Node as well as Git.",
  paragraphThree: 'As for my Back-End i usually use NoSQL of Google Firebase and MongoDB.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Chill-images.jpg',
    title: 'Chill Images',
    info: 'A simple static website showing some chill vibe images.',
    info2: '',
    url: 'https://chill-images.netlify.app/',
    repo: 'https://github.com/WildPoker/ChillImages', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Usap.jpg',
    title: 'Usap',
    info: 'A project where i develop a live chat application with friends feature.',
    info2: '',
    url: 'https://usap-4684f.web.app/',
    repo: 'https://github.com/WildPoker/usap', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ALGV.jpg',
    title: 'ALGV',
    info: 'Under Development',
    info2: '',
    url: '',
    repo: 'https://github.com/superpixel13/algv-Gatsby-Project', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'denzelbayani72@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/denzel-bayani-255322201',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/WildPoker',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
