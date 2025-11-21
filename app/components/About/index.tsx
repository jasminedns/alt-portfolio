'use client'

import InfiniteScroll from "../InfiniteScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.title', 
            { x: 500 },
            { 
                x: 0,
                scrollTrigger: {
                    trigger: '.title',
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 1,
                },
                duration: 1
            }
        );    

    })

    return (
        <div id="about">
            <div className="m-5 flex flex-col lg:flex-row lg:min-h-[50vh] gap-5">
                <div className="w-full lg:w-[40%] my-5">
                    <h2 className="relative z-10 text-3xl lg:text-4xl my-5 title">About Me</h2>
                    <p className="text-(--secondary-text) text-sm lg:text-base text-center lg:text-left">
                        Hey there! I'm an Italian front-end developer with a passion for web development. For years, I worked as a waitress and in factories, 
                        but I never truly felt fulfilled. My curiosity about the digital world led me to take a small HTML and CSS course and that single step 
                        changed everything. I quickly fell in love with coding, and just a few months later, I made a bold decision: I left my job to fully 
                        embrace this new path.
                        Now, I'm dedicated to growing as a developer and constantly learning. In my free time, I enjoy reading, gaming and try new things 
                        to implement in my coding. I also love to travel, it's a passion in my whole family. With them I moved to Sweden in 2019 and before 
                        then I've lived in Italy and Brazil.
                    </p>
                </div>
                <div className="relative z-20 w-full md:w-[60%] lg:w-[20%] bg-white rounded-2xl md:mx-auto lg:mx-5 shadow-xl py-5 px-3 text-center flex flex-col">
                    <h2 className="font-bold text-4xl">What am I working on?</h2>
                    <p className="py-10">At the moment I'm working on my graduation project about the impact and use of AI in front-end development.</p>
                    <div className="mt-auto">
                        <img src="/thumbnail.png" alt="picture of Jasmine Danese" className="w-3/4 h-auto mx-auto"/>
                    </div>
                </div>
                <div className="w-full lg:w-[40%] my-5 flex items-start lg:items-end text-center lg:text-left">
                    <p className="text-(--secondary-text) text-sm lg:text-base">
                        I would say that my strongest skills are in the CSS department. I usually start with Figma templates and then try to make it
                        as similar as possible with different frameworks based on need. I've experience with normal CSS, Tailwind, SASS and MUI and 
                        I like to use them on rotation when I can. I've also experience with the frameworks so you can down below!
                    </p>
                </div>
            </div>
            <InfiniteScroll />
        </div>
    )
}

export default About;