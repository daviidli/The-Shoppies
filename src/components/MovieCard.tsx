import React from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { addNomination, removeNomination } from '../state/ducks/nominations';
import { MovieData } from '../state/ducks/searchResults';
import { RootState } from '../state/store';
import Button from './Button';
import Card from './Card';

interface MovieCardProps {
	movie: MovieData;
}

const MovieCard = ({ movie }: MovieCardProps) => {
	const dispatch = useDispatch();
	const alreadySelected = useSelector<RootState, boolean>(
		(state) => !state.nominations.every((nomination) => nomination.id !== movie.id),
	);

	const onClick = () => {
		if (alreadySelected) {
			dispatch(removeNomination(movie.id));
		} else {
			dispatch(addNomination(movie));
		}
	};

	return (
		<Card className="flex h-48 bg-gray-400 flex-basis-2">
			<div className="flex flex-col justify-around flex-auto p-3">
				<h1 className="sm:text-lg lg:text-xl font-header">{ movie.title }</h1>
				<span className="text-gray-700">{ `(${movie.year})` }</span>
				<Button
					onClick={onClick}
					className={clsx('w-9/12 mx-auto', { 'bg-green-600': !alreadySelected, 'bg-red-800': alreadySelected })}
				>
					{ alreadySelected ? 'Remove' : 'Nominate' }
				</Button>
			</div>
			<img alt="movie poster" src={movie.poster} className="flex-none object-cover w-4/12 rounded-r-lg md:w-5/12" />
		</Card>
	);
};

export default MovieCard;
