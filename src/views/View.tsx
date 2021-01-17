import React from 'react';
import clsx from 'clsx';
import Header from '../components/Header';

interface ViewProps {
	className?: string;
	children?: React.ReactNode;
}

const View = ({ className, children }: ViewProps) => (
	<div className="w-full h-full">
		<Header title="The Shoppies" />
		<div className={clsx(className, 'max-w-screen-xl m-auto')}>
			{ children }
		</div>
	</div>
);

View.defaultProps = {
	className: '',
	children: null,
};

export default View;
