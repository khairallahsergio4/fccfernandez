import { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import alemanes from "../../assets/images/alemanes.jpg";
import donJose from "../../assets/images/donJose.jpg";
import escuela2 from "../../assets/images/escuela2.jpg";
import jose from "../../assets/images/jose.jpg";
import tractor from "../../assets/images/tractor.jpg";
import mural from "../../assets/images/mural.jpg";
import promocion from "../../assets/images/promocion.jpg";
import equipo from "../../assets/images/equipo.jpg";
import grupo from "../../assets/images/grupo.jpg";


export default function SliderWelcome() {
  const slides = [
    {
      image: jose,
      title: "text",
      description: "texto",
    },
      {
      image: equipo,
      title: "text",
      description: "texto",
    },
      {
      image: escuela2,
      title: "text",
      description: "texto",
    },
      {
      image: alemanes,
      title: "text",
      description: "texto",
    },
      {
      image: grupo,
      title: "text",
      description: "texto",
    },
      {
      image: tractor,
      title: "text",
      description: "texto",
    },
    {
      image: mural,
      title: "text",
      description: "texto",
    },
    
      
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden p-1 shadow-xl">
      {/* Slides */}
      <div className="relative h-[250px] md:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              current === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            {/* Overlay
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-center text-center px-6">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h2>

              <p className="text-white text-lg md:text-xl max-w-2xl">
                {slide.description}
              </p>
            </div> */}
          </div>
        ))}
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-green-800 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-green-800 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? "bg-green-800 w-8"
                : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}