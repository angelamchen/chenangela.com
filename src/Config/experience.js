import adpLogo from '../Images/ADP.jpg'
import rbcLogo from '../Images/RBC.jpg'
import { faJava, faJsSquare, faHtml5, faCss3Alt, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faLeaf, faDatabase, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import C from '../Images/Logos/C.png'
import css from '../Images/Logos/css.png'
import html from '../Images/Logos/html.png'
import java from '../Images/Logos/java.png'
import javascript from '../Images/Logos/javascript.png'
import python from '../Images/Logos/python.png'
import sql from '../Images/Logos/sql.png'
import bootstrap from '../Images/Logos/bootstrap.png'
import react from '../Images/Logos/react.png'
import node from '../Images/Logos/node.png'
import springboot from '../Images/Logos/springboot.png'
import flask from '../Images/Logos/flask.png'
import electron from '../Images/Logos/electron.png'


export const JOB_EXPERIENCE = [
    {
        name: 'ADP, LLC',
        image: adpLogo,
        color: '#ff6961',
        secondaryDescription: 'Software Developer Intern',
        descriptions: [
            {
                projectDescription: 'something about springboot',
                tools: [
                    {
                        name: 'Java',
                        icon: faJava
                    },
                    {
                        name: 'Spring Boot',
                        icon: faLeaf
                    },
                    {
                        name: 'SQL',
                        icon: faDatabase
                    },
                    {
                        name: 'TDD',
                        icon: faLaptopCode
                    },

                ]
            },
            {
                projectDescription: 'something about react and dashboards',
                tools: [
                    {
                        name: 'React.js',
                        icon: faReact
                    },
                    {
                        name: 'Node.js',
                        icon: faNodeJs
                    },
                    {
                        name: 'JavaScript',
                        icon: faJsSquare
                    },
                    {
                        name: 'HTML',
                        icon: faHtml5
                    },
                    {
                        name: 'CSS',
                        icon: faCss3Alt
                    },
                ]
            },
        ]
    },
    {
        name: 'Royal Bank of Canada',
        image: rbcLogo,
        color: '#aec6cf',
        secondaryDescription: 'Innovation Analyst',
        descriptions: [
            {
                projectDescription: 'something something agile',
                tools: [
                    {
                        name: 'Agile',
                        icon: faReact
                    },
                    {
                        name: 'Product Design',
                        icon: faReact
                    },
                    {
                        name: 'Presentation',
                        icon: faReact
                    },
                ]
            },
            {
                projectDescription: 'something something websites',
                tools: [
                    {
                        name: 'HTML',
                        icon: faReact
                    },
                    {
                        name: 'CSS',
                        icon: faReact
                    },
                    {
                        name: 'Bootstrap',
                        icon: faReact
                    },
                    {
                        name: 'UI/UX',
                        icon: faReact
                    },
                ]
            },
        ]
    },
    {
        name: 'SHAD Canada',
        image: rbcLogo,
        color: '#7fb5b5',
        secondaryDescription: 'University of British Columbia',
        descriptions: [
            {
                projectDescription: 'something something STEM',
                tools: [
                    {
                        name: 'UI/UX',
                        icon: faReact
                    },
                ]
            },
        ]
    },
    {
        name: 'DECA',
        image: rbcLogo,
        color: '#779ecb',
        secondaryDescription: 'Competitor, International Conferience Qualifier',
        descriptions: [
            {
                projectDescription: 'something',
                tools: []
            },
        ]
    }

]

export const SKILLS_LANGUAGES = [
    {
        name: 'Java',
        icon: java
    },
    {
        name: 'JavaScript',
        icon: javascript
    },
    {
        name: 'C',
        icon: C
    },
    {
        name: 'SQL',
        icon: sql
    },
    {
        name: 'Python',
        icon: python
    },
    {
        name: 'HTML',
        icon: html
    },
    {
        name: 'CSS',
        icon: css
    },

]

export const SKILLS_TECHNOLOGIES = [
    {
        name: 'React.js',
        icon: react
    },
    {
        name: 'Node.js',
        icon: node
    },
    {
        name: 'Spring Boot',
        icon: springboot
    },
    {
        name: 'Bootstrap',
        icon: bootstrap
    },
    {
        name: 'Electron',
        icon: electron
    },
    {
        name: 'Flask',
        icon: flask
    },
]