import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { Link } from 'react-router-dom';
import { cn } from './utils/cn';
import { useTheme } from './theme/useTheme';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={cn('app', theme)}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to='/'> Home</Link>
			<Link to='/about'>About</Link>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
			</Routes>
		</div>
	);
};
