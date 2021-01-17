import React from 'react';
import clsx from 'clsx';

interface SidePanelProps {
	className?: string;
	children?: React.ReactNode;
}

const SidePanel = ({ className, children }: SidePanelProps) => (
	<div className={clsx(className, 'bg-blue-600 w-1/3 md:max-w-xs lg:max-w-sm p-6 rounded-3xl shadow-xl max-h-full')}>
		{ children }
	</div>
);

SidePanel.defaultProps = {
	className: '',
	children: null,
};

export default SidePanel;
