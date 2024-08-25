import React from 'react';
import styles from './Counter.module.scss';

interface Props {
	className?: string;
}

export const Counter: React.FC<Props> = ({ className }) => {
	const [value, setValue] = React.useState(0);

	return (
		<div className={className}>
			<h1 className={styles.title}>{value}</h1>
			<button className={styles.button} onClick={() => setValue(prev => prev + 1)}>
				+
			</button>
			<button className={styles.button} onClick={() => setValue(prev => prev - 1)}>
				-
			</button>
		</div>
	);
};
