import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

export const useTheme = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
		setTheme(newTheme);
	};

	return {
		theme,
		toggleTheme,
	};
};
