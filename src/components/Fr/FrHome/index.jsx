import './index.scss';
import React from 'react';
import FrLanding from './FrLanding';
import Articles from './Frarticles';
import FrMap from './FrMap';
import Frlogoslider from './Frlogoslider';

const FrHome = () => {
	return (
		<>
			<FrLanding />
			<Articles />
			<FrMap />
			<Frlogoslider/>
		</>
	);
};

export default FrHome;
