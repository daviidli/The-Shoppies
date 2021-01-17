/* eslint-disable @typescript-eslint/no-unused-vars */
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { changePage } from '../page';

export interface MovieData {
	id: string;
	title: string;
	year: string;
	poster: string;
}

const formatResponse = ({
	imdbID, Title, Year, Poster,
}: any) => ({
	id: imdbID,
	title: Title,
	year: Year,
	poster: Poster,
});

const reducer = createReducer<MovieData[]>([], (builder) => builder
	.addCase(
		changePage.fulfilled,
		(state, action) => action.payload.Search.map(formatResponse),
	));

export default reducer;
