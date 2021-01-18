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
	const nominationLength = useSelector<RootState, number>((state) => state.nominations.length);

	const onClick = () => {
		if (alreadySelected) {
			dispatch(removeNomination(movie.id));
		} else if (nominationLength < 5) {
			dispatch(addNomination(movie));
		}
	};

	return (
		<Card className="flex h-48 text-white bg-trueGray-900 flex-basis-2">
			<div className="flex flex-col justify-around flex-auto p-3">
				<h1 className="sm:text-lg lg:text-xl font-header">{ movie.title }</h1>
				<span className="text-gray-600">{ `(${movie.year})` }</span>
				<Button
					onClick={onClick}
					className={clsx(
						'w-9/12 mx-auto',
						{
							'bg-green-600': !alreadySelected && nominationLength < 5,
							'bg-red-800': alreadySelected,
							'bg-gray-600': !alreadySelected && nominationLength >= 5,
						},
					)}
					disabled={!alreadySelected && nominationLength >= 5}
				>
					{ alreadySelected ? 'Remove' : 'Nominate' }
				</Button>
			</div>
			<img alt="Movie Poster" src={movie.poster} className="flex-none object-cover w-4/12 rounded-r-lg md:w-5/12" />
		</Card>
	);
};

export default MovieCard;
