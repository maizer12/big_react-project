import { useTheme } from 'app/providers/ThemeProvider';
import styles from './ThemeSwitcher.module.scss';
import { Button } from 'shared/ui';
import NightIcon from '../../../shared/assets/icons/theme-dark.svg';
import LightIcon from '../../../shared/assets/icons/theme-light.svg';

interface Props {
	className?: string;
}
export const ThemeSwitcher: React.FC<Props> = ({ className }) => {
	const { toggleTheme, theme } = useTheme();

	return (
		<Button className={className} onClick={toggleTheme} variant='clear'>
			{theme === 'light' ? <NightIcon /> : <LightIcon />}
		</Button>
	);
};
