/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { changePage } from '../page';

export interface Error {
	active: boolean;
	message: string;
}

const reducer = createReducer<Error>({ active: false, message: '' }, (builder) => builder
	.addCase(changePage.pending, (state) => {
		state.active = false;
	})
	.addCase(changePage.fulfilled, (state, action) => {
		if (action.payload.error) {
			return { active: true, message: action.payload.Error as string };
		}
		return { ...state, active: false };
	})
	.addCase(
		changePage.rejected,
		(state, action) => ({ active: true, message: action.error.message as string }),
	));

export default reducer;
