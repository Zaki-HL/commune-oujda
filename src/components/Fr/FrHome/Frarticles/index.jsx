import './index.scss';
import React from 'react';
import aziz from '/imgs/aziz.jpg';
import myImage1 from '/imgs/1.jpg';
import article2 from '/imgs/article2.png';
import evenement1 from '/imgs/evenement1.jpeg';
import services from '/imgs/services1.jpeg';
import chiffres from '/imgs/chiffres.jpg';

const Articles = () => {
	return (
		<div className="container">
			{/* Ligne 1 */}
			<div className="row mt-5 align-items-center">
				<div className="col-md-5">
					{/* Start President */}
					<div className="card text-bg-dark">
						<img src={aziz} className="card-img" alt="..." />
						<div className="card-img-overlay d-flex align-items-end justify-content-center">
							<h5 className="presi card-title  p-2 p-md-1">President maroc</h5>
						</div>
						{/* End President */}
					</div>
				</div>
				<div className="col-md-7 mt-3 mt-md-0 ">
					{/* Start Article */}
					<div className="card text-bg-dark">
						<img
							src={article2}
							className="card-img h-100 custom-filter"
							alt="..."
						/>
						<div className="card-img-overlay d-flex flex-column justify-content-end fw-bold">
							<small>14 Mars 2023</small>
							<h3 className="card-title">
								Le Maroc a la biennale DefExpo en Inde - Médias24
							</h3>
						</div>
					</div>
					{/* End Article */}
				</div>
			</div>
			{/* Ligne 2 */}
			<div className="card text-bg-dark mt-3 mt-md-4">
				<img src={evenement1} className="card-img custom-filter" alt="..." />
				<div className="card-img-overlay d-flex flex-column justify-content-end fw-bold">
					<small>13 Mars 2023</small>
					<h3 className="card-title fs-4">
						Oujda-Angad : Approbation d'une série de projets INDH à fort impact
						socio-économique
					</h3>
				</div>
			</div>
			{/* Ligne 3*/}
			<div className="row mt-5 align-items-center">
				<div className="col-md-4">
					{/*start announces*/}
					<div className="row">
						<div className="col-4 col-md-12 d-md-flex m-md-1">
							<div className="annonces bg-secondary text-center p-3 me-md-1">
								<h1>17</h1>
								<h4>Jan</h4>
							</div>
							<div className="lien bg-warning">
								<h4>
									<a href="#">
										Annonce de la liste des candidats aux entretiens...
									</a>
								</h4>
							</div>
						</div>
						<div className="col-4 col-md-12 d-md-flex m-md-1">
							<div className="annonces bg-secondary text-center p-3 me-md-1">
								<h1>17</h1>
								<h4>Jan</h4>
							</div>
							<div className="lien bg-warning">
								<h4>
									<a href="#">
										Annonce de la liste des candidats aux entretiens...
									</a>
								</h4>
							</div>
						</div>
						<div className="col-4 col-md-12 d-md-flex m-md-1">
							<div className="annonces bg-secondary text-center p-3 me-md-1">
								<h1>19</h1>
								<h4>Jan</h4>
							</div>
							<div className="lien bg-warning">
								<h4>
									<a href="#">
										Annonce de la liste des candidats aux entretiens...
									</a>
								</h4>
							</div>
						</div>
						<div className="col-4 col-md-12 d-md-flex m-md-1">
							<div className="annonces bg-secondary text-center p-3 me-md-1">
								<h1>17</h1>
								<h4>Jan</h4>
							</div>
							<div className="lien bg-warning">
								<h4>
									<a href="#">
										Annonce de la liste des candidats aux entretiens...
									</a>
								</h4>
							</div>
						</div>
						<div className="col-4 col-md-12 d-md-flex m-md-1">
							<div className="annonces bg-secondary text-center p-3 me-md-1">
								<h1>17</h1>
								<h4>Jan</h4>
							</div>
							<div className="lien bg-warning">
								<h4>
									<a href="#">
										Annonce de la liste des candidats aux entretiens...
									</a>
								</h4>
							</div>
						</div>
						<div className="col-4 col-md-12 d-md-flex m-md-1">
							<div className="annonces bg-secondary text-center p-3 me-md-1">
								<h1>17</h1>
								<h4>Jan</h4>
							</div>
							<div className="lien bg-warning">
								<h4>
									<a href="#">
										Annonce de la liste des candidats aux entretiens...
									</a>
								</h4>
							</div>
						</div>
						<button className="btn bg-secondary mx-auto p-2 text-light btn_1">
							Voir plus
						</button>
					</div>
					{/*end annonces*/}
				</div>
				{/*start services*/}
				<div className="col-md-7 mt-3">
					<div className="row">
						<div className="col-12">
							<div className="card text-bg-dark">
								<img src={services} className="card-img" alt="..." />
								<div className="card-img-overlay d-flex align-items-end justify-content-center">
									<button className="btn bg-secondary text-light">Services</button>
								</div>
							</div>
						</div>
						{/*end services*/}
						{/*start chiffres*/}
						<div className="col-12 mt-3">
							<div className="card text-bg-dark">
								<img
									src={chiffres}
									className="card-img h-100 custom-filter "
									alt="..."
								/>
								<div className="card-img-overlay d-flex flex-column justify-content-end fw-bold">
									<h3 className="card-title">
										<span>CHIFFRES-CLÉS</span>
										<div class="d-flex">
											<div class="tmin p-2 flex-fill bg-light text-dark">
												+720k habitants
											</div>
											<div class="tmin p-2 flex-fill bg-warning mx-2">
												30% text
											</div>
											<div class="tmin p-2 flex-fill bg-danger mx-2">
												color red
											</div>
										</div>
										<div class="d-flex">
											<div class="tmin p-2 flex-grow-1 bg-primary mt-2">
												350k voiture
											</div>
											<div class="tmin p-2 bg-secondary mt-2 mx-2">
												navbar
											</div>
											<div class="tmin p-2 bg-info mt-2">color info</div>
										</div>
									</h3>
								</div>
							</div>
						</div>
						{/*end chiffres*/}
					</div>
				</div>
				{/*start map */}
				
			</div>
		</div>
	);
};

export default Articles;
