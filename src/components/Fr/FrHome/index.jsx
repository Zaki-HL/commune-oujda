import './index.scss';
import React from 'react';
import FrLanding from './FrLanding';
import Articles from './Frarticles';
import Map from './FrLocation';

const FrHome = () => {
	return (
		<>
			<FrLanding />
			<Articles />
			<Map />
		</>
	);
};

export default FrHome;
