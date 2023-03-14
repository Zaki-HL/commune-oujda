import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
	MDBFooter,
	MDBContainer,
	MDBIcon,
	MDBInput,
	MDBCol,
	MDBRow,
	MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const FrFooter = () => {
	return (

		<>
			<MDBFooter
				className="text-center"
				color="white"
				style={{ backgroundColor: 'rgba(53,59,65)' }}
			>
				<MDBContainer className="p-4">
					<section className="mb-4">
						<MDBBtn
							outline
							color="light"
							floating
							className="m-1"
							href="#!"
							role="button"
						>
							<div>
								<FontAwesomeIcon icon={faFacebook} />
							</div>
						</MDBBtn>

						<MDBBtn
							outline
							color="light"
							floating
							className="m-1"
							href="#!"
							role="button"
						>
							<div>
								<FontAwesomeIcon icon={faTwitter} />
							</div>
						</MDBBtn>

						<MDBBtn
							outline
							color="light"
							floating
							className="m-1"
							href="#!"
							role="button"
						>
							<div>
								<FontAwesomeIcon icon={faInstagram} />
							</div>
						</MDBBtn>
					</section>

					<section className="">
						<form action="">
							<MDBRow className="d-flex justify-content-center">
								<MDBCol size="auto">
									<p className="pt-2">
										<strong>Entrer votre E-mail</strong>
									</p>
								</MDBCol>

								<MDBCol md="5" start>
									<MDBInput
										contrast
										type="email"
										label="Email address"
										className="mb-4"
									/>
								</MDBCol>

								<MDBCol size="auto">
									<MDBBtn outline color="light" type="submit" className="mb-4">
										M'inscrire
									</MDBBtn>
								</MDBCol>
							</MDBRow>
						</form>
					</section>

					<section className="mb-4">
						<p>OUJDA site officiel de la Commune</p>
					</section>

					<section className="">
						<MDBRow>
							<MDBCol lg="4" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Communes</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a
											href="https://www.casablancacity.ma/fr"
											className="text-white"
										>
											Casablanca
										</a>
									</li>
									<li>
										<a href="https://agadir.ma/fr/" className="text-white">
											Agadir
										</a>
									</li>
									<li>
										<a
											href="https://mairiederabat.ma/fr-FR"
											className="text-white"
										>
											Rabat
										</a>
									</li>
								</ul>
							</MDBCol>

							<MDBCol lg="4" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Arrondissements</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a
											href="https://mapcarta.com/fr/25436958"
											className="text-white"
										>
											Ahl Angad
										</a>
									</li>
									<li>
										<a
											href="https://mapcarta.com/fr/17411306"
											className="text-white"
										>
											Sidi Yahya
										</a>
									</li>
									<li>
										<a
											href="https://mapcarta.com/fr/34260640"
											className="text-white"
										>
											Hay El Fath
										</a>
									</li>
								</ul>
							</MDBCol>

							<MDBCol lg="4" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Liens Rapides</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<Link to="evenements" className="text-white">
											Evénements
										</Link>
									</li>
									<li>
										<Link to="ma-ville" className="text-white">
											Ma-Ville
										</Link>
									</li>
									<li>
										<Link to="articles" className="text-white">
											Articles
										</Link>
									</li>
								</ul>
							</MDBCol>
						</MDBRow>
					</section>
				</MDBContainer>

				<div
					className="text-center p-3"
					style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
				>
					© 2023 Copyright <span>: </span>
					Commune Oujda
				</div>
			</MDBFooter>
		</>

	);
};

export default FrFooter;
