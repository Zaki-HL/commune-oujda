import './index.scss';
import React from 'react';
import ArLanding from './ArLanding';
import Articles from './Ararticles';
import ArMap from './ArMap';
import ArLogoSlider from './ArLogoSlider';

const ArHome = () => {
	return (
		<>
			<ArLanding />
			<Articles />
			<ArLogoSlider/>
			<ArMap />
		</>
	);
};

export default ArHome;
