import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './HereBanner.css';

const promotions = [
  {
    id: 1,
    title: "Summer Sale",
    subtitle: "Up to 70% Off",
    description: "Get amazing deals on summer collection",
    buttonText: "Shop Now",
    bgColor: "#1877f2", // Facebook blue
    image: "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?auto=format&fit=crop&w=1200&h=400"
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Fresh Collection 2025",
    description: "Discover the latest trends in fashion",
    buttonText: "Explore",
    bgColor: "#42b72a", // Facebook green
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&h=400"
  },
  {
    id: 3,
    title: "Special Offer",
    subtitle: "Free Shipping",
    description: "On orders over $50",
    buttonText: "Learn More",
    bgColor: "#f02849", // Facebook red
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&h=400"
  }
];

const HereBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % promotions.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotions.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="here-banner" 
         onMouseEnter={() => setIsAutoPlaying(false)}
         onMouseLeave={() => setIsAutoPlaying(true)}>
      <div className="banner-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {promotions.map((promo) => (
          <div 
            key={promo.id} 
            className="banner-slide"
            style={{ 
              backgroundColor: promo.bgColor,
              backgroundImage: `linear-gradient(45deg, ${promo.bgColor}dd, ${promo.bgColor}99), url('${promo.image}')`
            }}
          >
            <div className="banner-content">
              <h1>{promo.title}</h1>
              <h2>{promo.subtitle}</h2>
              <p>{promo.description}</p>
              <button className="banner-button">{promo.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      <div className="slider-dots">
        {promotions.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HereBanner;
