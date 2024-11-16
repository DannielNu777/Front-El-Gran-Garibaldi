import React, { useState } from "react";
import Atras from "../assets/img/flecha-izquierdo.png";
import Despues from "../assets/img/flecha-derecho.png";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (!images || images.length === 0) {
    return <div className="no-images">No hay imágenes disponibles</div>;
  }

  return (
    <div className="slider-container">
      <div className="slider-content">
        <img
          src={images[currentIndex].url_foto}
          alt={`Imagen ${currentIndex + 1}`}
          className="slider-image"
        />

        <button
          onClick={goToPrevious}
          className="slider-button slider-button-prev"
        >
          <img src={Atras} alt="Previo" className="arrow-icon" />
        </button>

        <button onClick={goToNext} className="slider-button slider-button-next">
          <img src={Despues} alt="Siguiente" className="arrow-icon" />
        </button>
      </div>

      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`slider-dot ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
