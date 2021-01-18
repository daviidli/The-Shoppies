import configureStore from 'redux-mock-store';
import { getDefaultMiddleware, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { http } from '../../../api';
import reducer, { changePage, CHANGE_PAGE } from './index';

const mockStore = configureStore<{}, ThunkDispatch<any, void, AnyAction>>(getDefaultMiddleware());

describe('redux page actions', () => {
	it('should create the expected CHANGE_PAGE action', () => {
		const store = mockStore({});

		http.get = jest.fn().mockResolvedValue({
			data: {
				Search: [{ id: 'id1' }],
			},
		});

		return store.dispatch(changePage({ term: 'movie', page: 10 })).then(() => {
			const actions = store.getActions();
			expect(actions.length).toEqual(2);
			expect(actions[0].type).toEqual(`${CHANGE_PAGE}/pending`);
			expect(actions[1].type).toEqual(`${CHANGE_PAGE}/fulfilled`);
			expect(actions[0].payload).toEqual(undefined);
			expect(actions[1].payload).toEqual({
				error: false,
				Search: [{ id: 'id1' }],
			});
		});
	});
});

describe('redux page reducers', () => {
	it('should change current page and total pages', () => {
		const payload = {
			Search: [],
			totalResults: 234,
			Response: 'True',
		};

		const action = { type: `${CHANGE_PAGE}/fulfilled`, payload, meta: { arg: { page: 3 } } };
		expect(
			reducer({ currentPage: 1, totalPages: 1 }, action),
		).toEqual(
			{ currentPage: 3, totalPages: 24 },
		);
	});
});
