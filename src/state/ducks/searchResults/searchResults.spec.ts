import reducer, { MovieData } from './index';
import { CHANGE_PAGE } from '../page';

describe('redux searchResults reducers', () => {
	it('should return empty array if error present', () => {
		const movie: MovieData = {
			id: 'id',
			title: 'movie',
			year: '2021',
			poster: 'poster',
		};

		const action = {
			type: `${CHANGE_PAGE}/fulfilled`,
			payload: {
				error: true,
			},
		};
		expect(reducer([movie], action)).toEqual([]);
	});

	it('should return search results', () => {
		const movie: MovieData = {
			id: 'id',
			title: 'movie',
			year: '2021',
			poster: 'poster',
		};

		const movie2 = {
			imdbID: 'id2',
			Title: 'movie2',
			Year: '2020',
			Poster: 'poster2',
			SomethingElse: 'somethingElse',
		};

		const action = {
			type: `${CHANGE_PAGE}/fulfilled`,
			payload: {
				error: false,
				Search: [movie2],
			},
		};
		expect(reducer([movie], action)).toEqual([{
			id: movie2.imdbID,
			title: movie2.Title,
			year: movie2.Year,
			poster: movie2.Poster,
		}]);
	});
});
