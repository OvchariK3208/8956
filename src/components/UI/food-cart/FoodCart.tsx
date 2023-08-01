import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

interface ICard {
	link: string;
  img: string;
  title: string;
}

const FoodCard: FC<ICard> = ({ link, img, title }) => {
	return (
		<Link to={link}>
      <div
      	style={{ backgroundImage: `url(${img})` }}
        className='group w-[600px] h-[600px] relative rounded-2xl bg-center bg-cover bg-gray-400 cursor-pointer'>
        <div 
        	className="flex flex-col items-center gap-10 absolute right-[50%] -translate-x-[-50%] translate-y-0 bottom-14">
        	<span
        		className="text-2xl font-semibold cursor-pointer">
        		{ title }
        	</span>
        	<span 
        		className="opacity-0 text-sm cursor-pointer ease-in-out duration-300 group-hover:opacity-100">
        		Смотреть <FontAwesomeIcon icon={faArrowRightLong} />
        	</span>
        </div>
      </div>
    </Link>
	)
}

export default FoodCard;
 
