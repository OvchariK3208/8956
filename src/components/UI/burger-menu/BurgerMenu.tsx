import React, { ReactNode } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface BurgerMenuType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function BurgerMenu({ children, isOpen, toggle }: BurgerMenuType) {
  return (
    <>
      {isOpen && (
        <div 
        	className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end items-center"
        	onClick={toggle}>
          <div 
          	className="relative p-12 bg-white w-1/3 h-full max-w-screen-lg"
          	onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col justify-between h-full">
            	<button
				        className="absolute top-3 right-4 cursor-pointer"
				        onClick={toggle}>
								<FontAwesomeIcon className="text-2xl" icon={faXmark} />
			        </button>
          		<div className="overflow-auto">
          			KUSHAMBALA
          			KUSHAMBALA
          		</div>
          		<div
          			className="text-sm font-normal">
          			<span>© 2023 [8956 DELI]</span>
        				<br />
        				Телефон кухни: <a 
        					className="cursor-pointer"
        					href="tel:+7(911) 232-39-14">
        					+7(911) 232-39-14
        				</a>
          		</div>
          	</div>
          </div>
        </div>
      )}
    </>
  );
}
