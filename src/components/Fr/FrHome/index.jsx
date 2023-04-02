import './index.scss';
import React from 'react';
import FrLanding from './FrLanding';
import FrMap from './FrMap';
import President from './Presiden';
import Article from './Article';
import Evenement from './evenement';
import Announces from './Announces';
import Services from './Services';
import Chiffres from './Chiffres';
// import FrLogoSlider from './FrLogoSlider';

const FrHome = () => {
	return (
		<>
			<FrLanding />
			<div className="container">
				<div className="row mt-5 align-items-center">
					<div className="col-md-5">
						<President />
					</div>
					<div className="col-md-7 mt-3 mt-md-0 ">
						<Article />
					</div>
				</div>
				<h4 className="evenements text-center mt-5">Evénements</h4>
				<Evenement />

				<div className="row mt-5 align-items-center">
					<div className="col-12 col-md-4">
						<Announces />
					</div>
					<div className="col-12 col-md-7">
						<Services />
						<Chiffres />
					</div>
				</div>
			</div>
			<div className="container mt-5">
				<FrMap />
			</div>
		</>
	);
};

export default FrHome;
