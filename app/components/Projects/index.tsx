'use client';

import { website } from "@/utils/data";
import Image from "next/image";
import "@/app/globals.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('#project_decoration', 
            { width: 0 },
            {
                width: "100%",
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#projects",
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            }
        );    
    })
    
    useEffect(() => {
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

        let observer: IntersectionObserver | null = null;

        const timer = setTimeout(() => {
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('in-view');
                        }
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                }
            );

            const projectElements = document.querySelectorAll('.project-list > div');
            projectElements.forEach((el) => observer?.observe(el));
        }, 100);

        return () => {
            clearTimeout(timer);
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div id='projects' className='my-10 min-h-screen flex flex-col justify-evenly px-4 md:px-0'>
            <div className="text-center mb-12 md:mb-3">
                <h2 className='inline text-3xl md:text-6xl text-center uppercase relative'>
                    Projects
                    <span id="project_decoration" className="h-[3px] w-full bg-black absolute top-21 left-0"></span>
                </h2>
            </div>

            <div className="lg:hidden project-list flex flex-col items-center w-full">
                {website.map((item, index) => (
                    <div key={index} className={`${item.name.toLowerCase().replace(/\s+/g, '')} my-6 text-center p-3 w-full max-w-md`}>
                        <div className='w-full my-4'>
                            <h2 className={`text-xl md:text-2xl font-bold mb-4`}>{item.name}</h2>
                            <div className={`my-4 text-sm`}>Tools used:
                                <div className="mx-2 flex flex-wrap justify-center gap-2">
                                    {item.tools.map((tool, i) => (
                                        <span key={i} className={`px-2 py-1 text-xs project__languages--${tool.toLowerCase()}`}>{tool}</span>
                                    ))}
                                </div>
                            </div>
                            <a
                                href={item.link}
                                target='_blank'
                                rel='noopener'
                                title={`Visit ${item.name}`}
                                className="block"
                            >
                                <Image
                                    src={item.image}
                                    alt={`thumbnail of the ${item.name}`}
                                    width={1000}
                                    height={300}
                                    className="h-auto w-full rounded-2xl"
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className='hidden lg:block my-3 text-center'>
                <div className='w-full my-4 flex justify-center flex-wrap gap-7'>
                    {website.map((item, index) => (
                        <div key={index} className="lg:w-[30%] my-5 flex flex-col h-full">
                            <h2 className={`text-2xl lg:text-3xl font-bold mb-4 h-20 flex items-center justify-center`}>
                                {item.name}
                            </h2>
                            
                            <div className={`w-3/4 my-6 mx-auto text-base min-h-32 flex flex-col justify-center`}>
                                <div>Tools used:</div>
                                <div className="mx-4 my-4 flex flex-wrap md:flex-row justify-center gap-3">
                                    {item.tools.map((tool, i) => (
                                        <span key={i} className={`px-3 py-1 project__languages--${tool.toLowerCase()}`}>{tool}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="relative flex-1 my-10">
                                <a
                                    href={item.link}
                                    target='_blank'
                                    rel='noopener'
                                    title={`Visit ${item.name}`}
                                    className="block w-full"
                                    onMouseEnter={() => setHoveredProject(index)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <Image 
                                        src={item.image} 
                                        alt={`thumbnail of the ${item.name}`} 
                                        width={1000} 
                                        height={1000} 
                                        className={`h-auto w-full rounded-2xl p-2 shadow-2xl transition-transform duration-300 hover:scale-105`}
                                    />
                                </a>
                                {hoveredProject === index && (
                                    <div className="absolute w-full mt-4 p-4 bg-white rounded-lg shadow-lg text-sm z-10">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;