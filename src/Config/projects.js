import travisImg from "../Images/Travis.jpg";
import recipiaImg from "../Images/Recipia.jpg";
import snapmealImg from "../Images/Snapmeal.jpg";
import smartmirrorImg from "../Images/MagicMirror.jpg";
import {
  faJsSquare,
  faRaspberryPi,
  faReact,
  faPython,
  faAws,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPencilAlt,
  faMicrochip,
  faHammer,
  faLeaf,
  faRobot,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

export const PROJECTS = [
  {
    name: "SnapMeal",
    image: snapmealImg,
    color: "#bf7394",
    link: "https://github.com/angelamchen/SnapMeal",
    secondaryDescription: "Personal Project",
    descriptions: [
      {
        projectDescription:
          "Not sure what to eat? SnapMeal will help you determine recipes you can make based off an image of your fridge. With over 10,000 unique recipes, SnapMeal uses computer vision to recognize the groceries you currently own to find the best match you can currently make. Inspired by my real-life problem since I never know what to make for dinner 😛",
        tools: [
          {
            name: "Spring Boot",
            icon: faLeaf,
          },
          {
            name: "Java",
            icon: faJava,
          },
          {
            name: "MongoDB",
            icon: faDatabase,
          },
          {
            name: "React.js",
            icon: faReact,
          },
          {
            name: "Computer Vision",
            icon: faRobot,
          },
        ],
      },
    ],
  },
  {
    name: "Travis - Insurance Chatbot",
    image: travisImg,
    color: "#8b76bc",
    link: "https://github.com/cnnradams/hack-the-6ix-specialty-insurance",
    secondaryDescription: "Hack the 6ix Project",
    descriptions: [
      {
        projectDescription:
          "Travis is a smart chatbot specialized to insure your personal items, wherever you travel. Before leaving for a trip, you can have a quick conversation with Travis about specific items you'd like to insure and it'll give you an estimated price your items.",
        tools: [
          {
            name: "React.js",
            icon: faReact,
          },
          {
            name: "faPython",
            icon: faPython,
          },
          {
            name: "Reckognition",
            icon: faAws,
          },
          {
            name: "Lex",
            icon: faAws,
          },
        ],
      },
    ],
  },
  {
    name: "Smart Mirror",
    image: smartmirrorImg,
    color: "#5c9dd6",
    secondaryDescription: "Personal Project",
    descriptions: [
      {
        projectDescription:
          "A independently built smart mirror from scratch that displays magic mirror modules, including time, calendar, weather and Spotify Now Playing music, personalized for my own liking!",
        tools: [
          {
            name: "UI / UX",
            icon: faPencilAlt,
          },
          {
            name: "Hardware",
            icon: faMicrochip,
          },
          {
            name: "JavaScript",
            icon: faJsSquare,
          },
          {
            name: "Woodworking",
            icon: faHammer,
          },
          {
            name: "Raspberry Pi",
            icon: faRaspberryPi,
          },
        ],
      },
    ],
  },
  /* {
        name: 'Imagine Cinema Promotion Plan',
        image: imagineCinemas,
        color: '#bf7394',
        secondaryDescription: 'DECA Sports and Entertainement Promotional Plan',
        descriptions: [
            {
                projectDescription: 'Created the DREAM initiative (Design, Responsibility, Engagement, Accessibility, Modernization) promotional plan for Imagine Cinemas, based on research collected from analyze current perceptions to improve the company\'s reputation. Wrote a 30 page business report, designed a corresponding presentation and prototyped a mobile application supplement. Report won Provicial Champion and qualified the international conference (ICDC)',
                tools: [
                    {
                        name: 'UI / UX',
                        icon: faPencilAlt
                    },
                    {
                        name: 'Marketing',
                        icon: faSearchDollar
                    },
                    {
                        name: 'Business',
                        icon: faUserTie
                    },
                    {
                        name: 'Prototyping',
                        icon: faPalette
                    },

                ]
            },

        ]
    }, */
  {
    name: "Recipia",
    image: recipiaImg,
    color: "#85bf73",
    link:
      "https://drive.google.com/file/d/0B5D60OHJFWYXQ3RRQ1NVR0NmR0k/view?usp=sharing",
    secondaryDescription: "SHAD UBC House Project",
    descriptions: [
      {
        projectDescription:
          "Recipia is a mobile food tracking application that strives to mitigate food wastage. Application connects users to food delivery services and uses their API's to track when the food would expire based on delivery dates and machine learning models to recommend recipes on soon to be expired food.",
        tools: [],
      },
      {
        projectDescription:
          "Created a protoype for the application as well as a business report highlighting its' features, impact, and analyzing the market for the product. Report won best business report on campus after concept was pitched to a panel of judges",
        tools: [
          {
            name: "UI / UX",
            icon: faPencilAlt,
          },
          {
            name: "Hardware",
            icon: faMicrochip,
          },
          {
            name: "JavaScript",
            icon: faJsSquare,
          },
          {
            name: "Woodworking",
            icon: faHammer,
          },
          {
            name: "Raspberry Pi",
            icon: faRaspberryPi,
          },
        ],
      },
    ],
  },
];
