import React from 'react';
import { http } from '../../../api';
import {
	render, screen, fireEvent, waitFor, getAllByRole,
} from '../../../utils/testUtils';
import Home from '../Home';


describe('Home component integration', () => {
	it('should render the home page with initial state', () => {
		render(<Home />, {
			initialState: {},
		});

		expect(screen.getByText('The Shoppies')).toBeInTheDocument();
		expect(screen.getByText('Your Nominations')).toBeInTheDocument();
		expect(screen.getByText('0 / 5')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Search for Movies')).toBeInTheDocument();
	});

	it('should show results on search', async () => {
		http.get = jest.fn().mockResolvedValue({
			data: {
				Search: [
					{
						imdbID: 'id1',
						Title: 'movie1',
						Year: '2021',
						Poster: 'somePoster',
					},
					{
						imdbID: 'id2',
						Title: 'movie2',
						Year: '2020',
						Poster: 'somePoster2',
					},
				],
				Response: 'True',
				totalResults: 1,
			},
		});

		render(<Home />, {
			initialState: {},
		});

		const searchBar = screen.getByPlaceholderText('Search for Movies');
		expect(searchBar).toHaveValue('');
		fireEvent.change(searchBar, { target: { value: 'matrix' } });
		expect(searchBar).toHaveValue('matrix');

		await waitFor(() => expect(http.get).toHaveBeenCalledTimes(1));

		const results = screen.getAllByAltText('Movie Poster');
		expect(results).toHaveLength(2);
	});

	it('should be able to add and remove nominations from movie card', async () => {
		render(<Home />, {
			initialState: {
				nominations: [],
				searchResults: [
					{
						id: 'id1',
						title: 'movie1',
						year: '2019',
						poster: 'moviePoster1',
					},
					{
						id: 'id2',
						title: 'movie2',
						year: '2020',
						poster: 'moviePoster2',
					},
				],
			},
		});

		expect(screen.getAllByAltText('Movie Poster')).toHaveLength(2);
		expect(screen.getByText('0 / 5')).toBeInTheDocument();
		const nominateButtons = screen.getAllByRole('button');
		fireEvent.click(nominateButtons[0]);

		expect(screen.getByText('1 / 5')).toBeInTheDocument();
		expect(screen.getAllByText('movie1')).toHaveLength(2);

		fireEvent.click(nominateButtons[0]);

		expect(screen.getByText('0 / 5')).toBeInTheDocument();
		expect(screen.getAllByText('movie1')).toHaveLength(1);
	});

	it('should be able to remove nominations from side panel', async () => {
		render(<Home />, {
			initialState: {
				nominations: [
					{
						id: 'id2',
						title: 'movie2',
						year: '2020',
						poster: 'moviePoster2',
					},
				],
				searchResults: [
					{
						id: 'id1',
						title: 'movie1',
						year: '2019',
						poster: 'moviePoster1',
					},
					{
						id: 'id2',
						title: 'movie2',
						year: '2020',
						poster: 'moviePoster2',
					},
				],
			},
		});

		expect(screen.getAllByAltText('Movie Poster')).toHaveLength(2);
		expect(screen.getByText('1 / 5')).toBeInTheDocument();
		const removeButton = getAllByRole(screen.getByRole('table'), 'button', { name: 'Remove' });
		expect(removeButton).toHaveLength(1);
		fireEvent.click(removeButton[0]);

		expect(screen.getByText('0 / 5')).toBeInTheDocument();
	});
});
