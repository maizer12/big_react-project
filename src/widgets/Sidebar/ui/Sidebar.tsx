import { cn } from 'shared/lib/cn';
import styles from './Sidebar.module.scss';
import React from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface Props {
	className?: string;
}
export const Sidebar: React.FC<Props> = ({ className }) => {
	const [collapsed, setCollapsed] = React.useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<aside className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
			<button onClick={onToggle}>toggle</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</aside>
	);
};
