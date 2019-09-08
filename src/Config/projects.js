import adpLogo from '../Images/ADP.jpg'
import travisImg from '../Images/Travis.jpg'
import imagineCinemas from '../Images/ImagineCinemas.jpg'
import recipiaImg from '../Images/Recipia.jpg'
import { faJsSquare, faRaspberryPi, faReact, faPython, faAws } from '@fortawesome/free-brands-svg-icons'
import { faPencilAlt, faMicrochip, faHammer } from '@fortawesome/free-solid-svg-icons'

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
        image: adpLogo,
        color: '#ff6961',
        secondaryDescription: 'Personal Project',
        descriptions: [
            {
                projectDescription: 'A independently built smart mirror from scratch that displays magic mirror modules, including time, calendar, weather and Spotify Now Playing music',
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
                projectDescription: 'Something about helping Imagine Cinemas, creating apps yadda yadda',
                tools: [
                    {
                        name: 'UI / UX',
                        icon: faPencilAlt
                    },
                    {
                        name: 'Marketing',
                        icon: faMicrochip
                    },
                    {
                        name: 'Business',
                        icon: faJsSquare
                    },
                    {
                        name: 'Design',
                        icon: faHammer
                    },
                    {
                        name: 'Prototyping',
                        icon: faRaspberryPi
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
                projectDescription: 'Something about application to limit food waste',
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