import React, { useState, useRef, useEffect } from 'react';
import CarouselCard from './CarouselCard.jsx';

const Carousel = ({companies}) => {
  const maxScrollWidth = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const movement = 400;

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== 0 &&
      currentIndex + movement <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        movement * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = movement * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - movement
      : 0;
  }, []);

  return (
    <div className="carousel my-12">
      <div className="flex flex-wrap justify-around container mx-auto mb-[3.5rem] px-[1.5rem] lg:px-[3rem]">
        <div className="flex items-center w-12/12 xl:w-1/2">
          <h2 className="mr-[3rem] mb-0 text-[1.5rem] font-[500] leading-[125%]">
            Featured Fair Source Software
          </h2>
          <div className="hidden xl:flex relative gap-[1rem]">
              <button
                onClick={movePrev}
                className="w-[2rem] h-[2rem] flex items-center justify-center bg-taupe rounded-[1rem] text-center disabled:opacity-25 disabled:cursor-not-allowed transition-all ease-in-out duration-300"
                disabled={isDisabled('prev')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M8.5 1.5L2 8L8.5 14.5" stroke="#0D1B2A" stroke-width="2.3"/>
                </svg>
                <span className="sr-only">Prev</span>
              </button>
              <button
                onClick={moveNext}
                className="w-[2rem] h-[2rem] flex items-center justify-center bg-taupe rounded-[1rem] text-center disabled:opacity-25 disabled:cursor-not-allowed transition-all ease-in-out duration-300"
                disabled={isDisabled('next')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M1.5 1.5L8 8L1.5 14.5" stroke="#0D1B2A" stroke-width="2.3"/>
                </svg>
                <span className="sr-only">Next</span>
              </button>
          </div>
        </div>
        <div className="flex justify-end items-center w-12/12 xl:w-1/2">
          <a href="/companies" className="w-full xl:w-auto py-[0.9375rem] xl:mr-[3rem] px-[1.5rem] rounded-small text-[1.25rem] font-[600] leading-[125%] tracking-[-0.025rem] capitalize border-2 color-black border-[#0d1b2a33]">
            See all 
          </a>
        </div>
      </div>
      <div className="relative container-spill lg:pl-[3rem]">
        <div
          ref={carousel}
          className="carousel-container no-scrollbar overflow-auto touch-pan-x relative flex gap-[1rem] scroll-smooth snap-x snap-mandatory z-0"
        >
          {companies && companies.map((companyData, index) => {
            return (
              <CarouselCard company={companyData} key={index}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;