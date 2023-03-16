import React from 'react';
import babSidi from '/imgs/Night.jpg';
import coteOuest from '/imgs/cote-ouest.jpg';
import entreeParc from '/imgs/l-entree-du-parc-1.jpg';
import Elmedina from '/imgs/Ville-Oujda-Maroc.jpg';
import BabElgharbi from '/imgs/bab-sidi.jpg';
import SidiYahya from '/imgs/SidiYahya.jpg';
import Karan from '/imgs/karan.jpg';
import Kaak from '/imgs/kaak.jfif';
import berkoukch from '/imgs/1-berkoukes.jpg';
import boudin from '/imgs/boudin.jpeg';

const FrMaVille = () => {
	return (
		<>
			<div
				id="carouselExampleCaptions"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
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
						<img src={babSidi} className="d-block w-100" />
						<div className="carousel-caption">
							<h5>Bab Sidi Abdelwahab</h5>
						</div>
					</div>
					<div className="carousel-item">
						<img src={coteOuest} class="d-block w-100" />
						<div class="carousel-caption">
							<h5>Parc Lalla Meryem</h5>
						</div>
					</div>
					<div className="carousel-item">
						<img src={entreeParc} className="d-block w-100" />
						<div className="carousel-caption">
							<h5>Parc Lalla Aicha </h5>
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
			<h2 className="text-center mt-5">Sur Oujda</h2>
			<div
				style={{ margin: '8px' }}
				className="row row-cols-1 row-cols-md-3 g-4 "
			>
				<div className="col">
					<div className="card h-100">
						<div className="card-body">
							<h5 className="card-title">La ville Oujda</h5>
							<p className="card-text">
								Oujda est une ville située dans l'est du Maroc, près de la
								frontière avec l'Algérie. Elle est la préfecture de la région de
								l'Oriental et compte environ 500 000 habitants. La ville est
								connue pour son patrimoine historique et culturel. Elle possède
								de nombreux monuments et sites touristiques, tels que la Médina
								d'Oujda, la Grande Mosquée, la Kasbah de Oujda, la Place
								Mohammed VI, la Place du 16 Novembre et le Musée de Oujda. Oujda
								est également un centre économique important de la région. Elle
								possède un aéroport international et une gare ferroviaire qui la
								relie aux principales villes du Maroc.
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<div className="card-body">
							<h5 className="card-title">Les habitants d'Oujda (Wjada)</h5>
							<p className="card-text">
								Les habitants d'Oujda sont connus pour leur hospitalité et leur
								gentillesse envers les visiteurs. Ils sont souvent décrits comme
								chaleureux, accueillants et ouverts d'esprit. La ville est
								également connue pour sa diversité culturelle, avec des
								influences marocaines, arabes et berbères.Les habitants d'Oujda
								sont fiers de leur patrimoine culturel et historique, et ils
								sont souvent très attachés à leur ville et à leur région. Ils
								sont également connus pour leur sens de la communauté et leur
								esprit de solidarité.
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<div className="card-body">
							<h5 className="card-title">Les Traditions </h5>
							<p className="card-text">
								Les habitants d'Oujda ont une culture riche en traditions et
								coutumes locales. Voici quelques-unes des traditions les plus
								importantes de la ville et de la région :La fête du Mouloud :
								c'est la célébration de la naissance du prophète Mohammed. Elle
								est célébrée chaque année à Oujda et dans toute la région de
								l'Oriental. Elle est souvent associée à des rituels religieux et
								est jouée avec des instruments tels que le guembri, le krakebs
								et le tbel.
							</p>
						</div>
					</div>
				</div>
			</div>
			<h3 className="text-center mt-5">Que devriez-vous visiter ?</h3>
			<div className="container p-5 d-flex flex-column align-items-center">
				<div className="card mb-3" style={{ maxWidth: '540px' }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src={Elmedina}
								className="img-fluid w-100 h-100 object-fit-cover rounded-start"
								alt="Card Image"
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">La Médina d'Oujda</h5>
								<p className="card-text">
									{' '}
									La vieille ville d'Oujda regorge de ruelles étroites et
									sinueuses bordées de bâtiments historiques en terre. C'est un
									endroit idéal pour découvrir l'architecture et la culture
									marocaines.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="card mb-3" style={{ maxWidth: '540px' }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src={SidiYahya}
								className="img-fluid w-100 object-fit-cover rounded-start"
								alt="Card Image"
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">Sidi Yahya</h5>
								<p className="card-text">
									Cette porte historique est un monument important de la ville.
									Elle date du 18ème siècle et est décorée de mosaïques et de
									motifs traditionnels.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="card mb-3" style={{ maxWidth: '540px' }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src={BabElgharbi}
								className="img-fluid w-100 h-100 object-fit-cover rounded-start"
								alt="Card Image"
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">Bab El Gharbi</h5>
								<p className="card-text">
									Bab El Gharbi est une des portes historiques de la ville
									d'Oujda, située dans l'est du Maroc. Cette porte est
									considérée comme l'un des principaux symboles de la ville{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h3 className="m-5 text-center">Qu’est-ce que tu devrais goûter ?</h3>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-8 col-lg-6">
						<div className="card mb-3">
							<div className="row g-0">
								<div className="col-md-4">
									<img
										src={Karan}
										className="img-fluid object-fit-cover rounded-start h-100"
										alt="Card Image"
									/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">Karan</h5>
										<p className="card-text">
											Karan une spécialité salée à base de farine de pois
											chiches que l'on déguste sous forme de sandwich dans un
											morceau de baguette, le tout saupoudré de cumin; pourquoi
											de cumin? Tout simplement pour éviter les ballonnements
											dus à la farine de pois chiches{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-8 col-lg-6">
						<div className="card mb-3">
							<div className="row g-0">
								<div className="col-md-4">
									<img
										src={Kaak}
										className="img-fluid object-fit-cover rounded-start h-100"
										alt="Card Image"
									/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">Kaak</h5>
										<p className="card-text">
											Le kâak ou plus correctement ka‘ak, littéralement « gâteau
											» en arabe classique, est un terme qui peut désigner
											plusieurs pâtisseries maghrébines et orientales sous forme
											d'anneaux{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-8 col-lg-6">
						<div className="card mb-3">
							<div className="row g-0">
								<div className="col-md-4">
									<img
										src={berkoukch}
										className="img-fluid object-fit-cover object-fit-cover rounded-start h-100"
										alt="Card Image"
									/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">Barkoukche</h5>
										<p className="card-text">
											Le berkoukes, appelé aussi berkoukech, avazine ou aïch,
											est un plat traditionnel du Maghreb, préparé à base de
											pâtes en forme de gros grains de couscous, de légumes de
											saison et de viande{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-8 col-lg-6">
						<div className="card mb-3">
							<div className="row g-0">
								<div className="col-md-4">
									<img
										src={boudin}
										className="img-fluid rounded-start h-100"
										alt="Card Image"
									/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">Boudin</h5>
										<p className="card-text">
											Le boudin est une préparation de charcuterie mise dans des
											boyaux. Il se consomme froid ou chaud.{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default FrMaVille;
