import { cn } from 'shared/lib/cn';
import styles from './Navbar.module.scss';
import { AppLink } from 'shared/ui';

interface Props {
	className?: string;
}
export const Navbar: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(styles.navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink to={'/'} className={styles.mainLink}>
					Главная
				</AppLink>
				<AppLink variant='red' to={'/about'}>
					О сайте
				</AppLink>
			</div>
		</div>
	);
};
