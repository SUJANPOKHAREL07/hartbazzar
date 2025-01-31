import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  // Automatically transition slides every 2 seconds if not hovered
  useEffect(() => {
    if (isHovered) return; // Don't change images if hovered

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length); // Infinite loop through slides
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isHovered, slides.length]);

  // Manual slide change functions
  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); // Loop to the last slide if at the start
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length); // Loop to the first slide if at the end
  };

  const goToSlide = (index) => {
    setCurrent(index); // Jump to the clicked slide
  };

  return (
    <div
      className="carousel overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true when mouse enters
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false when mouse leaves
    >
      <div
        className="flex  w-auto justify-between transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`, // Move slides
        }}
      >
        {slides.map((s, index) => (
          <img
            key={index}
            src={s}
            className="w-full  "
            alt={`Slide ${index}`}
          />
        ))}
      </div>

      <div className="absolute top-0 w-full h-full justify-between flex text-[#5D8736] text-xl px-1">
        <button onClick={previousSlide}>
          <IoIosArrowBack />
        </button>
        <button onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)} // Click to jump to a specific slide
            className={`w-3 h-1 rounded-full ${
              current === index ? "bg-[#5D8736] " : "bg-[#F4FFC3]"
            } cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
