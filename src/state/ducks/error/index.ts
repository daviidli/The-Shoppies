import { createReducer } from '@reduxjs/toolkit';
import { changePage } from '../page';

const reducer = createReducer<boolean>(false, (builder) => builder
	.addCase(changePage.pending, () => false)
	.addCase(changePage.fulfilled, () => false)
	.addCase(changePage.rejected, () => true));

export default reducer;
