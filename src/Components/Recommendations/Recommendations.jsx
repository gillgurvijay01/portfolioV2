import React, { useState, useRef, useEffect } from 'react';
import css from './recommendations.module.css';

const Recommendations = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const sliderRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  const recommendations = [
    {
      name: "Dr K Erb",
      designation: "Professor",
      organization: "Concordia University-Wisconsin",
      note: "One of my former students.. One of the best workers in any of my classes. He pays great attention to detail and is observant with assignment directions and following them. Just as important, he is a quality person. He is easy to talk with and always willing to share his ideas. I would highly recommend him for any job he would pursue!"
    },
    {
      name: "O P Tyagi",
      designation: "Teacher",
      organization: "Delhi Public School, Vidyut Nagar",
      note: `Gurvijay is an honest, sincere and soft‑spoken individual with a strong dedication to programming. He takes initiative, demonstrates excellent problem‑solving skills, and communicates effectively with both seniors and peers. He will be a valuable asset to any organization.`
    },
    {
      name: "Dr A K Lamba",
      designation: "Head of Department",
      organization: "CGC Jhanjeri",
      note: `I have taught him in the 2nd year of his Degree. He was a very good student due to his discipline and dedication towards his studies. He always came forward to discuss the issues and also how to solve them. A hard working personality too.`
    },
    {
      name: "Prof G Locklair",
      designation: "Professor",
      organization: "Concordia University Wisconsin",
      note: `Gurvijay Singh Gill was a dedicated and high-performing graduate student in my class at Concordia University Wisconsin. He consistently demonstrated strong academic abilities and a willingness to support others, including assisting undergraduates in learning Virtual Reality. His work ethic and collaborative spirit make him a valuable contributor to any team.`
    }
  ];

  useEffect(() => {
    startAutoScroll();
    return () => {
      stopAutoScroll();
    };
  }, []);

  const startAutoScroll = () => {
    if (autoScrollIntervalRef.current) return;
    
    setIsAutoScrolling(true);
    autoScrollIntervalRef.current = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1;
        
        // Reset to beginning when we reach the end
        const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft >= maxScroll - 1) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 20);
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
      setIsAutoScrolling(false);
    }
  };

  const handleMouseDown = (e) => {
    stopAutoScroll();
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (!isDragging) {
      startAutoScroll();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    stopAutoScroll();
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    startAutoScroll();
  };

  const handleMouseEnter = () => {
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      startAutoScroll();
    }
  };

  const scroll = (direction) => {
    stopAutoScroll();
    const scrollAmount = 420; // Card width + gap
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
    
    // Resume auto-scroll after manual scroll
    setTimeout(() => {
      if (!isDragging) {
        startAutoScroll();
      }
    }, 1000);
  };

  return (
    <div className={css.recommendationsSection}>
      <h2 className={css.heading}>Recommendations</h2>
      <div className={css.marqueeContainer}>
        <button 
          className={`${css.navArrow} ${css.navArrowLeft}`}
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          ←
        </button>
        <div 
          ref={sliderRef}
          className={css.marqueeContent}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {recommendations.map((rec, index) => (
            <div key={index} className={css.recommendationCard}>
              <div className={css.recommendationHeader}>
                <h3 className={css.name}>{rec.name}</h3>
                <p className={css.designation}>{rec.designation}</p>
                <p className={css.organization}>{rec.organization}</p>
              </div>
              <p className={css.note}>{rec.note}</p>
            </div>
          ))}
          {/* Duplicate cards for seamless scrolling */}
          {recommendations.map((rec, index) => (
            <div key={`duplicate-${index}`} className={css.recommendationCard}>
              <div className={css.recommendationHeader}>
                <h3 className={css.name}>{rec.name}</h3>
                <p className={css.designation}>{rec.designation}</p>
                <p className={css.organization}>{rec.organization}</p>
              </div>
              <p className={css.note}>{rec.note}</p>
            </div>
          ))}
        </div>
        <button 
          className={`${css.navArrow} ${css.navArrowRight}`}
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Recommendations; 