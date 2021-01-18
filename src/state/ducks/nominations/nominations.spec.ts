import configureStore from 'redux-mock-store';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer, {
	addNomination, ADD_NOMINATION, removeNomination, REMOVE_NOMINATION,
} from './index';
import { MovieData } from '../searchResults';

const mockStore = configureStore(getDefaultMiddleware());

describe('redux nominations actions', () => {
	it('should create the expected ADD_NOMINATION action', () => {
		const store = mockStore({});

		const movie: MovieData = {
			id: 'id',
			title: 'movie',
			year: '2021',
			poster: 'poster',
		};

		store.dispatch(addNomination(movie));

		const actions = store.getActions();
		const expectedPayload = { type: ADD_NOMINATION, payload: movie };
		expect(actions).toEqual([expectedPayload]);
	});

	it('should create the expected REMOVE_NOMINATION action', () => {
		const store = mockStore({});

		store.dispatch(removeNomination('id'));

		const actions = store.getActions();
		const expectedPayload = { type: REMOVE_NOMINATION, payload: 'id' };
		expect(actions).toEqual([expectedPayload]);
	});
});

describe('redux nominations reducers', () => {
	it('should add to nominations', () => {
		const movie: MovieData = {
			id: 'id',
			title: 'movie',
			year: '2021',
			poster: 'poster',
		};

		const initialState: MovieData[] = [];
		const action = { type: ADD_NOMINATION, payload: movie };
		expect(reducer(initialState, action)).toEqual([movie]);
	});

	it('should remove from nominations', () => {
		const movie: MovieData = {
			id: 'id',
			title: 'movie',
			year: '2021',
			poster: 'poster',
		};

		const initalState = [movie];
		const action = { type: REMOVE_NOMINATION, payload: 'id' };
		expect(reducer(initalState, action)).toEqual([]);
	});

	it('should not remove from nominations if id isn\'t present', () => {
		const movie: MovieData = {
			id: 'id',
			title: 'movie',
			year: '2021',
			poster: 'poster',
		};

		const initalState = [movie];
		const action = { type: REMOVE_NOMINATION, payload: 'otherId' };
		expect(reducer(initalState, action)).toEqual(initalState);
	});
});
