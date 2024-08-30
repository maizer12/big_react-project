import React, { FC } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
	const [theme, setTheme] = React.useState<Theme>(defaultTheme);

	const defaultProps = React.useMemo(
		() => ({
			theme: theme,
			setTheme,
		}),
		[theme]
	);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
