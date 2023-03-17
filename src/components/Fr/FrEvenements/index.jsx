import React from 'react';
import { Link } from 'react-router-dom';
import festival from '/imgs/festivale.jpg';
import dance from '/imgs/dance.png';
import sience from '/imgs/sience.jfif';
import ump from '/imgs/ump.jpg';
import femme from '/imgs/femme.jpg';
import livre from '/imgs/livre.png';

const FrEvenements = () => {
	return (
		<>
			<div className="container">
				{/* Start Title */}
				<h1 className="articles mt-5 text-center"> Evenements </h1>
				{/* End Title */}

				{/* Start line 1 */}
				<div className="card-deck row mt-5 align-items-center">
					{/* Start Evenement 1 */}
					<div className="col-sm-12 col-md-6 col-lg-3 my-3">
						<Link to="1">
							<div className="card bg-dark text-white">
								<img
									className="card-img custom-filter"
									src={festival}
									alt="Card image"
									style={{ height: '350px' }}
								/>
								<div className="card-img-overlay d-flex flex-column justify-content-end">
									<h4 className="card-title text-start fs-6">
										Festival Action: Danse 7 Oujda & Casablanca Au programme
										:Gaby Saranouffi Low Rize...
									</h4>
									<p className="card-text">1er au 9 mai</p>
								</div>
							</div>
						</Link>
					</div>
					{/* End Evenement 1 */}

					{/* Start Evenement 2 */}
					<div className="col-sm-12 col-md-6 col-lg-3 my-3">
						<div className="card bg-dark text-white">
							<img
								className="card-img custom-filter"
								src={dance}
								alt="Card image"
								style={{ height: '350px' }}
							/>
							<div className="card-img-overlay d-flex flex-column justify-content-end">
								<h4 className="card-title text-start fs-6">
									Inscriptions ouvertes, 3 passages sur scène dans la journée
									🤩Vous avez un groupe de Danse...
								</h4>
								<p className="card-text">26 Mars 2023</p>
							</div>
						</div>
						
					</div>
					{/* End Evenement 2 */}

					{/* Start Evenement 3 */}
					<div className="col-sm-12 col-md-6 col-lg-3 my-3">
						<div className="card bg-dark text-white">
							<img
								className="card-img custom-filter"
								src={sience}
								alt="Card image"
								style={{ height: '350px' }}
							/>
							<div className="card-img-overlay d-flex flex-column justify-content-end">
								<h4 className="card-title text-start fs-6">
									Oujda : 9ème édition du Festival des sciences de l’Oriental
								</h4>
								<p className="card-text">6 mai 2023</p>
							</div>
						</div>
					</div>
					{/* End Evenement 3 */}

					{/* Start Evenement 4 */}
					<div className="col-sm-12 col-md-6 col-lg-3 my-3">
						<div className="card bg-dark text-white">
							<img
								className="card-img custom-filter"
								src={ump}
								alt="Card image"
								style={{ height: '350px' }}
							/>
							<div className="card-img-overlay d-flex flex-column justify-content-end">
								<h4 className="card-title text-start fs-6">
									Oujda... L’Université Mohammed I participe à la commémoration
									du 20e anniversaire de l’Initiative royale de développement de
									l’Est
								</h4>
								<p className="card-text">13 Mars 2023</p>
							</div>
						</div>
					</div>
					{/* End Evenement 4 */}
					{/* Start Evenement 5 */}
					<div className="col-sm-12 col-md-6 col-lg-3 my-3">
						<div className="card bg-dark text-white">
							<img
								className="card-img custom-filter"
								src={femme}
								alt="Card image"
								style={{ height: '350px' }}
							/>
							<div className="card-img-overlay d-flex flex-column justify-content-end">
								<h4 className="card-title text-start fs-6">
									Joyeuse journée de la femme
								</h4>
								<p className="card-text">8 mars 2023</p>
							</div>
						</div>
					</div>
					{/* End Evenement 5 */}

					{/* Start Evenement 6 */}
					<div className="col-sm-12 col-md-6 col-lg-3 my-3">
						<div className="card bg-dark text-white">
							<img
								className="card-img custom-filter"
								src={livre}
								alt="Card image"
								style={{ height: '350px' }}
							/>
							<div className="card-img-overlay d-flex flex-column justify-content-end">
								<h4 className="card-title text-start fs-6">
									La Nuit de la Poésie - Frontières
								</h4>
								<p className="card-text">31 mars 2023</p>
							</div>
						</div>
					</div>
					{/* End Evenement 6 */}
				</div>
				{/* End line 1 */}
			</div>
		</>
	);
};

export default FrEvenements;
