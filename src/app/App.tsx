import './styles/index.scss';
import { cn } from '../shared/lib/cn';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={cn('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
		</div>
	);
};
