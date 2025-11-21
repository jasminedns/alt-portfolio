'use client';

import { Squash as Hamburger } from 'hamburger-react';
import { useState, useEffect } from "react";

const Header = () => {
    const [isOpen, setOpen] = useState(false)

    const links = [
        {href: "#about", label: "About"},
        {href: "#projects", label: "Projects"},
        {href: "#contacts", label: "Contacts"}
    ];

    useEffect(() => {
        if (isOpen === true) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.backgroundColor = "#222222";
        } else {
            document.documentElement.style.overflow = "auto";
            document.body.style.backgroundColor = "#f8f8f8";
        }

    }, [isOpen]);

    return (
        <header className="m-4 uppercase">
            <div className='lg:hidden flex flex-row justify-between items-center'>
                <div className='relative z-90'>
                    <img src={`${isOpen ? "/logo-white.png" : "/logo.png"}`} alt="" className='w-auto h-15'/>
                </div>
                <div className={`relative z-80`}>
                    <div className={`${isOpen ? 'text-(--background-color)' : 'text-(--primary-text)'} relative z-99`}>
                        <Hamburger toggled={isOpen} toggle={setOpen} size={40}/>
                    </div>
                    <div className={`z-98 absolute -top-6 -right-4 w-screen h-screen bg-(--primary-text) text-(--background-color) transform transition-all duration-400 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-[150%]'}`}>
                        <ul className="flex flex-col justify-center h-[95%] items-center text-center">
                            {links.map((item, index) => (
                                <li key={index} className="list-none text-5xl my-12" onClick={() => setOpen(false)}>
                                    <a 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const section = document.querySelector(item.href);
                                            if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                            }
                                            setOpen(false);
                                        }} 
                                        className="inline-block font-semibold text-center no-underline"                                
                                    >
                                    {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex items-center '>
                <div>
                    <img src="/logo.png" alt="" className='w-auto h-15'/>
                </div>
                <div>
                    <ul className="flex justify-center items-center text-center gap-x-10">
                        {links.map((item, index) => (
                            <li key={index} className="relative group list-none text-xl my-5" onClick={() => setOpen(false)}>
                                <a 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const section = document.querySelector(item.href);
                                        if (section) {
                                        section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                        setOpen(false);
                                    }} 
                                    className="inline-block font-semibold text-center no-underline cursor-pointer"                                
                                >
                                {item.label}
                                </a>
                                <span className='absolute right-0 top-8 h-0.5 w-0 bg-(--primary-text) group-hover:w-full transition-all duration-300 ease-in-out'></span>
                            </li>
                        ))}
                    </ul>
                </div>                
            </div>
        </header>
    )
}

export default Header;