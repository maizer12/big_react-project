import React from 'react';
import styles from './Counter.module.scss';

interface Props {
	className?: string;
}

export const Counter: React.FC<Props> = ({ className }) => {
	const [count, setCount] = React.useState(0);

	return (
		<div className={className}>
			<h1 className={styles.title}>{count}</h1>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={() => setCount(count - 1)}>-</button>
		</div>
	);
};
