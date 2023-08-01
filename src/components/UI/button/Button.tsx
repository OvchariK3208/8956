import React, { ReactNode } from "react";

interface ButtonType {
  children?: ReactNode;
  background?: string;
  onClick?: () => void;
}

export default function Button({ 
	children, 
	background = 'bg-inherit',
	onClick }: ButtonType) {
  return (
  	<button 
			className={`w-full border border-black border-solid p-2.5 rounded-lg uppercase text-center cursor-pointer text-sm font-bold ${background}`}
			onClick={onClick}>
			{ children }
		</button>
  )
}
