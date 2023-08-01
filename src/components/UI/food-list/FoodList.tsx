import React, { FC, useEffect } from 'react';
import { IFood } from '../../../types/food';
import FullProductCard from './../full-product-card/FullProductCard';

interface IFoodList {
	foods: IFood[];
}

const FoodList: FC<IFoodList> = ({ foods }) => {
	return (
		<div className="flex flex-wrap items-stretch gap-y-10">
			{foods.map(({ id, title, body, price, img, spicy }) => {
				return (
					<FullProductCard 
						key={ id }
						id={ id }
						img={ img }
						title={ title }
						price={ price }
						spicy={ spicy }>
							{body.map(item => <p key={ item }>{ item }</p> )}
					</FullProductCard>
				)})}
		</div>
	)
}

export default FoodList;