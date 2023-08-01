import React, { FC, useEffect } from 'react';
import FoodCart from './../food-cart/FoodCart';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

const AllFoodsCarts: FC = () => {
	const { catalogs, loading, error } = useTypedSelector(state => state.catalog)
	const { fetchCatalogs } = useActions()
	
	useEffect(() => {
  	fetchCatalogs()
  }, [])
  
  console.log(catalogs)
	
	return (
		<div className="flex justify-center items-center px-4">
			<div className="flex flex-col flex-wrap gap-4 text-white">
				{catalogs.map(({ id, title, img, link }) => { 
					return (
						<FoodCart 
							key={ id }
							link={ link }
							img={ img }
							title={ title } />
					)})}
			</div>
		</div>
	)
}

export default AllFoodsCarts;