import React, { useState } from 'react';
import clsx from 'clsx';
import { GoSearch } from 'react-icons/go';

interface SearchBarProps {
	className?: string;
	onSubmit: (searchTerm: string) => any;
	placeholder?: string;
}

const SearchBar = ({ className, onSubmit, placeholder }: SearchBarProps) => {
	const [searchTerm, setSearchTerm] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchTerm(value);
		if (value !== '') {
			onSubmit(value);
		}
	};

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Escape') {
			setSearchTerm('');
		}
	};

	return (
		<div className="relative">
			<GoSearch className="absolute w-5 h-5 text-white inset-4" />
			<input
				className={clsx(
					className,
					'text-white p-3 bg-trueGray-700 pl-12 rounded-3xl h-14 w-full outline-none focus:ring-2 focus:ring-blue-600',
				)}
				value={searchTerm}
				onChange={onChange}
				onKeyDown={onKeyDown}
				placeholder={placeholder}
			/>
		</div>
	);
};

SearchBar.defaultProps = {
	className: '',
	placeholder: '',
};

export default SearchBar;
