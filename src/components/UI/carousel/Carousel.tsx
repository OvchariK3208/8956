import React, { FC, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
//import { IBanner } from '../../../types/banner';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

export default function Carousel() {
	const { banners, loading, error } = useTypedSelector(state => state.banner)
	const { fetchBanners } = useActions()
	
	useEffect(() => {
  	fetchBanners()
  }, [])
  
	console.log(banners)
	
	const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? banners.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === banners.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  
  const url = banners.length > 0 ? banners[currentIndex].url : ""
  
  if (loading) {
      return <h3>Идет загрузка...</h3>
  }
  if (error) {
      return <h3>{error}</h3>
  }

 
  return (
		<div className='max-w-5xl h-80 w-full m-auto px-4 relative group'>
			<Link to="">
				<div
	      	style={{ backgroundImage: `url(${url})` }}
	      	className='w-full h-full rounded-sm bg-center bg-cover duration-500' />
      </Link>
      {/* Left Arrow */}
      <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-3 bg-black/20 text-white cursor-pointer'>
        <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-3 bg-black/20 text-white cursor-pointer'>
        <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} /> 
      </div>
      {/* 
      <div className='flex top-4 justify-center py-2'>
        {banners.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'>
            <FontAwesomeIcon icon={faCircle} />
          </div>
        ))}
      </div>
      */}
    </div>
	)
}