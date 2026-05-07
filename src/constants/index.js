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



export const myProjects = [
  {
    title: "E-Commerce Store – Full Stack Shopping Platform",
    desc: "A modern e-commerce web application designed to deliver a seamless online shopping experience. It includes product browsing, cart functionality, secure checkout, order management, and optimized UI performance using lazy loading and skeleton placeholders for a smooth user experience.",
    subdesc:
      "Built with React for the frontend and Node.js with Express for the backend, the platform uses MongoDB for data storage. Integrated with Stripe for secure payments and Cloudinary for optimized media handling. Implements lazy loading and skeleton UI to enhance performance, reduce load times, and improve perceived user experience. Designed with scalability, performance, and real-world production use in mind.",
    href: "https://e-com-frontend-mu-mauve.vercel.app/",
    texture: "/textures/project/ecommerce.mp4",

    logo: "/assets/logo.png",
    logoStyle: {
      // backgroundColor: "#1A0F2E",
      border: "0.2px solid #1E293B",
      boxShadow: "0px 0px 60px 0px #38BDF84D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/nodejs.png",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/mongodb.png",
      },
      {
        id: 5,
        name: "Tailwind CSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 6,
        name: "Stripe",
        path: "/assets/stripe.png",
      },
    ],
  },

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
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
    ],
  },

  {
    title: "Realtime Collaborative Code Editor",
    desc: "A real-time collaborative code editor built for multi-user programming sessions, enabling near-instant shared editing, synchronized cursors, and smooth live collaboration in the browser.",
    subdesc:
      "Built with React, Monaco Editor, Node.js, Socket.IO, and Yjs, the application uses CRDT-based synchronization for conflict-free editing, awareness state for live presence tracking, and a WebSocket-driven architecture for fast updates. Containerized with a Docker multi-stage build for efficient deployment.",
    href: "https://crdt-igt4.onrender.com/",
    texture: "/textures/project/code-editor.mp4",
    logo: "/assets/terminal.png",
    logoStyle: {
      backgroundColor: "#07111F",
      border: "0.2px solid #16324F",
      boxShadow: "0px 0px 60px 0px #38BDF84D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Monaco Editor",
        path: "/assets/monaco-editor.svg",
      },
      {
        id: 2,
        name: "Socket.IO",
        path: "/assets/socketio.svg",
      },
      {
        id: 3,
        name: "Yjs",
        path: "/assets/yjs.svg",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/docker.svg",
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
    spotlight: "/assets/spotlight3.png",
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
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};
