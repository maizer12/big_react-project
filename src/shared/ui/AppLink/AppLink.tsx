import { LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';
import { Link } from 'react-router-dom';
import { cn } from 'shared/lib/cn';

interface Props extends LinkProps {
	className?: string;
	children?: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'red';
}
export const AppLink: React.FC<Props> = ({ className, variant = 'primary', children, ...props }) => {
	return (
		<Link className={cn(className, {}, [styles[variant]])} {...props}>
			{children}
		</Link>
	);
};
