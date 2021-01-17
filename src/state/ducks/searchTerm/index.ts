import { createReducer } from '@reduxjs/toolkit';
import { changePage } from '../page';

const reducer = createReducer<string>('', (builder) => builder
	.addCase(changePage.fulfilled, (state, action) => action.meta.arg.term));

export default reducer;
