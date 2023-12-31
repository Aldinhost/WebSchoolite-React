import React, { useState, useEffect } from "react";
import { SlidersData } from "./carouselData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = SlidersData.length;



  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SlidersData) || SlidersData.length <= 0) {
    return null;
  }

  return (
    <div className="sectionSlider__background">
      <h2 className="sectionSlider__background-title"></h2>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SlidersData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="carrusel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ImageSlider;
