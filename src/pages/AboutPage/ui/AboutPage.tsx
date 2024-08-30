import React from 'react';

interface Props {
	className?: string;
}

const AboutPage: React.FC<Props> = ({ className }) => {
	return <div className={className}>AboutPage</div>;
};

export default AboutPage;
