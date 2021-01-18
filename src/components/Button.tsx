import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
	onClick: (...a: any) => any;
	className?: string;
	children?: React.ReactNode;
	disabled?: boolean;
}

const Button = ({
	onClick, className, children, disabled,
}: ButtonProps) => (
	<button
		type="button"
		onClick={onClick}
		className={clsx(
			'h-10 font-heading rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600',
			{ 'cursor-not-allowed text-gray-400': disabled },
			className,
		)}
		disabled={disabled}
	>
		{ children }
	</button>
);

Button.defaultProps = {
	className: '',
	children: null,
	disabled: false,
};

export default Button;
