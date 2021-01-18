import { createAction, createReducer } from '@reduxjs/toolkit';
import { MovieData } from '../searchResults';

export const ADD_NOMINATION = 'app/nominations/ADD_NOMINATION';
export const REMOVE_NOMINATION = 'app/nominations/REMOVE_NOMINATIONS';

export const addNomination = createAction<MovieData>(ADD_NOMINATION);
export const removeNomination = createAction<string>(REMOVE_NOMINATION);

const reducer = createReducer<MovieData[]>([], (builder) => builder
	.addCase(
		addNomination,
		(state, action) => {
			state.push(action.payload);
		},
	)
	.addCase(
		removeNomination,
		(state, action) => state.filter((nomination) => nomination.id !== action.payload),
	));

export default reducer;
