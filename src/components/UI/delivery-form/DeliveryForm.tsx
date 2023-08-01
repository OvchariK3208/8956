import React, { FC } from 'react';

const DeliveryForm: FC = ({  }) => {
	return (
		<div className="flex flex-col p-5">
			<div className="flex flex-col text-base gap-2">
				<div className="">Ваше имя</div>
				<input
    			placeholder="Роберт Дауни Младший"
    			type="text"
    			//value=""//{ value }
    			//onChange=""//{ onChange }
    			className="text-sm font-normal p-5 placeholder:text-white w-full focus:outline-none border border-black border-solid p-4 rounded-lg bg-opacyti-50" />
			</div>
		</div>
	)
}

export default DeliveryForm;