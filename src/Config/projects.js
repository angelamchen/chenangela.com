import adpLogo from '../Images/ADP.jpg'
import { faJsSquare, faRaspberryPi, faReact, faPython, faAws } from '@fortawesome/free-brands-svg-icons'
import { faPencilAlt, faMicrochip, faHammer } from '@fortawesome/free-solid-svg-icons'

export const PROJECTS = [
    {
        name: 'Travis - Insurance Chatbot',
        image: adpLogo,
        color: '#ff6961',
        secondaryDescription: 'Hack the 6ix Project',
        descriptions: [
            {
                projectDescription: 'Travis is a smart chatbot specialized to insure your personal items, wherever you go. The goal of Travis is that you don’t have to call anyone or worry about anything. Before leaving for a trip or going on a vacation, you can have a quick conversation with travis about the things you\'d like to insure and it\'ll give you an estimated price and a quote for your items.',
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
        image: adpLogo,
        color: '#ff6961',
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