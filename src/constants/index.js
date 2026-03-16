export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: "NASA Space Biology Engine",
    desc: "NASA Space Biology Engine is an advanced scientific simulation platform that models human physiology, ecosystem stability, and mission environments in deep space scenarios. It integrates real-time adaptive simulations, anomaly detection, and an integrity ledger into a unified interactive 3D research environment.",
    subdesc:
      "Built as a unified monorepo using React + Vite with TypeScript, the platform combines modular simulation engines (physiology, ecosystems, mission generation, anomaly detection, security ledger, and replay systems) with immersive UI dashboards and 3D visualization labs. Designed with a scalable architecture, framework-agnostic engines, and extensible scenario modeling for ISS, Mars transit, and solar storm simulations.",
    href: "https://comforting-tiramisu-76c084.netlify.app/",
    texture: "/textures/project/nasa-space-biology.mp4",
    logo: "/assets/project-logo-nasa.png",
    logoStyle: {
      backgroundColor: "#0A0F1F",
      border: "0.2px solid #1F2A44",
      boxShadow: "0px 0px 60px 0px #1E90FF4D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      
    ],
  },

  {
    title: "Music School Hindi – Modern Learning Platform",
    desc: "Music School Hindi is a modern, interactive web platform designed to showcase structured music education programs. It features smooth animations, responsive layouts, and an elegant UI to present courses, instructors, and enrollment flows in a clean and engaging format.",
    subdesc:
      "Built with Next.js 14 and TypeScript, the platform leverages Tailwind CSS for scalable styling and Framer Motion for fluid animations. Optimized for performance and SEO using Next.js App Router architecture, it delivers a fast, production-ready user experience.",
    href: "https://music-school-hindi-8d9qa2hd9-nikhil-bhatts-projects-216f008f.vercel.app/",
    texture: "/textures/project/music-school.mp4",
    logo: "/assets/project-logo-music.png",
    logoStyle: {
      backgroundColor: "#1A0F2E",
      border: "0.2px solid #2E1A47",
      boxShadow: "0px 0px 60px 0px #8B5CF64D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Next.js 14",
        path: "/assets/typescript.png",
      },
      {
        id: 2,
        name: "React 18",
        path: "/assets/react.svg",
      },
     
      {
        id: 4,
        name: "Tailwind CSS",
        path: "/assets/tailwindcss.png",
      },
      
    ],
  },

  {
    title: "Classic Snake Game – JavaScript Edition",
    desc: "A fully functional classic Snake Game built using Vanilla JavaScript, featuring dynamic movement, food consumption mechanics, score tracking, high-score persistence using LocalStorage, and a real-time game loop system.",
    subdesc:
      "Developed using HTML, CSS, and core JavaScript concepts, this project demonstrates DOM manipulation, array-based state management, collision detection, interval-driven game loops, and browser storage integration. Designed with modular game logic and responsive UI elements including Game Over modal and restart functionality.",
    href: "https://snakegame-3d.netlify.app/",
    texture: "/textures/project/snake-game.mp4",
    logo: "/assets/project-logo-snake.png",
    logoStyle: {
      backgroundColor: "#0F172A",
      border: "0.2px solid #1E293B",
      boxShadow: "0px 0px 60px 0px #22C55E4D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/html.png",
      },
      {
        id: 2,
        name: "CSS3",
        path: "/assets/css.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];