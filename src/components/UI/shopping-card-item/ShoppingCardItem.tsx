import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { ShoppingActionTypes } from "../../../types/shopping";
import { removeShoppings } from "../../../store/reducers/shopping";

interface IShoppingCardItem {
	id: number;
	title: string;
	price: number;
	img: string;
	spicy: boolean;
}

const ShoppingCardItem: FC<IShoppingCardItem> = 
	({ 
		id,
		title,
		price,
		img,
		spicy
	}) => {
		const dispatch = useDispatch()
		
		const removeCard = (id: any) => {
		  dispatch(removeShoppings(id))
		}
	
	const [count, setCount] = useState(1);
	
	const increment = (count: number): void => setCount((prev) => prev + 1)
	
	const decrement = (count: number, id: number): void => count === 1 ? removeCard(id) : setCount((prev) => prev - 1)
	
	const isSpicyFood = spicy !== null
	console.log("spicy", spicy)
	console.log("isSpicyFood", isSpicyFood)
		
	return (
		<div 
			key={ id }
			className="flex items-center justify-between p-5 text-sm">
			<div className="flex items-center gap-6 w-1/2">
				<img 
					className="h-[70px]"
					src={ img } 
					alt={ title } />
				<div 
					className="flex flex-col justify-between gap-0.5">
					<span>{ title }</span>
					{isSpicyFood && 
					<span className="text-xs font-normal">
						Острота: { spicy ? "Острые" : "Не острые" }
					</span>}
				</div>
			</div>
			<div className="flex items-center justify-between gap-10">
				<div className="flex items-center justify-between gap-2">
					<button
		        className="text-base cursor-pointer"
		        onClick={() => decrement(count, id)}>
						<FontAwesomeIcon icon={faMinus} />
	        </button>
	        <span className="text-base">{ count }</span>
	        <button
		        className="text-base cursor-pointer"
		        onClick={() => increment(count)}>
						<FontAwesomeIcon icon={faPlus} />
		      </button>
				</div>
				<div className="">
					<span className="text-base">{ price }</span> р.
				</div>
				<button
	        className="text-base cursor-pointer"
	        onClick={() => removeCard(id) }>
					<FontAwesomeIcon icon={faCircleXmark} />
        </button>
			</div>
		</div>					
	)
}

export default ShoppingCardItem;