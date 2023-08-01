import React, { FC, useState, useEffect } from 'react';
//import Icon from './../components/UI/icon/Icon';
//import Search from './../components/UI/search/Search';
import NewSearch from './../components/UI/search/NewSearch';
import Modal from './../components/UI/modal/Modal';
import NewModal from './../components/UI/modal/NewModal';
import Favorites from './../components/UI/favorites/Favorites';
import BurgerMenu from './../components/UI/burger-menu/BurgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart, faBagShopping, faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import logoSvg from './../img/logo_8956.svg';
import { useModal } from "../hooks/useModal";
import { Link } from 'react-router-dom';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

// faHeart
//import { faHeart } from '@fortawesome/free-regular-svg-icons'


const Navigation: FC = () => {
	const [modalVisibleSearching, setModalVisibleSearching] = useState(false)
	const [modalVisibleFavoriting, setModalVisibleFavoriting] = useState(false)
	const [modalVisibleShopping, setModalVisibleShopping] = useState(false)
	const [modalVisibleBurgerMenu, setModalVisibleBurgerMenu] = useState(false)
	
	const toggleModalVisibleSearching = () => setModalVisibleSearching(!modalVisibleSearching);
	const toggleModalVisibleFavoriting = () => setModalVisibleFavoriting(!modalVisibleFavoriting);
	const toggleModalVisibleShopping = () => setModalVisibleShopping(!modalVisibleShopping);
	const toggleModalVisibleBurgerMenu = () => setModalVisibleBurgerMenu(!modalVisibleBurgerMenu);
	
	const { shoppings } = useTypedSelector(state => state.shopping)
	const [totalCount, setTotalCount] = useState(0);
  
  useEffect(() => {
  	setTotalCount(shoppings.length)
  }, [shoppings])
  
  //console.log("shoppings", shoppings)
  //console.log(state)
	//console.log("price", totalPrice)
	//console.log('modalVisibleShopping', modalVisibleShopping)
	//console.log('modalVisibleFavoriting', modalVisibleFavoriting)
	
	//const{ isOpen, toggle } = useModal();
	
	//const { products, loading, error } = useTypedSelector(state => state.products);
	
	const [dishs, setDishs] = useState({
			title: ''
	})
	
	const inputChangeTitle = (e: any) => {
		setDishs({ ...dishs, title: e.target.value });
	}
	
	console.log('dishs', dishs)
	return (
		<header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between h-18 px-4 bg-white">
			<Link to="/">
				<img src={logoSvg} alt="logo" />
			</Link>
			
			<div className="flex items-center justify-between gap-4 text-2xl">
				<div
					className="cursor-pointer"
					onClick={toggleModalVisibleSearching}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					<NewSearch
						type="text" 
						placeholder="Ведите наименование блюда"
						value={dishs.title}
						onChange={inputChangeTitle}
						isOpen={modalVisibleSearching} 
						toggle={toggleModalVisibleSearching}/>
				</div>
				<div
					className="cursor-pointer"
					onClick={toggleModalVisibleFavoriting}>
					<FontAwesomeIcon icon={faHeart} />
					<Favorites
						isOpen={modalVisibleFavoriting} 
						toggle={toggleModalVisibleFavoriting}
						title="Избранное" />
				</div>
				<div 
					className="relative cursor-pointer"
					onClick={ toggleModalVisibleShopping }>
					<FontAwesomeIcon icon={faBagShopping} />
					{shoppings.length > 0 &&
						<span 
							className="absolute bottom-[-4px] right-[-4px] bg-red-700 rounded-full px-1 leading-4 text-[10px] text-white">
							{ totalCount }
						</span>}
					<NewModal 
						isOpen={modalVisibleShopping} 
						toggle={toggleModalVisibleShopping}
						title="Ваш заказ" />
				</div>
				
				<div 
					className="cursor-pointer"
					onClick={toggleModalVisibleBurgerMenu}>
					<FontAwesomeIcon icon={faBars} />
					<BurgerMenu 
						isOpen={modalVisibleBurgerMenu} 
						toggle={toggleModalVisibleBurgerMenu} />
				</div>
			</div>
		</header>
	)
}

export default Navigation;