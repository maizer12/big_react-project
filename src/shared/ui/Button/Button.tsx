import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import { cn } from 'shared/lib/cn';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	className?: string;
	variant?: 'primary' | 'clear';
}
export const Button: React.FC<Props> = ({ className, variant = 'primary', children, ...props }) => {
	return (
		<button className={cn(styles.Button, {}, [className, styles[variant]])} {...props}>
			{children}
		</button>
	);
};
