import React, { ReactNode, useState, useEffect } from "react";
import ShoppingCardItem from './../shopping-card-item/ShoppingCardItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  title: string;
}

export default function Favorites({ isOpen, toggle, title }: ModalType) {
	const [favorites, setFavorites] = useState([]);
	
  return (
    <>
      {isOpen && (
        <div 
        	className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center"
        	onClick={toggle}>
          <div 
          	className="relative p-8 rounded-sm bg-white w-full h-full max-w-screen-lg"
          	onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col h-full">
    					<div className="pb-4">
    						<div className="text-2xl leading-tight font-semibold">
    							{ title }
    						</div>
    						<button
					        className="absolute top-3 right-4 cursor-pointer"
					        onClick={toggle}>
									<FontAwesomeIcon className="text-2xl" icon={faXmark} />
				        </button>
    					</div>
          		<div className="flex flex-col py-3 overflow-auto">
          			{favorites.length === 0 && 
          			 <div className="text-base font-semibold">
          					Нет избранных товаров. Добавьте в избранные хотя бы один товар
          			 </div>}
          			{favorites.length > 0 && 
          			 favorites.map(({ id, title, price, img, spicy }) => { 
          				return (
          					<ShoppingCardItem
          						key={ id }
											id={ id }
											title={ title }
											price={ price }
											img={ img }
											spicy={ spicy } />
          				)})}
        			</div>
          	</div>
          </div>
        </div>
      )}
    </>
  );
}
