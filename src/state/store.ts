import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import * as reducers from './ducks';
import { MovieData } from './ducks/searchResults';
import { Page } from './ducks/page';
import { Error } from './ducks/error';
import { history } from './ducks/router';

export interface RootState {
	router: any;
	nominations: MovieData[];
	searchResults: MovieData[];
	loading: boolean;
	error: Error;
	page: Page;
	searchTerm: string;
}

const saveToLocal = (state: RootState) => {
	try {
		const serialized = JSON.stringify(state);
		localStorage.setItem('appState', serialized);
	} catch (e) {
		console.error(e);
	}
};

const loadFromLocal = () => {
	try {
		const serialized = localStorage.getItem('appState');
		if (serialized === null) {
			return undefined;
		}
		return JSON.parse(serialized);
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

export const reducer = combineReducers(reducers);

const store = configureStore({
	reducer,
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
		routerMiddleware(history),
	),
	preloadedState: loadFromLocal(),
});

store.subscribe(() => saveToLocal(store.getState()));

export default store;
