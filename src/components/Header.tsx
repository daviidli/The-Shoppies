import clsx from 'clsx';
import React from 'react';

interface HeaderProps {
	className?: string;
	title: string;
}

const Header = ({ className, title }: HeaderProps) => (
	<div className={clsx(className, 'bg-black text-white shadow-lg h-12 md:h-16 flex items-center w-screen')}>
		<h1 className="ml-3 text-3xl font-header md:ml-6">{ title }</h1>
	</div>
);

Header.defaultProps = {
	className: '',
};

export default Header;
