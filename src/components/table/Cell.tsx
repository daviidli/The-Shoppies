import React from 'react';

interface CellProps {
	className?: string;
	children: React.ReactNode;
	head?: boolean;
}

const Cell = ({ className, children, head }: CellProps) => (head
	? <th className={`${className} px-6 py-4`}>{ children }</th>
	: <td className={`${className} px-6 py-4`}>{ children }</td>);

Cell.defaultProps = {
	className: '',
	head: false,
};

export default Cell;
