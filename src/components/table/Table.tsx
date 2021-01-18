import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeNomination } from '../../state/ducks/nominations';

interface RenderRowProps<T> {
	row: T;
	removeRow: (id: string) => any;
}

interface TableProps<T> {
	data: T[];
	renderHeader?: () => React.ReactNode;
	renderRow: (props: RenderRowProps<T>) => React.ReactNode;
}

const Table = <T extends object>({ data, renderHeader, renderRow }: TableProps<T>) => {
	const dispatch = useDispatch();

	const removeRow = useCallback((id: string) => dispatch(removeNomination(id)), [dispatch]);

	const tableHeader = (
		<thead>
			{ renderHeader }
		</thead>
	);

	return (
		<table className="w-full table-auto">
			{ renderHeader !== null ? tableHeader : null }
			<tbody>
				{ data.map((row) => renderRow({ row, removeRow })) }
			</tbody>
		</table>
	);
};

Table.defaultProps = {
	renderHeader: null,
};

export default Table;
