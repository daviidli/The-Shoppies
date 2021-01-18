import reducer from './index';
import { CHANGE_PAGE } from '../page';

describe('redux error reducers', () => {
	it('should not have active errors during pending state from active', () => {
		const initalState = { active: true, message: '' };
		const action = { type: `${CHANGE_PAGE}/pending` };

		expect(reducer(initalState, action)).toEqual({
			active: false,
			message: '',
		});
	});

	it('should not have active errors during pending state from not active', () => {
		const initalState = { active: false, message: '' };
		const action = { type: `${CHANGE_PAGE}/pending` };

		expect(reducer(initalState, action)).toEqual({
			active: false,
			message: '',
		});
	});

	it('should have active error and message when error present', () => {
		const initalState = { active: false, message: '' };
		const action = {
			type: `${CHANGE_PAGE}/fulfilled`,
			payload: {
				error: true,
				Response: 'False',
				Error: 'Too many results.',
			},
		};

		expect(reducer(initalState, action)).toEqual({ active: true, message: 'Too many results.' });
	});

	it('should not have active error and message when error isn\'t present', () => {
		const initalState = { active: false, message: '' };
		const action = {
			type: `${CHANGE_PAGE}/fulfilled`,
			payload: {
				error: false,
				Response: 'True',
				Search: [
					{ title: 'someMovie' },
				],
			},
		};

		expect(reducer(initalState, action)).toEqual({ active: false, message: '' });
	});

	it('should have active error when promise rejected', () => {
		const initalState = { active: false, message: '' };
		const action = {
			type: `${CHANGE_PAGE}/rejected`,
			error: {
				message: 'Error',
			},
		};

		expect(reducer(initalState, action)).toEqual({ active: true, message: 'Error' });
	});
});
