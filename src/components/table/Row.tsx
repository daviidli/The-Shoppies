import React from 'react';

interface RowProps {
	className?: string;
	children: React.ReactNode;
}

const Row = ({ className, children }: RowProps) => (
	<tr className={`${className} h-18 py-6 border-b-2 last:border-b-0`}>
		{ children }
	</tr>
);

Row.defaultProps = {
	className: '',
};

export default Row;
