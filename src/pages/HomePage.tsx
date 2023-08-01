import React, { FC, useState, useEffect } from 'react';
import Carousel from './../components/UI/carousel/Carousel';
import Hints from './../components/UI/hints/Hints';
import AllFoodsCarts from './../components/UI/all-foods-carts/AllFoodsCarts';
import NewPopular from './../components/UI/popular/NewPopular';
import FoodList from './../components/UI/food-list/FoodList';
import WrapperList from './../components/UI/wrapper-list/WrapperList';
import MarqueeFast from './../components/UI/marquee/MarqueeFast';
import DeliveryRoute from './../img/icon/delivery_route.svg';
import LogisticsDelivery from './../img/icon/logistics_delivery.svg';
import { useTypedSelector } from "./../hooks/useTypedSelector";
import { fetchFoods } from "./../store/action-creators/food";
import { useActions } from "./../hooks/useActions";
import { IFood } from './../types/food';

const HomePage: FC = () => {
	const { foods, loading, error } = useTypedSelector(state => state.food)
	const [popularFoods, setPopularFoods] = useState<IFood[]>([]);

	//console.log('foods', foods)
	//console.log('popularFoods', popularFoods)
	
	const { fetchFoods } = useActions()
	
	useEffect(() => {
  	fetchFoods()
  }, [])
  
  useEffect(() => {
  	setPopularFoods(foods.filter(food => food.popular > 1200 ))
  }, [foods])
	
	//console.log('popularFoods', popularFoods)
	
  return (
    <div className="">
    	<div className="flex flex-col items-center mt-[68px] font-all">
    		<Carousel />
    		<Hints />
    		<AllFoodsCarts />
    		
    		<WrapperList>
    			<h2 
						className="text-[32px] leading-5 font-semibold pb-16 pt-6 text-center">
						Популярное
					</h2>
    			<FoodList 
    			foods={popularFoods} />
    		</WrapperList>
    		
    		<MarqueeFast
    			link="">
    			<div 
						className="text-lg leading-6 font-semibold uppercase cursor-pointer px-3.5">
						График работы с 11 до 23
					</div>
    			<img 
    				className="w-[50px] h-[70px]"
    				src={ LogisticsDelivery } 
    				alt="Логистическая поставка" />
					<div 
						className="text-lg leading-6 font-semibold uppercase cursor-pointer px-3.5">
						актуальное время доставки
					</div>
					<img 
    				className="w-[50px] h-[70px]"
    				src={ LogisticsDelivery } 
    				alt="Логистическая поставка" />
    		</MarqueeFast>
    		
    		<WrapperList>
    			<FoodList 
    			foods={foods} />
    		</WrapperList>
	    	<MarqueeFast
    			link="">
    			<div 
						className="text-lg leading-6 font-semibold uppercase cursor-pointer px-3.5">
						Нажми чтобы посмотреть зону доставки
					</div>
    			<img 
    				className="w-[50px] h-[70px]"
    				src={ DeliveryRoute } 
    				alt="Маршрут доставки" />
    		</MarqueeFast>
    	</div>
    </div>
  );
}

export default HomePage;