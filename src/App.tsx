import React from 'react';
import { Counter } from './components/Counter';

interface Props {
	className?: string;
}

export const App: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Counter />
		</div>
	);
};
