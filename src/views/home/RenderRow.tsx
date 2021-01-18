import React from 'react';
import Button from '../../components/Button';
import Cell from '../../components/table/Cell';
import Row from '../../components/table/Row';
import { MovieData } from '../../state/ducks/searchResults';

interface RenderRowProps {
	row: MovieData,
	removeRow: (id: string) => any;
}

const RenderRow = ({ row, removeRow }: RenderRowProps) => (
	<Row key={row.id}>
		<Cell className="w-7/12 p-4">{ row.title }</Cell>
		<Cell className="w-full">
			<Button onClick={() => removeRow(row.id)} className="w-full bg-red-800">
				Remove
			</Button>
		</Cell>
	</Row>
);

export default RenderRow;
