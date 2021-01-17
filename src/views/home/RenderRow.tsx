import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Cell from '../../components/table/Cell';
import Row from '../../components/table/Row';
import { removeNomination } from '../../state/ducks/nominations';
import { MovieData } from '../../state/ducks/searchResults';

const RenderRow = (row: MovieData) => {
	const dispatch = useDispatch();

	const onClick = () => dispatch(removeNomination(row.id));

	return (
		<Row key={row.id}>
			<Cell className="w-2/3 p-4">{ row.title }</Cell>
			<Cell>
				<Button onClick={onClick} className="bg-red-800">
					Remove
				</Button>
			</Cell>
		</Row>
	);
};

export default RenderRow;
