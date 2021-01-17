import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLoading } from 'react-icons/ai';
import SearchBar from '../../components/SeachBar';
import SidePanel from '../../components/SidePanel';
import NominationInfo from './NominationInfo';
import View from '../View';
import { MovieData } from '../../state/ducks/searchResults';
import { changePage } from '../../state/ducks/page';
import MovieCard from '../../components/MovieCard';
import { RootState } from '../../state/store';
import PageIndicator from '../../components/pageIndicator/PageIndicator';

const Home = () => {
	const dispatch = useDispatch();
	const movies = useSelector<RootState, MovieData[]>((state) => state.searchResults);
	const isLoading = useSelector<RootState, boolean>((state) => state.loading);

	const onSearch = (term: string) => {
		if (term !== '') {
			dispatch(changePage({ term, page: 1 }));
		}
	};

	const searchPanel = (
		<>
			<div className="flex flex-wrap justify-center mt-5">
				{ movies.map((movie) => <MovieCard key={movie.id} movie={movie} />) }
			</div>
			{ movies.length ? <PageIndicator /> : null }
		</>
	);

	const loadingIndicator = (
		<AiOutlineLoading className="w-1/4 p-8 m-auto h-1/4 animate-spin" />
	);

	return (
		<View className="flex flex-wrap items-start p-4 lg:flex-nowrap">
			<SidePanel className="flex-auto mb-5 lg:flex-none lg-mb-0">
				<NominationInfo />
			</SidePanel>
			<div className="flex flex-col justify-center flex-auto lg:ml-5">
				<SearchBar onSubmit={onSearch} placeholder="Search for Movies" />
				{ isLoading ? loadingIndicator : searchPanel }
			</div>
		</View>
	);
};

export default Home;
