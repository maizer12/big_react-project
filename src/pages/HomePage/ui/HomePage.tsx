import React from 'react';

interface Props {
	className?: string;
}
const HomePage: React.FC<Props> = ({ className }) => {
	return <div className={className}> HomePage</div>;
};

export default HomePage;
