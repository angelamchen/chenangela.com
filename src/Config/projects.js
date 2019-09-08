import travisImg from '../Images/Travis.jpg'
import imagineCinemas from '../Images/ImagineCinemas.jpg'
import recipiaImg from '../Images/Recipia.jpg'
import smartmirrorImg from '../Images/MagicMirror.jpg'
import { faJsSquare, faRaspberryPi, faReact, faPython, faAws } from '@fortawesome/free-brands-svg-icons'
import { faPencilAlt, faMicrochip, faHammer, faSearchDollar, faUserTie, faPalette } from '@fortawesome/free-solid-svg-icons'

export const PROJECTS = [
    {
        name: 'Travis - Insurance Chatbot',
        image: travisImg,
        color: '#8b76bc',
        secondaryDescription: 'Hack the 6ix Project',
        descriptions: [
            {
                projectDescription: 'Travis is a smart chatbot specialized to insure your personal items, wherever you travel. Before leaving for a trip, you can have a quick conversation with Travis about specific items you\'d like to insure and it\'ll give you an estimated price your items.',
                tools: [
                    {
                        name: 'React.js',
                        icon: faReact
                    },
                    {
                        name: 'faPython',
                        icon: faPython
                    },
                    {
                        name: 'Reckognition',
                        icon: faAws
                    },
                    {
                        name: 'Lex',
                        icon: faAws
                    },

                ]
            }
        ]
    },
    {
        name: 'Smart Mirror',
        image: smartmirrorImg,
        color: '#5c9dd6',
        secondaryDescription: 'Personal Project',
        descriptions: [
            {
                projectDescription: 'A independently built smart mirror from scratch that displays magic mirror modules, including time, calendar, weather and Spotify Now Playing music, personalized for my own liking!',
                tools: [
                    {
                        name: 'UI / UX',
                        icon: faPencilAlt
                    },
                    {
                        name: 'Hardware',
                        icon: faMicrochip
                    },
                    {
                        name: 'JavaScript',
                        icon: faJsSquare
                    },
                    {
                        name: 'Woodworking',
                        icon: faHammer
                    },
                    {
                        name: 'Raspberry Pi',
                        icon: faRaspberryPi
                    },

                ]
            }
        ]
    },
    {
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
    },
    {
        name: 'Recipia',
        image: recipiaImg,
        color: '#85bf73',
        secondaryDescription: 'SHAD UBC House Project',
        descriptions: [
            {
                projectDescription: 'Recipia is a mobile food tracking application that strives to mitigate food wastage. Application connects users to food delivery services and uses their API\'s to track when the food would expire based on delivery dates and machine learning models to recommend recipes on soon to be expired food.',
                tools: []
            },
            {
                projectDescription: 'Created a protoype for the application as well as a business report highlighting its\' features, impact, and analyzing the market for the product. Report won best business report on campus after concept was pitched to a panel of judges',
                tools: [
                    {
                        name: 'UI / UX',
                        icon: faPencilAlt
                    },
                    {
                        name: 'Hardware',
                        icon: faMicrochip
                    },
                    {
                        name: 'JavaScript',
                        icon: faJsSquare
                    },
                    {
                        name: 'Woodworking',
                        icon: faHammer
                    },
                    {
                        name: 'Raspberry Pi',
                        icon: faRaspberryPi
                    },
                ]
            },

        ]
    },
]