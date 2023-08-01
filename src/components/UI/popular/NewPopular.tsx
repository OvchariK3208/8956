import React, { FC } from 'react';
import { IFood } from '../../../types/food';
import FullProductCard from './../full-product-card/FullProductCard';

interface IFoodList {
	foods: IFood[];
}

const NewPopular: FC<IFoodList> = ({ foods }) => {
	return (
		<div className="flex flex-col justify-between items-center px-4">
			<h2 
				className="text-[32px] leading-5 font-semibold py-16 text-center">
				Популярное
			</h2> 
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
		</div>
	)
}

export default NewPopular;