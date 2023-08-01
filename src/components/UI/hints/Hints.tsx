import React, { FC } from 'react';

const Hints: FC = () => {
	return (
		<div className="flex justify-center items-center px-4 my-2">
			{/*<div className="overflow-scroll">*/}
				<ul className="flex items-center justify-between gap-4 flex-nowrap max-w-screen-sm overflow-y-scroll w-full pb-3">
					<li className="text-sm font-semibold rounded-full py-3.5 px-6 bg-[#f7f7f7] min-w-full text-center">Понедельник-пятница с 13:00-23:00</li>
					<li className="text-sm font-semibold rounded-full py-3.5 px-6 bg-[#f7f7f7] min-w-full text-center">Суббота-воскресенье с 11:00-23:00</li>
					<li className="text-sm font-semibold rounded-full py-3.5 px-6 bg-[#f7f7f7] min-w-full text-center">Оплата по СБП</li>
					<li className="text-sm font-semibold rounded-full py-3.5 px-6 bg-[#f7f7f7] min-w-full text-center">Узнать сколько ждать доставку</li>
				</ul>
			{/*</div>*/}
		</div>
	)
}

export default Hints;