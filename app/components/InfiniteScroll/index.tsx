const InfiniteScroll = () => {
    const technologiesRow1 = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS"
    ];

    const technologiesRow2 = [
        "SASS",
        "Git",
        "MUI",
        "Jest",
        "Express.js",
        "Node.js",
        "C#"
    ];

    return (
        <div className="w-full overflow-hidden bg-linear-to-r from-gray-100 to-gray-200 py-6 md:py-8 mt-6 md:mt-10">
            {/* First Row - Scrolling Left */}
            <div className="flex animate-scroll-seamless mb-4 md:mb-6">
                {/* Render multiple sets for seamless infinite scroll */}
                {[...Array(3)].map((_, setIndex) => (
                    technologiesRow1.map((tech, index) => (
                        <div
                            key={`tech-row1-${setIndex}-${index}`}
                            className="flex-shrink-0 mx-3 md:mx-8 px-3 md:px-6 py-2 md:py-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <span className="text-sm md:text-2xl font-bold text-gray-800 whitespace-nowrap">
                                {tech}
                            </span>
                        </div>
                    ))
                ))}
            </div>

            {/* Second Row - Scrolling Right */}
            <div className="flex animate-scroll-seamless-reverse">
                {/* Render multiple sets for seamless infinite scroll */}
                {[...Array(3)].map((_, setIndex) => (
                    technologiesRow2.map((tech, index) => (
                        <div
                            key={`tech-row2-${setIndex}-${index}`}
                            className="flex-shrink-0 mx-3 md:mx-8 px-3 md:px-6 py-2 md:py-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <span className="text-sm md:text-2xl font-bold text-gray-800 whitespace-nowrap">
                                {tech}
                            </span>
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
};

export default InfiniteScroll;
