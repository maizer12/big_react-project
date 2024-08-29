import React from 'react';

interface Props {
	className?: string;
}

export const AboutPage: React.FC<Props> = ({ className }) => {
	return <div className={className}>AboutPage</div>;
};
