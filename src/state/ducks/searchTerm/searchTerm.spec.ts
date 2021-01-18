import reducer from './index';
import { CHANGE_PAGE } from '../page';

describe('redux searchTerm reducers', () => {
	it('should update the search term when change page is fulfilled', () => {
		const term = 'movie title';
		const action = {
			type: `${CHANGE_PAGE}/fulfilled`,
			meta: {
				arg: {
					term,
				},
			},
		};
		expect(reducer('', action)).toEqual(term);
	});
});
