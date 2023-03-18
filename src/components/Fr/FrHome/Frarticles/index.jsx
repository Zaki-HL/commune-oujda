import './index.scss';
import React from 'react';
import presidentImg from '/imgs/president.jpg';
import imgArticle2 from '/imgs/article2.png';
import imgEvenement1 from '/imgs/evenement1.jpeg';
import imgServices from '/imgs/services1.jpeg';
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
					<div className="card text-bg-dark">
						<img
							src={presidentImg}
							className="card-img custom-filter"
							alt="..."
						/>
						<div className="card-img-overlay d-flex align-items-end justify-content-center">
							<h5 className="card-title  p-2 p-md-1">El AZZAOUI Mohammeed</h5>
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
			<h4 className="evenements" style={{ fontStyle: 'italic' }}>
				Evénements
			</h4>
			{/* Ligne 2 evenement*/}
			<div id="carouselExampleCaptions" className="carousel slide mt-3">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						class="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={even4} className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>shi is all in at CISCO LIVE</h5>
							<p>June 28-16, 2023 | Las Vegas, Nevada | Booth 2542.</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src={even2} className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>ERP</h5>
							<p>June 28-16, 2023 | Las Vegas, Nevada | Booth 2542..</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src={even3} className="d-block w-100" alt="..." />
						<div class="carousel-caption d-none d-md-block">
							<h5>DOMO PALOOZA</h5>
							<p>June 28-16, 2023 | Las Vegas, Nevada | Booth 2542.</p>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<button type="button" className="btn btn-outline-secondary btn-sm mt-1">
				voir plus
			</button>
			{/* Ligne 3*/}

			<div className="row mt-5 align-items-center">
				<div className="col-md-4">
					{/*start announces*/}
					<h4 className="announces" style={{ fontStyle: 'italic' }}>
						Announces
					</h4>
					<div
						className="card col-4 col-md-12 d-md-flex m-md-1"
						style={{ width: '18rem' }}
					>
						<div className="card-body">
							<h5
								className="card-title"
								style={{ fontStyle: 'italic', fontWeight: 'bold' }}
							>
								16 Mars 2023
							</h5>
							<p className="card-text">
								With supporting text below as a natural lead-in to additional
								content.
							</p>
							<a href="#" className="btn btn-outline-secondary">
								Voir plus
							</a>
						</div>
					</div>

					<div
						className="card col-4 col-md-12 d-md-flex m-md-1"
						style={{ width: '18rem' }}
					>
						<div className="card-body">
							<h5
								className="card-title"
								style={{ fontStyle: 'italic', fontWeight: 'bold' }}
							>
								17 Mars 2023
							</h5>
							<p className="card-text">
								With supporting text below as a natural lead-in to additional
								content.
							</p>
							<a href="#" className="btn btn-outline-secondary">
								Voir plus
							</a>
						</div>
					</div>

					<div
						className="card col-4 col-md-12 d-md-flex m-md-1"
						style={{ width: '18rem' }}
					>
						<div className="card-body">
							<h5
								className="card-title"
								style={{ fontStyle: 'italic', fontWeight: 'bold' }}
							>
								18 Mars 2023
							</h5>
							<p className="card-text">
								With supporting text below as a natural lead-in to additional
								content.
							</p>
							<a href="#" className="btn btn-outline-secondary">
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
				{/*start entreprise */}

				{/*end entreprise */}
			</div>
		</div>
	);
};

export default Articles;
