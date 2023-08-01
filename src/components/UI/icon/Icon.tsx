import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

interface IconType {
  children?: React.ReactNode;
  event?: () => void; 
}

const Icon: FC = ({ children, event }: IconType) => {
	return (
		<div 
			className="text-2xl"
			onClick={event}>
			{ children }
		</div>
	)
}

export default Icon;

//<FontAwesomeIcon icon={faCoffee} />