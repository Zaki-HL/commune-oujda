import './index.scss';
import React from 'react';
import ArLanding from './ArLanding';
import Articles from './Ararticles';
import ArMap from './ArMap';

const ArHome = () => {
	return (
		<>
			<ArLanding />
			<Articles />
			<ArMap />
		</>
	);
};

export default ArHome;
