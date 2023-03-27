import './index.scss';
import React from 'react';
import FrLanding from './FrLanding';
import Articles from './Frarticles';
import FrMap from './FrMap';

const FrHome = () => {
	return (
		<>
			<FrLanding />
			<Articles />
			<FrMap />
		</>
	);
};

export default FrHome;
