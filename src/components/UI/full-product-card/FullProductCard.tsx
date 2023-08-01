import React, { FC, ReactNode, ChangeEvent, useState, useEffect } from 'react';
import Button from './../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { ShoppingActionTypes } from "../../../types/shopping";
import { addShoppings } from "../../../store/reducers/shopping";/*
export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface IFullProductCard {
	children?: ReactNode;
	id: 
  img: string;
  title: string;
  price: string;
  spicy?: boolean;
  //variant: CardVariant;
}
*/
interface IFullProductCard {
	id: number;
	title: string;
	price: number;
	img: string;
	spicy: null | boolean;
	children: ReactNode;
}

const FullProductCard: FC<IFullProductCard> = 
	({ 
		id,
		title,
		price,
		img,
		spicy,
		children,
	}) => {
	const isSpicyFood = spicy !== null
	const [isSpicyChecked, setIsSpicyChecked] = useState(spicy);
	const dispatch = useDispatch()
		
	const addShopping = (card: any) => {
		console.log(card)
		// dispatch({
		//   type: ShoppingActionTypes.FETCH_SHOPPINGS_ADD,
  	//   payload: card
  	// })
		dispatch(addShoppings(card))
	}
	
	const [selecRadioBtn, setSelecRadioBtn] = useState("Не острые");
	
	const isRadioSelec = (value: string): boolean => selecRadioBtn === value
	
	const handleRadioClick = (e: ChangeEvent<HTMLInputElement>): void => {
		setSelecRadioBtn(e.currentTarget.value)
	}
	
	
	console.log("isSpicyChecked", isSpicyChecked)
	console.log("selecRadioBtn", selecRadioBtn)
	
	/*
		 bg-gray-200 border-gray-300 hover:ring-gray-700 focus:ring-gray-700 checked:focus:bg-gray-700 checked:bg-gray-700"
	*/
	
	return (
		<div className="w-1/2 flex flex-col justify-between px-1 gap-10">
			<div className="relative flex flex-col justify-between gap-5">
				<img
					className="rounded-xl w-full" 
					src={ img } />
				{isSpicyFood && (
					<button
	        	className="absolute top-5 right-5 cursor-pointer">
						<FontAwesomeIcon className="text-2xl" icon={faPepperHot} />
	        </button>
				)}
				<div className="text-sm font-semibold uppercase">{ title }</div>
				<div className="text-sm font-normal">
					<span className="font-semibold">{ price }</span> р.
				</div>
				<div className="text-xs leading-5">
					{ children }
				</div>
				
				{isSpicyFood && (
					<div className="flex flex-col justify-between gap-0.5 text-xs leading-6">
						Острота:
						<div className="flex items-center">
						  <input 
						  	id="noSpicy" 
						  	type="radio" 
						  	value="Не острые" 
						  	name="spicy-radio-btn" 
						  	checked={isRadioSelec("Не острые")}
						  	onChange={handleRadioClick}
					  		className="w-4 h-4 mx-2" />
						  <label htmlFor="noSpicy">
						  	Не острые
						  </label>
						</div>
						<div className="flex items-center">
					    <input 
					    id="spicy" 
					    type="radio" 
					    value="Острые" 
					    name="spicy-radio-btn"
					  	checked={isRadioSelec("Острые")}
					  	onChange={handleRadioClick}
			    		className="w-4 h-4 mx-2" />
					    <label htmlFor="spicy">
					    	Острые
					    </label>
						</div>
					</div>
				)}
			</div>
			
			<div className="flex flex-col justify-end items-center h-full gap-2">
				<Button
					onClick={() => addShopping({ id, title, price, img, spicy })}>
				 В Корзину
				</Button>
				<Button 
					background="bg-[#ffe396]">
					Подробнее
				</Button>
			</div>
		</div>
	)
}

export default FullProductCard;

/*
	border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
  background: variant === CardVariant.primary ? 'lightgray' : ''
*/

/*
	Острота:
		Не острые
		Острые
*/

/*
	ГРАФИК РАБОТЫ С 11 ДО 23
	АКТУАЛЬНОЕ ВРЕМЯ ДОСТАВКИ
*/