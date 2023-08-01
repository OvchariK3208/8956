import React, { FC, ReactNode } from 'react';

interface IWrapperList {
	children: ReactNode;
}

const WrapperList: FC<IWrapperList> = ({ children }) => {
	return (
		<div className="flex flex-col justify-between items-center px-4 my-10">
			{ children }
		</div>
	)
}

export default WrapperList;