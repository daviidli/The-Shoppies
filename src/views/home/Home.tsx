/* eslint-disable no-nested-ternary */
import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AiOutlineLoading } from 'react-icons/ai';
import debounce from 'lodash/debounce';
import SearchBar from '../../components/SeachBar';
import SidePanel from '../../components/SidePanel';
import NominationInfo from './NominationInfo';
import View from '../View';
import { MovieData } from '../../state/ducks/searchResults';
import { changePage } from '../../state/ducks/page';
import MovieCard from '../../components/MovieCard';
import { RootState } from '../../state/store';
import PageIndicator from '../../components/PageIndicator';

const Home = () => {
	const dispatch = useDispatch();
	const movies = useSelector<RootState, MovieData[]>((state) => state.searchResults, shallowEqual);
	const isLoading = useSelector<RootState, boolean>((state) => state.loading);
	const activeError = useSelector<RootState, boolean>((state) => state.error.active);
	const errorMessage = useSelector<RootState, string>((state) => state.error.message);
	const searchTerm = useSelector<RootState, string>((state) => state.searchTerm);

	const onSearch = (term: string) => {
		if (term !== '') {
			dispatch(changePage({ term, page: 1 }));
		}
	};

	const debouncedSearch = debounce(onSearch, 500);

	const searchPanel = (
		<>
			<h1 className="m-auto mt-6 text-lg font-header">
				{ 'Showing results for: ' }
				<b>{ searchTerm }</b>
			</h1>
			<div className="flex flex-wrap justify-center mt-5">
				{ movies.map((movie) => <MovieCard key={movie.id} movie={movie} />) }
			</div>
			{ movies.length ? <PageIndicator /> : null }
		</>
	);

	const loadingIndicator = (
		<AiOutlineLoading className="w-1/4 p-8 m-auto h-1/4 animate-spin" />
	);

	const errorIndicator = (
		<h1 className="mt-8 text-center">{ errorMessage }</h1>
	);

	return (
		<View className="flex flex-wrap items-start p-4 text-white lg:flex-nowrap">
			<SidePanel className="flex-auto mb-5 lg:flex-none lg-mb-0">
				<NominationInfo />
			</SidePanel>
			<div className="flex flex-col justify-center flex-auto lg:ml-5">
				<SearchBar onSubmit={debouncedSearch} placeholder="Search for Movies" />
				{ activeError ? errorIndicator : (isLoading ? loadingIndicator : searchPanel) }
			</div>
		</View>
	);
};

export default Home;
