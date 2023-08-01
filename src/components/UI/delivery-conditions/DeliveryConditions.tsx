import React, { FC } from 'react';

const DeliveryConditions: FC = () => {
	const linkUrlMaps = 'https://yandex.ru/maps/2/saint-petersburg/?ll=30.415438%2C60.029729&mode=usermaps&source=constructorLink&um=constructor%3A9460d6f3bf1656fb00bbdf3a1610155c293275e90a07acca3a61e6673c9312c8&z=12'
	
	return (
		<div className="flex flex-col items-center justify-center gap-4 py-5">
			<div className="flex flex-col items-center justify-center">
				<div className="text-lg leading-2">Условия доставки</div>
				<ul className="list-disc pl-5">
			    <li className="text-base">Стоимость доставки Синяя зона - 200₽ (Выборгский / Калининский р-ны). При заказе от 2200₽ доставка бесплатно.</li>
			    <li className="text-base">Стоимость доставки Красная зона (Парнас, Бугры и Мурино) - 400₽. При заказе от 4000₽ доставка бесплатно.</li>
				</ul>
			</div>
			<div className="flex flex-col">
				<div className="text-base">
					Доставка осуществляется только <a href={linkUrlMaps} className="text-red-600 underline">в зонах на карте.</a>
				</div>
				<ul className="list-disc pl-5">
			    <li className="text-base">Для заказа в Мурино необходимо в графе «Город» выбрать «Мурино»</li>
			    <li className="text-base">Заказы ко времени временно не осуществляются</li>
				</ul>
			</div>
		</div>
	)
}

export default DeliveryConditions;