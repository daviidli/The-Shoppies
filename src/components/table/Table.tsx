import React from 'react';

interface TableProps<T> {
	data: T[];
	renderHeader?: () => React.ReactNode;
	renderRow: (row: T) => React.ReactNode;
}

const Table = <T extends object>({ data, renderHeader, renderRow }: TableProps<T>) => {
	const tableHeader = (
		<thead>
			{ renderHeader }
		</thead>
	);

	return (
		<table className="w-full table-auto">
			{ renderHeader !== null ? tableHeader : null }
			<tbody>
				{ data.map(renderRow) }
			</tbody>
		</table>
	);
};

Table.defaultProps = {
	renderHeader: null,
};

export default Table;
