import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useSelector } from 'react-redux';
import { MovieData } from '../../state/ducks/searchResults';
import { RootState } from '../../state/store';
import Table from '../../components/table/Table';
import RenderRow from './RenderRow';

const NominationInfo = () => {
	const nominations = useSelector<RootState, MovieData[]>((state) => state.nominations);

	return (
		<div className="flex flex-col items-center">
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
