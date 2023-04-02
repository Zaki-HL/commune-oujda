import './index.scss';
import React from 'react';
import FrLanding from './FrLanding';
import Articles from './Frarticles';
import FrMap from './FrMap';
// import FrLogoSlider from './FrLogoSlider';

const FrHome = () => {
	return (
		<>
			<FrLanding />
			<Articles />
			{/* <FrLogoSlider /> */}
			<FrMap />
		</>
	);
};

export default FrHome;
