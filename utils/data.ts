export type websiteType = {
    name: string;
    tools: string[];
    image: string;
    link: string;
    description: string;
}

export const website = [

    {
        name: "Social Media Project",
        tools: ["Supabase", "Sonner", "Zod", "React", "Typescript", "Tailwind", "CSS", "HTML"],
        image: "/social-media.png",
        link: "https://social-media-app-rnxm.vercel.app/",
        description: "This project was a fun one to make. I'm actually still working on it to improve it since I've spent so much time on it. For the first time I've worked with Supabase's database which was pretty straightforward and not to complicated to use. The images are also stored in a bucket in there. My plan is to add nested comments and the possibility to upload more than one image in the near future."
    },
    {
        name: "Context",
        tools: ["React", "Typescript", "Tailwind", "CSS", "HTML"],
        image: "/context.png",
        link: "https://context-assignment-seven.vercel.app/",
        description: "In this project I'm using context for the first time and I'm calling an API that had all the data that I needed. The users are manually done. If you want to check it out enter 'Jasmine' without a password."

    },
    {
        name: "Steam Wrecked",
        tools: ["React", "Typescript", "Tailwind", "CSS", "HTML"],
        image: "/steam-wrecked.png",
        link: "https://steam-wrecked.vercel.app/",
        description: "During the making of this project I was acting as both developer and scrum master. It was a nice experience to do in a group and leaning more about how others write code and how developers work together"
    },
    {
        name: "Neila",
        tools: ["React", "Typescript", "Tailwind", "CSS", "HTML"],
        image: "/neila.png",
        link: "https://neila-three.vercel.app/",
        description: "During the making of this project I was acting as both developer and scrum master. It was a nice experience to do in a group and leaning more about how others write code and how developers work together"
    },
    {
        name: "Zoo Project",
        tools: ["React", "Javascript", "CSS", "HTML"],
        image: "/project-zoo.png",
        link: "https://react-zoo-lemon.vercel.app/",
        description: "This project was really fun to create. I started with a file containing animal descriptions and details, and my task was to build a zoo-style webpage that organized them into categories. The user can browse through the animals and view detailed information about any one they select."
    },
    {
        name: "Npm Project",
        tools: ["Node", "Express","EJS", "Javascript", "CSS", "HTML"],
        image: "/project-npm.png",
        link: "https://npm-multipage.vercel.app/",
        description: "This was a very interesting project to make and learn more about how Node, Express and EJS work. It's a very simple travel website that I plan to work on in the future."
    },
    {
        name: "React Project",
        tools: ["React", "Javascript", "CSS", "HTML"],
        image: "/project-react-spa.png",
        link: "https://react-spa-green.vercel.app/",
        description: "This was the first ever project using React.js. It doesn't call an API for the weather since we didn't know how to do it at the time. The job was to create a one-page website that'd work thanks to React. "
    },
    {
        name: "Game Project",
        tools: ["Javascript", "CSS", "HTML"],
        image: "/project-game.png",
        link: "https://responsive-web-game.vercel.app/",
        description: "This was one of the first projects I created. It’s a D&D-style game where a 1–20 dice roll generates a random outcome, and the result determines what happens next in the story."
    }
]