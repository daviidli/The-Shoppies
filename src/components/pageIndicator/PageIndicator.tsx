import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../state/ducks/page';
import { RootState } from '../../state/store';

const PageIndicator = () => {
	const currentPage = useSelector<RootState, number>((state) => state.page.currentPage);
	const totalPages = useSelector<RootState, number>((state) => state.page.totalPages);
	const term = useSelector<RootState, string>((state) => state.searchTerm);
	const dispatch = useDispatch();

	const onClick = (operation: number) => () => dispatch(
		changePage({ term, page: currentPage + operation }),
	);

	return (
		<div className="flex justify-center my-3">
			<button type="button" onClick={onClick(-1)}>
				Prev
			</button>
			<span className="mx-8">
				{ currentPage }
				{' '}
				/
				{' '}
				{ totalPages }
			</span>
			<button type="button" onClick={onClick(1)}>
				Next
			</button>
		</div>
	);
};

export default PageIndicator;
