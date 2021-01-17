import { createReducer } from '@reduxjs/toolkit';
import { changePage } from '../page';

const reducer = createReducer<boolean>(false, (builder) => builder
	.addCase(changePage.pending, () => true)
	.addCase(changePage.fulfilled, () => false)
	.addCase(changePage.rejected, () => false));

export default reducer;
