import React, { FC, useState, ChangeEvent } from 'react';

const DeliveryPage: FC = () => {
	const [selecRadioBtn, setSelecRadioBtn] = useState("Не острые");
	
	const isRadioSelec = (value: string): boolean => selecRadioBtn === value
	
	const handleRadioClick = (e: ChangeEvent<HTMLInputElement>): void => setSelecRadioBtn(e.currentTarget.value)
	
  return (
    <div className="mt-40">
    	DeliveryPage
    
    </div>
  );
}

export default DeliveryPage;