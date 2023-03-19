import './index.scss';
import React from 'react';

import Azzaoui from '/imgs/Azzaoui.jpg';
import imgArticle2 from '/imgs/article2.png';

import imgChiffres from '/imgs/chiffres.jpg';
import even4 from '/imgs/even4.jpg';
import even2 from '/imgs/even2.jpg';
import even3 from '/imgs/even3.jpg';
import service from '/imgs/service.webp';
//import ctm from '/imgs/ctm.png';
//import oncf from '/imgs/oncf.png';
//import onee from '/imgs/onee.png';
//import redeeo from '/imgs/redeeo.png';

const Articles = () => {
	return (
		<div className="container">
			{/* Ligne 1 */}
			<div className="row mt-5 align-items-center">
				<div className="col-md-5">
					{/* Start President */}
					<h4>Président</h4>
					<div className="card text-bg-dark">
						<img src={Azzaoui} className="card-img  custom-filter" alt="..." />
						<div className="card-img-overlay d-flex align-items-end justify-content-center">
							<h5 className="card-title  p-2 p-md-1 nom_president">
								Mohamed El Azzaoui
							</h5>
						</div>
						{/* End President */}
					</div>
				</div>
				<div className="col-md-7 mt-3 mt-md-0 ">
					{/* Start Article */}
					<h4>Articles</h4>
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
			<h4 className="evenements text-center mt-5">Evénements</h4>
			{/* Ligne 2 evenement*/}
			<div className="card-group">
				<div className="card">
					<img src={even4} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Cisco LIVE</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</p>
						<p className="card-text">
							<small className="text-muted">19 Mars 2023</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img src={even2} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">ERP</h5>
						<p className="card-text">
							This card has supporting text below as a natural lead-in to
							additional content.
						</p>
						<p className="card-text">
							<small className="text-muted">21 Mars 2023</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img src={even3} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">DOMO PALOOZA</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This card has even longer content
							than the first to show that equal height action.
						</p>
						<p className="card-text">
							<small className="text-muted">26 Mars 2023</small>
						</p>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center align-items-center mt-2">
				<button type="button" className="btn btn-outline-secondary btn-sm">
					<a href="#" className="text-dark">
						voir plus
					</a>
				</button>
			</div>
			{/* Ligne 3*/}

			<div className="row mt-5 align-items-center">
				<div className="col-12 col-md-4">
					{/*start announces*/}
					<h4 className="announces text-center m-3">Announces</h4>
					<div className="card col-12 col-md-12 d-md-flex m-2 mx-auto">
						<div className="card-body">
							<h5 className="card-title fw-bold">16 Mars 2023</h5>
							<p className="card-text text-center">
								With supporting text below as a natural lead-in to additional
								content.
							</p>
							<a href="#" className="btn btn-outline-secondary d-block">
								Voir plus
							</a>
						</div>
					</div>

					<div className="card col-12 col-md-12 d-md-flex m-2 mx-auto">
						<div className="card-body">
							<h5 className="card-title fw-bold">17 Mars 2023</h5>
							<p className="card-text text-center">
								With supporting text below as a natural lead-in to additional
								content.
							</p>
							<a href="#" className="btn btn-outline-secondary d-block">
								Voir plus
							</a>
						</div>
					</div>

					<div className="card col-12 col-md-12 d-md-flex m-2 mx-auto">
						<div className="card-body">
							<h5 className="card-title fw-bold">18 Mars 2023</h5>
							<p className="card-text text-center">
								With supporting text below as a natural lead-in to additional
								content.
							</p>
							<a href="#" className="btn btn-outline-secondary d-block">
								Voir plus
							</a>
						</div>
					</div>

					{/*end annonces*/}
				</div>
				{/*start services*/}

				<div className="col-md-7 mt-3 ms-auto">
					<div className="row">
						<div className="col-12">
							<div className="card text-bg-dark">
								<img src={service} className="card-img" alt="..." />

								<div className="card-img-overlay d-flex align-items-end justify-content-center">
									<button type="button" className="btn btn-secondary btn-sm">
										voir plus
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
										<div className="d-flex">
											<div className="tmin p-2 flex-fill bg-light text-dark">
												+720k habitants
											</div>
											<div className="tmin p-2 flex-fill bg-warning mx-2">
												30% text
											</div>
											<div className="tmin p-2 flex-fill bg-danger mx-2">
												color red
											</div>
										</div>
										<div className="d-flex">
											<div className="tmin p-2 flex-grow-1 bg-primary mt-2">
												350k voiture
											</div>
											<div className="tmin p-2 bg-secondary mt-2 mx-2">
												navbar
											</div>
											<div className="tmin p-2 bg-info mt-2">color info</div>
										</div>
									</h3>
								</div>
							</div>
						</div>
					</div>
					{/*end chiffres*/}
				</div>
				{/*start partenaires */}

				{/*end partenaires */}
			</div>
			{/*map*/}
		</div>
	);
};

export default Articles;
