export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  // =========================================================
  // 1. E-COMMERCE FULL-STACK WEBSITE
  // =========================================================
  {
    title: "E-Commerce Full-Stack Website",

    desc: "A full-stack e-commerce platform with secure authentication, product management, shopping, order processing, Stripe payments, newsletter subscriptions, and an integrated blog module.",

    subdesc:
      "Built with React.js, Node.js, Express.js, and MongoDB. Implemented JWT authentication, Stripe payments, RESTful APIs, centralized admin dashboard, Cloudinary media handling, Redux state management, and performance optimizations using lazy loading, code splitting, and skeleton loading.",

    href: "https://e-mart-6rcu.onrender.com/",
    logo: "/assets/logo.png",

    logoStyle: {
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
        id: 2,
        name: "Node.js",
        path: "/assets/nodejs.png",
      },
      {
        id: 3,
        name: "Express.js",
        path: "/assets/Express.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/mongodb.png",
      },
      {
        id: 5,
        name: "Stripe",
        path: "/assets/stripe.png",
      },
     
      {
        id: 7,
        name: "Redux",
        path: "/assets/Redux.svg",
      },
      {
        id: 8,
        name: "Cloudinary",
        path: "/assets/cloudinary.svg",
      },
    ],
  },

  // =========================================================
  // 2. REALTIME COLLABORATIVE CODE EDITOR
  // =========================================================
  {
    title: "Realtime Collaborative Code Editor",

    desc: "A real-time collaborative code editor built for multi-user programming sessions, enabling near-instant shared editing, synchronized cursors, and smooth live collaboration in the browser.",

    subdesc:
      "Built with React.js, Monaco Editor, Node.js, Socket.IO, and Yjs. Implemented CRDT-based synchronization for conflict-free concurrent editing, Yjs awareness state for live user presence, WebSocket-driven real-time updates, and a Docker multi-stage build for deployment.",

    href: "https://crdt-igt4.onrender.com/",

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
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Monaco Editor",
        path: "/assets/monaco-editor.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/nodejs.png",
      },
      {
        id: 4,
        name: "Socket.IO",
        path: "/assets/Socket.io.svg"
      
      },
      {
        id: 5,
        name: "Yjs",
        path: "/assets/yjs.svg",
      },
      {
        id: 6,
        name: "Docker",
        path: "/assets/docker.svg",
      },
    ],
  },

  // =========================================================
  // 3. NODE.JS BACKEND GENERATOR CLI
  // =========================================================
  {
    title: "Node.js Backend Generator CLI",

    desc: "An open-source Node.js CLI tool that scaffolds production-ready backend projects through a single npx command, helping developers quickly generate a structured backend foundation.",

    subdesc:
      "Built with Node.js, Express.js, JavaScript, and npm. Implemented template-based project generation with recursive file copying, destination-path validation, controlled environment-file filtering, automated E2E testing, package validation, dependency installation checks, and a verified live npx workflow.",

    href: "https://www.npmjs.com/package/nikhilbhatt-dev",

    logo: "/assets/nodejs.png",

    logoStyle: {
      backgroundColor: "#07111F",
      border: "0.2px solid #16324F",
      boxShadow: "0px 0px 60px 0px #38BDF84D",
    },

    spotlight: "/assets/spotlight4.png",

    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/nodejs.png",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/Express.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
      {
        id: 4,
        name: "npm",
        path: "/assets/NPM.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,

    deskPosition: isMobile ? [2.2, -3.8, 0] : [7.2, -1.8, 0],

    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],

    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};
