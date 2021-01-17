import React from 'react';

interface CardProps {
	className?: string;
	children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => (
	<div className={`${className} m-2 shadow-md rounded-lg`}>
		{ children }
	</div>
);

Card.defaultProps = {
	className: '',
};

export default Card;
