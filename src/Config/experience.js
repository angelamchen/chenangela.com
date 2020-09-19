import adpLogo from "../Images/ADP.jpg";
import rbcLogo from "../Images/RBC.jpg";
import decaLogo from "../Images/DECA.jpg";
import shadLogo from "../Images/SHAD.jpg";
import ynaLogo from "../Images/YNA.jpg";
import shopLogo from "../Images/Shopify.jpg";
import {
  faJava,
  faGoogle,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLeaf,
  faDatabase,
  faCloud,
  faMicrochip,
  faLaptopCode,
  faPencilRuler,
  faSync,
  faPalette,
  faFilePowerpoint,
  faUsers,
  faUser,
  faUserPlus,
  faBrain,
  faUserTie,
  faFilm,
  faProjectDiagram,
  faComments,
  faFileAlt,
  faSitemap,
  faHandsHelping,
  faSearchDollar,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import C from "../Images/Logos/C.png";
import css from "../Images/Logos/css.png";
import html from "../Images/Logos/html.png";
import java from "../Images/Logos/java.png";
import javascript from "../Images/Logos/javascript.png";
import python from "../Images/Logos/python.png";
import sql from "../Images/Logos/sql.png";
import bootstrap from "../Images/Logos/bootstrap.png";
import react from "../Images/Logos/react.png";
import node from "../Images/Logos/node.png";
import springboot from "../Images/Logos/springboot.png";
import flask from "../Images/Logos/flask.png";
import ruby from "../Images/Logos/ruby.png";
import rails from "../Images/Logos/rails.png";

export const JOB_EXPERIENCE = [
  {
    name: "Shopify",
    image: shopLogo,
    color: "#799c54",
    secondaryDescription:
      "Production Engineer Intern / Backend Developer Intern",
    descriptions: [
      {
        projectDescription:
          "Production Engineer: Using Ruby to create tooling around Kubernetes-related problems, including creating, destroying, upgrading, and monitoring Shopify clusters",
        tools: [
          {
            name: "Ruby",
            icon: faGem,
          },
          {
            name: "Google Cloud Platform",
            icon: faGoogle,
          },
          {
            name: "Kubernetes",
            icon: faCloud,
          },
        ],
      },
      {
        projectDescription:
          "Backend Developer: Developed tools to optimize the International team's translation workflow using Ruby on Rails, creating a pipeline for developers to automatically send, create, and monitor translation pull requests for Shopify's repositories and core product.",
        tools: [
          {
            name: "Ruby",
            icon: faGem,
          },
          {
            name: "Rails",
            icon: faMicrochip,
          },
          {
            name: "SQL",
            icon: faDatabase,
          },
        ],
      },
    ],
  },
  {
    name: "ADP, LLC",
    image: adpLogo,
    color: "#db5757",
    secondaryDescription: "Software Developer Intern",
    descriptions: [
      {
        projectDescription:
          "Implemented test-driven development methodology to create services and API's based on requirements collected from communicating with business to accelerate the migration of 10,000 of clients from legacy products to the company's newer product",
        tools: [
          {
            name: "Java",
            icon: faJava,
          },
          {
            name: "Spring Boot",
            icon: faLeaf,
          },
          {
            name: "SQL",
            icon: faDatabase,
          },
          {
            name: "TDD",
            icon: faLaptopCode,
          },
        ],
      },
      {
        projectDescription:
          "Designed and developed a dashboard solution for the team's adminon tool homepage that monitors and graphs the health of several production servers",
        tools: [
          {
            name: "React.js",
            icon: faReact,
          },
          {
            name: "Node.js",
            icon: faNodeJs,
          },
          {
            name: "JavaScript",
            icon: faJsSquare,
          },
          {
            name: "HTML",
            icon: faHtml5,
          },
          {
            name: "CSS",
            icon: faCss3Alt,
          },
          {
            name: "UI / UX",
            icon: faPencilRuler,
          },
        ],
      },
    ],
  },
  {
    name: "Royal Bank of Canada",
    image: rbcLogo,
    color: "#80abb3",
    secondaryDescription: "Innovation Developer",
    descriptions: [
      {
        projectDescription:
          "Worked alongside with 15 other amazing highschool students to use agile methodology and design thinking to create and pitch 4 biweekly innovation projects to solve problems and initiate change in the organization.",
        tools: [
          {
            name: "Agile",
            icon: faSync,
          },
          {
            name: "Product Design",
            icon: faPalette,
          },
          {
            name: "Presentation",
            icon: faFilePowerpoint,
          },
        ],
      },
      {
        projectDescription:
          "Projects: creating responsive websites for RBC Learn and Recruitment department, developing an android application named Craving Coach, to help university students control their food spending habits.",
        tools: [
          {
            name: "UI/UX",
            icon: faPencilRuler,
          },
          {
            name: "HTML",
            icon: faHtml5,
          },
          {
            name: "CSS",
            icon: faCss3Alt,
          },
          {
            name: "Bootstrap",
            icon: faBootstrap,
          },
        ],
      },
    ],
  },
  {
    name: "SHAD Canada",
    image: shadLogo,
    color: "#7ab87a",
    secondaryDescription: "University of British Columbia",
    descriptions: [
      {
        projectDescription:
          "Spent a month at Canada's premier STEAM (Science, Technology, Entrepreneurship, Arts, and Math) learning through workshops, building projects, attending team building events, climbing mountains in British Columbia, and networking with amazing people.",
        tools: [
          {
            name: "UI/UX",
            icon: faPencilRuler,
          },
          {
            name: "Teamwork",
            icon: faUsers,
          },
          {
            name: "Leadership",
            icon: faUser,
          },
          {
            name: "Networking",
            icon: faUserPlus,
          },
        ],
      },
      {
        projectDescription:
          "Projects: Ideated, prototyped, and then presented a month long entrepreneurship project that strived to minimize food wastage. Created a recap video that summarized the great memories of the month",
        tools: [
          {
            name: "Critical Thinking",
            icon: faBrain,
          },
          {
            name: "Professionalism",
            icon: faUserTie,
          },
          {
            name: "Video Editing",
            icon: faFilm,
          },
        ],
      },
    ],
  },
  {
    name: "DECA",
    image: decaLogo,
    color: "#f5a856",
    secondaryDescription: "Competitor, International Conferience Qualifier",
    descriptions: [
      {
        projectDescription:
          "Wrote reports that analyzed the markets of specific business and ideated business plans based on research collected",
        tools: [
          {
            name: "Strategic Planning",
            icon: faProjectDiagram,
          },
          {
            name: "Written Communication Skills",
            icon: faComments,
          },
        ],
      },
      {
        projectDescription:
          "Competeted in case competitions in relation to Hotel and Lodging Management",
        tools: [
          {
            name: "Public Speaking",
            icon: faFileAlt,
          },
          {
            name: "Professionalism",
            icon: faUserTie,
          },
          {
            name: "Marketing",
            icon: faSearchDollar,
          },
        ],
      },
    ],
  },
  {
    name: "Youth Nation Alliance",
    image: ynaLogo,
    color: "#8b76bc",
    secondaryDescription: "Director of Programming",
    descriptions: [
      {
        projectDescription:
          "A student run non-profit organization that strives to find volunteering opportunities for youth that not only allowing them to complete their required volunteer hours, but also gain experiences they are passionate for.",
        tools: [
          {
            name: "Organization",
            icon: faSitemap,
          },
          {
            name: "Teamwork",
            icon: faUsers,
          },
        ],
      },
      {
        projectDescription:
          "Volunteered and helped organized several events, including Scotiabank Waterfront Marathon, Oak Ridges Terry Fox Run, and Richmond Hill Winter Carnival",
        tools: [
          {
            name: "Leadership",
            icon: faUser,
          },
          {
            name: "Volunteering",
            icon: faHandsHelping,
          },
        ],
      },
    ],
  },
];

export const SKILLS_LANGUAGES = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: C,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
];

export const SKILLS_TECHNOLOGIES = [
  {
    name: "React.js",
    icon: react,
  },
  {
    name: "Ruby on Rails",
    icon: rails,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Node.js",
    icon: node,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];
