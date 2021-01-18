/* eslint-disable no-param-reassign */
import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import fetchData from '../../../api';

export interface Page {
	currentPage: number;
	totalPages: number;
}

export interface SearchTermPage {
	term: string;
	page: number;
}

export const CHANGE_PAGE = 'app/page/CHANGE_PAGE';

export const changePage = createAsyncThunk<any, SearchTermPage>(
	CHANGE_PAGE,
	async (termPage: SearchTermPage) => {
		const response = await fetchData(termPage.term, termPage.page);
		return { error: response.data.Response === 'False', ...response.data };
	},
);

const reducer = createReducer<Page>({ currentPage: 1, totalPages: 1 }, (builder) => builder
	.addCase(changePage.fulfilled, (state, action) => {
		const numResults = action.payload.totalResults;
		if (numResults) {
			return {
				currentPage: action.meta.arg.page,
				totalPages: Math.ceil(numResults / 10),
			};
		}
		return state;
	}));

export default reducer;
