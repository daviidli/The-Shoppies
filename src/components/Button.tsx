import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
	onClick: (e: React.MouseEvent) => any;
	className?: string;
	children?: React.ReactNode;
}

const Button = ({
	onClick, className, children,
}: ButtonProps) => (
	<button
		type="button"
		onClick={onClick}
		className={clsx('h-10 font-heading rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600', className)}
	>
		{ children }
	</button>
);

Button.defaultProps = {
	className: '',
	children: null,
};

export default Button;
