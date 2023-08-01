import React, { ReactNode } from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

interface IMarquee {
	children?: ReactNode;
	link: string;
}

const MarqueeFast = ({ children, link }: IMarquee) => {
	return (
		<Marquee 
			autoFill={true}
			direction="right">
			<Link to={ link }>
				<div className="flex items-center justify-center">
					{ children }
				</div>
			</Link>
		</Marquee>
	)
}

export default MarqueeFast;