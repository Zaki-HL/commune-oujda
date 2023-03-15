import React from 'react';
import './index.scss';
import imgArticle2 from '/imgs/article2.png';
import imgEvenement1 from '/imgs/evenement1.jpeg';
import imgImage1 from '/imgs/image1.jpeg';
import imgImage2 from '/imgs/image2.jpeg';
import imgImage3 from '/imgs/image3.jpeg';
import imgImage4 from '/imgs/image4.jpeg';
import imgHajj from '/imgs/hajj.jpeg';
import imgUneimage from '/imgs/uneimage.jpeg';
import { Link } from 'react-router-dom';

const FrArticles = () => {
	return (
		<div className="container">
			{/* Start Title */}
			<h1 className="articles mt-5 text-center"> Articles </h1>
			{/* End Title */}

			{/* Start line 1 */}
			<div className="card-deck row mt-5 align-items-center">
				{/* Start Article 1 */}
				<div className="col-sm-12 col-md-6 col-lg-3 my-3">
					<Link to="1">
						<div className="card bg-dark text-white">
							<img
								className="card-img custom-filter"
								src={imgArticle2}
								alt="Card image"
								style={{ height: '200px' }}
							/>
							<div className="card-img-overlay d-flex flex-column justify-content-end">
								<h4 className="card-title text-start fs-6">
									Le Maroc a la biennale DefExpo en Inde - Médias24
								</h4>
								<p className="card-text">14 Mars 2023</p>
							</div>
						</div>
					</Link>
				</div>
				{/* End Article 1 */}

				{/* Start Article 2 */}
				<div className="col-sm-12 col-md-6 col-lg-3 my-3">
					<div className="card bg-dark text-white">
						<img
							className="card-img custom-filter"
							src={imgEvenement1}
							alt="Card image"
							style={{ height: '200px' }}
						/>
						<div className="card-img-overlay d-flex flex-column justify-content-end">
							<h4 className="card-title text-start fs-6">
								Oujda-Angad : Approbation d'une série de projets INDH à fort
								impact socio-économique
							</h4>
							<p className="card-text">13 Mars 2023</p>
						</div>
					</div>
				</div>
				{/* End Article 2 */}

				{/* Start Article 3 */}
				<div className="col-sm-12 col-md-6 col-lg-3 my-3">
					<div className="card bg-dark text-white">
						<img
							className="card-img custom-filter"
							src={imgImage1}
							alt="Card image"
							style={{ height: '200px' }}
						/>
						<div className="card-img-overlay d-flex flex-column justify-content-end">
							<h4 className="card-title text-start fs-6">
								OFPPT : Quatre nouvelles Cités des Métiers et des Compétences
								ouvriront leurs portes en 2023
							</h4>
							<p className="card-text">13 mars 2023</p>
						</div>
					</div>
				</div>
				{/* End Article 3 */}

				{/* Start Article 4 */}
				<div className="col-sm-12 col-md-6 col-lg-3 my-3">
					<div className="card bg-dark text-white">
						<img
							className="card-img custom-filter"
							src={imgHajj}
							alt="Card image"
							style={{ height: '200px' }}
						/>
						<div className="card-img-overlay d-flex flex-column justify-content-end">
							<h4 className="card-title text-start fs-6">
								Hajj 1444: la 2e phase du paiement des frais du 23 au 29 mars
							</h4>
							<p className="card-text">13 Mars 2023</p>
						</div>
					</div>
				</div>
				{/* End Article 4 */}
				{/* Start Article 5 */}
				<div className="col-sm-12 col-md-6 col-lg-3 my-3">
					<div className="card bg-dark text-white">
						<img
							className="card-img custom-filter"
							src={imgImage2}
							alt="Card image"
							style={{ height: '200px' }}
						/>
						<div className="card-img-overlay d-flex flex-column justify-content-end">
							<h4 className="card-title text-start fs-6">
								Le Maroc doit adapter son économie à la menace climatique
								croissante (Nadia Fettah)
							</h4>
							<p className="card-text">12 mars 2023</p>
						</div>
					</div>
				</div>
				{/* End Article 5 */}

				{/* Start Article 6 */}
				<div className="col-sm-12 col-md-6 col-lg-3 my-3">
					<div className="card bg-dark text-white">
						<img
							className="card-img custom-filter"
							src={imgImage3}
							alt="Card image"
							style={{ height: '200px' }}
						/>
						<div className="card-img-overlay d-flex flex-column justify-content-end">
							<h4 className="card-title text-start fs-6">
								Appel à communication pour la 3e conférence «Marchés du travail
								et transformations structurelles»
							</h4>
							<p className="card-text">12 mars 2023</p>
						</div>
					</div>
				</div>
				{/* End Article 6 */}

				{/* Start Article 7 */}
				<div className="col-sm-12 col-md-6 col-lg-3 my-3">
					<div className="card bg-dark text-white">
						<img
							className="card-img custom-filter"
							src={imgImage4}
							alt="Card image"
							style={{ height: '200px' }}
						/>
						<div className="card-img-overlay d-flex flex-column justify-content-end">
							<h4 className="card-title text-start fs-6">
								Programme ProFuturo : La Fondation BMCE Bank pour l’Education et
								l’Environnement enrichit son programme d’éducation numérique
							</h4>
							<p className="card-text">11 mars 2023</p>
						</div>
					</div>
				</div>
				{/* End Article 7 */}

				{/* Start Article 8 */}
				<div className="col-sm-12 col-md-6 col-lg-3 my-3">
					<div className="card bg-dark text-white">
						<img
							className="card-img custom-filter"
							src={imgUneimage}
							alt="Card image"
							style={{ height: '200px' }}
						/>
						<div className="card-img-overlay d-flex flex-column justify-content-end">
							<h4 className="card-title text-start fs-6">
								Libertés fondamentales: structurées et audacieuses, les
								propositions de réforme d'un collectif inédit
							</h4>
							<p className="card-text">10 mars 2023</p>
						</div>
					</div>
				</div>
				{/* End Article 8 */}
			</div>
			{/* End line 1 */}
		</div>
	);
};

export default FrArticles;
