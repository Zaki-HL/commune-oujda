import './index.scss';
import React from 'react';
import aziz from '/imgs/aziz.jpg';
import imgArticle2 from '/imgs/article2.png';
import imgEvenement1 from '/imgs/evenement1.jpeg';
import imgServices from '/imgs/services1.jpeg';
import imgChiffres from '/imgs/chiffres.jpg';

const Articles = () => {
	return (
		<div className="container">
			{/* Ligne 1 */}
			<div className="row mt-5 align-items-center">
				<div className="col-md-5">
					{/* Start President */}
					<div className="card text-bg-dark">
						<img src={aziz} className="card-img custom-filter" alt="..." />
						<div className="card-img-overlay d-flex align-items-end justify-content-center">
							<h5 className="card-title  p-2 p-md-1">President nom</h5>
						</div>
						{/* End President */}
					</div>
				</div>
				<div className="col-md-7 mt-3 mt-md-0 ">
					{/* Start Article */}
					<div className="card text-bg-dark">
						<img
							src={imgArticle2}
							className="card-img h-100 custom-filter"
							alt="..."
						/>
						<div className="card-img-overlay d-flex flex-column justify-content-end fw-bold">
							<small>14 Mars 2023</small>
							<h3 className="card-title text-start">
								Le Maroc a la biennale DefExpo en Inde - Médias24
							</h3>
						</div>
					</div>
					{/* End Article */}
				</div>
			</div>
			{/* Ligne 2 */}
			<div className="card text-bg-dark mt-3 mt-md-4">
				<img src={imgEvenement1} className="card-img custom-filter" alt="..." />
				<div className="card-img-overlay d-flex flex-column justify-content-end fw-bold">
					<small>13 Mars 2023</small>
					<h3 className="card-title fs-4 text-start">
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
								<a href="#">
									Annonce de la liste des candidats aux entretiens...
								</a>
							</div>
						</div>
						<div className="col-4 col-md-12 d-md-flex m-md-1">
							<div className="annonces bg-secondary text-center p-3 me-md-1">
								<h1>17</h1>
								<h4>Jan</h4>
							</div>
							<div className="lien bg-warning">
								<a href="#">
									Annonce de la liste des candidats aux entretiens...
								</a>
							</div>
						</div>
						<div className="col-4 col-md-12 d-md-flex m-md-1">
							<div className="annonces bg-secondary text-center p-3 me-md-1">
								<h1>19</h1>
								<h4>Jan</h4>
							</div>
							<div className="lien bg-warning">
								<a href="#">
									Annonce de la liste des candidats aux entretiens...
								</a>
							</div>
						</div>
						<button className="btn bg-secondary mx-auto mt-3 p-2 text-light btn_1">
							Voir plus
						</button>
					</div>
					{/*end annonces*/}
				</div>
				{/*start services*/}
				<div className="col-md-7 mt-3 ms-auto">
					<div className="row">
						<div className="col-12">
							<div className="card text-bg-dark">
								<img src={imgServices} className="card-img" alt="..." />
								<div className="card-img-overlay d-flex align-items-end justify-content-center">
									<button className="btn bg-secondary text-light">
										Services
									</button>
								</div>
							</div>
						</div>
						{/*end services*/}
						{/*start chiffres*/}
						<div className="col-12 mt-3">
							<div className="card text-bg-dark">
								<img
									src={imgChiffres}
									className="card-img h-100 custom-filter "
									alt="..."
								/>
								<div className="card-img-overlay d-flex flex-column justify-content-center fw-bold">
									<h3 className="card-title">
										<span>CHIFFRES-CLÉS</span>
									</h3>
									<div className="d-flex align-items-center justify-content-center">
										<div className="tmin p-3 py-4 flex-fill bg-light text-dark d-flex align-items-center text-center">
											+720k habitants
										</div>
										<div className="tmin p-3 py-4 flex-fill bg-warning mx-2 d-flex align-items-center text-center">
											30% text
										</div>
										<div className="tmin p-3 py-4 flex-fill bg-danger mx-2 d-flex align-items-center text-center">
											color red
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-center">
										<div className="tmin p-3 py-4 flex-grow-1 bg-primary mt-2 d-flex align-items-center justify-content-center text-center">
											350k voiture
										</div>
										<div className="tmin p-3 py-4 bg-secondary mt-2 mx-2 d-flex align-items-center text-center">
											navbar
										</div>
										<div className="tmin p-3 py-4 bg-info mt-2 d-flex align-items-center text-center">
											color info
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*end chiffres*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Articles;
