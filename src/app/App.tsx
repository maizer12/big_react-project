import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { Link } from 'react-router-dom';
import { cn } from '../shared/lib/cn';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { Suspense } from 'react';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={cn('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to='/'> Home</Link>
			<Link to='/about'>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};
