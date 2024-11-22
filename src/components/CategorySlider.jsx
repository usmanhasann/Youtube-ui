import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategorySlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);

  const categories = [
    "All",
    "Live",
    "News",
    "Music",
    "Podcasts",
    "JavaScript",
    "Live television",
    "Gaming",
    "Elon Musk",
    "Satire",
    "Mixes",
    "Courts",
    "Courts",
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 200;
      const newPosition =
        direction === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;

      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="relative   justify-end flex bg-black text-white">
      <div className="flex items-center">
        <button
          onClick={() => scroll("left")}
          className="p-1 hover:bg-gray-800 rounded-full"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide space-x-2 px-4 py-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className="whitespace-nowrap px-3 py-1 rounded-full hover:bg-gray-800 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="p-1 hover:bg-gray-800 rounded-full"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CategorySlider;
