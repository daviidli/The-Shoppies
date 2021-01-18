import React, { useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { MovieData } from '../../state/ducks/searchResults';
import { RootState } from '../../state/store';
import Table from '../../components/table/Table';
import RenderRow from './RenderRow';

const NominationInfo = () => {
	const nominations = useSelector<RootState, MovieData[]>((state) => state.nominations);

	useEffect(() => {
		if (nominations.length === 5) {
			toast.success('All nominations selected!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
		}
	}, [nominations]);

	return (
		<div className="flex flex-col items-center text-white">
			<h1 className="my-4 text-2xl font-title">Your Nominations</h1>
			<div className="w-1/2 m-8 font-header">
				<CircularProgressbar
					value={nominations.length}
					maxValue={5}
					text={`${nominations.length} / 5`}
					styles={buildStyles({
						strokeLinecap: 'round',
						textSize: '16px',
						pathColor: 'white',
						textColor: 'white',
						trailColor: '#343434',
						backgroundColor: '#3e98c7',
					})}
				/>
			</div>
			<Table data={nominations} renderRow={RenderRow} />
		</div>
	);
};

export default NominationInfo;
