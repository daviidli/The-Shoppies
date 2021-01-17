import { configureStore, combineReducers } from '@reduxjs/toolkit';
import * as reducers from './ducks';
import { MovieData } from './ducks/searchResults';
import { Page } from './ducks/page';

export interface RootState {
	router: any;
	nominations: MovieData[];
	searchResults: MovieData[];
	loading: boolean;
	error: boolean;
	page: Page;
	searchTerm: string;
}

const reducer = combineReducers(reducers);

const store = configureStore({
	reducer,
	devTools: true,
});

export default store;
