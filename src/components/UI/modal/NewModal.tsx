import React, { ReactNode, useState, useEffect } from "react";
import ShoppingCardItem from './../shopping-card-item/ShoppingCardItem';
import DeliveryConditions from './../delivery-conditions/DeliveryConditions';
import DeliveryForm from './../delivery-form/DeliveryForm';
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

export default function Modal({ isOpen, toggle, title }: ModalType) {
	const { shoppings, loading, error } = useTypedSelector(state => state.shopping)
	const { fetchShoppings } = useActions()
	const [totalPrice, setTotalPrice] = useState(0);
	
	useEffect(() => {
  	fetchShoppings()
  }, [])
  
  useEffect(() => {
  	setTotalPrice(shoppings.reduce((sum, shopping) => sum + shopping.price, 0 ))
  }, [shoppings])
  
  console.log("shoppings", shoppings)

	// mt-32
  return (
    <>
      {isOpen && (
        <div 
        	className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center"
        	onClick={toggle}>
          <div 
          	className="relative p-10 rounded-sm bg-white w-3/5 h-full max-w-screen-lg"
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
          		<div className="flex flex-col py-3 pb-60 overflow-y-auto overflow-x-hidden">
          			{shoppings.length === 0 && 
          			 <div className="text-base font-semibold">
          					Корзина пуста. Добавьте в корзину хотя бы один товар
          			 </div>}
          			{shoppings.length > 0 && 
          			 <div className="border-y-[0.5px] border-white">
	          			 {shoppings.map(({ id, title, price, img, spicy }) => { 
	          				return (
	          					<ShoppingCardItem
	          						key={ id }
												id={ id }
												title={ title }
												price={ price }
												img={ img }
												spicy={ spicy } />
	          				)})}
	          		 </div>}
        				{shoppings.length > 0 &&
		        			<div className="flex flex-col items-end py-5">
		        				{totalPrice < 500 &&
		        				 <div className="text-sm font-normal text-[#808080]">Минимальный заказ: 500р.</div>}
		        				<div className="text-base font-semibold leading-6">Сумма: { totalPrice }р.</div>
	        				</div>}
	        			<DeliveryConditions />
	        			<DeliveryForm />
        			</div>
          	</div>
          </div>
        </div>
      )}
    </>
  );
}
