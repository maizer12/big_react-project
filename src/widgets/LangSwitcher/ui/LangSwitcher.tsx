import { Button } from 'shared/ui';
import styles from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/cn';

interface Props {
	className?: string;
}
export const LangSwitcher: React.FC<Props> = ({ className }) => {
	const { t, i18n } = useTranslation();

	const toggle = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button className={cn(styles.LangSwitcher, {}, [className])} variant='clear' onClick={toggle}>
			{t('Язык')}
		</Button>
	);
};
