import calCivil from "../assets/calCivil.png";
import SocialMedia from "../assets/Social_media.png";
import Simon from "../assets/Simon.png";

export const CardsArr = [
  {
    id: 1,
    imgUrl: calCivil,
    projectTitle: "calCivil",
    projectDescription:
      "calCivil is a web app that helps civil engineers with essential calculations, built with a clean UI and mobile responsiveness to showcase my CSS skills",
    pModules: [
      "Co-ordinate Distance Calculator",
      "Concrete Volume Calculator",
      "Unit Convertor",
      "Brick Quantity Calculator",
    ],
    projectLink: "https://calcivil-backend.onrender.com",
    gitLink: "https://github.com/PSD24-art/calCivil-backend",
  },
  {
    id: 2,
    imgUrl: SocialMedia,
    projectTitle: "Social Media",
    projectDescription:
      "This app is created to learn, and demonstrate the learnings about React. Built with Bootstrap and used React core concepts such as props, hooks (useState, useReducer, useRef), ContextAPI, conditional redering, etc. Best Viewd on Landscape screens",
    pModules: ["Home Page", "Create Post"],
    projectLink: "https://socialmedia-3nvq.onrender.com/",
    gitLink: "https://github.com/PSD24-art/SocialMedia",
  },
  {
    id: 3,
    imgUrl: Simon,
    projectTitle: "Simon Says Game",
    projectDescription:
      "A web-based memory game built with HTML, CSS, and JavaScript where players repeat an increasingly complex sequence of colors and sounds. This project demonstrates core JavaScript concepts like event handling, DOM manipulation, and game logic implementation.",
    pModules: ["Simon Says Game"],
    projectLink: "https://simons-game-z6q2.onrender.com/",
    gitLink: "https://github.com/PSD24-art/Simons-game",
  },
];
