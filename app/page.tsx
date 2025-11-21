'use client';

import { useEffect, useState } from "react";
import "./globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = intro ? "hidden" : "auto";
  }, [intro]);

  useEffect(() => {
    const duration = 1500;
    const target = 100;
    const intervalTime = duration / target;

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setCount(current);

      if (current >= target) {
        clearInterval(interval);
        setAnimateOut(true); 
        setTimeout(() => setIntro(false), 500);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {intro && 
        <div className={`grid grid-cols-3 bg-(--primary-text) text-(--background-color) text-2xl font-bold absolute z-99 min-h-screen min-w-screen right-0 top-0 transition-all duration-500 ease-in-out ${animateOut ? '-translate-y-[150%]' : 'translate-y-0'}`}>
          <div className='flex flex-col justify-between items-start p-4 '>
            <div className='counter-up-left rotate-270 mt-10 ml-20'>
              {count}
            </div>
            <div className='counter-down-left rotate-270 mb-20 ml-20'>
              {count}
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='counter-left'>
              {count}
            </div>
            <div className='counter-right'>
              {count}
            </div>
          </div>
          <div className='flex flex-col justify-between items-end p-4'>
            <div className='counter-up-right rotate-90 mt-10'>
              {count}
            </div>
            <div className='counter-down-right rotate-90 mb-20'>
              {count}
            </div>
          </div>
        </div>
      }
      <div className={`${intro ? "hidden" : "block"}`}>
        <Header /> 
        <div>
          <Hero />
          <About />
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  );
}
