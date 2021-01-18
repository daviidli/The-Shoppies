import reducer from './index';
import { CHANGE_PAGE } from '../page';

describe('redux loading reducers', () => {
	it('should be true when pending', () => {
		const action = { type: `${CHANGE_PAGE}/pending` };
		expect(reducer(false, action)).toEqual(true);
	});

	it('should be false when fulfilled', () => {
		const action = { type: `${CHANGE_PAGE}/fulfilled` };
		expect(reducer(true, action)).toEqual(false);
	});

	it('should be false when rejected', () => {
		const action = { type: `${CHANGE_PAGE}/rejected` };
		expect(reducer(true, action)).toEqual(false);
	});
});
