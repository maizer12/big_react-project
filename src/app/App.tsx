import './styles/index.scss';
import { cn } from '../shared/lib/cn';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

function MyComponent() {
	const { t, i18n } = useTranslation();

	return <h1>{t('Перевод')}</h1>;
}

export const App = () => {
	const { theme } = useTheme();

	return (
		<div className={cn('app', {}, [theme])}>
			<Suspense fallback={<div>Loading...</div>}>
				<Navbar />
				<div className='content-page'>
					<Sidebar />
					<AppRouter />
				</div>
				<MyComponent />
			</Suspense>
		</div>
	);
};
