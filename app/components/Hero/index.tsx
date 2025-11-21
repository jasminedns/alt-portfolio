'use client'

import { ArrowDown } from "lucide-react"
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useEffect } from "react";

const Hero = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrambleTextPlugin);

    gsap.to(".scramble-h2", {
      duration: 1.5, 
      scrambleText: {
        text: "HELLO", 
        chars: "XO", 
        revealDelay: 0.5, 
        speed: 0.5, 
        newClass: "scrambled-h2"
      }
    });

    gsap.to(".scramble-h1", {
      duration: 2, 
      scrambleText: {
        text: "Jasmine Danese - Front-end Developer", 
        chars: "XO", 
        revealDelay: 1.5, 
        speed: 1, 
        newClass: "scrambled-h1"
      }
    });

  })

    return (
        <div className="flex h-[88vh] md:h-[92vh] lg:h-[88vh] mt-3 relative">
            <div className="flex flex-col w-full justify-center items-center">
              <div className="text-center">
                <h2 className="text-6xl md:text-8xl lg:text-[200px] scramble-h2"></h2>
                <h1 className="font-bold text-sm md:text-base px-4 md:px-0 scramble-h1"></h1>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 ml-4 mb-4 md:ml-10 md:mb-6">
              <div className="flex items-center capitalize text-sm md:text-base">
                <p>Scroll down</p>
                <div className="mx-3 animate-bounce">
                  <ArrowDown size={16}/>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Hero;