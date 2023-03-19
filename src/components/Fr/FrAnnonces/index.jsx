import React from 'react';
import { Link } from 'react-router-dom';

const FrAnnonces = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="card mt-4 mb-4">
						<div className="card-body p-0">
							<div className="derniersAvis">
								<table className="table table-sm table-striped rounded">
									<thead className="thead-light">
										<tr>
											<th scope="col" className="text-center" width="150">
												Publié le
											</th>
											<th scope="col" className="text-center">
												Dernières annonces
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="odd">
											<td className="dateAvis">
												<Link to="1">
													<div className="annonces text-center">
														<h3>16</h3>
														<h5>Mars</h5>
													</div>
												</Link>
											</td>
											<td>
												<Link to="1">
													<p>
														Publication de la liste des convoqués pour le
														concours de recrutement d'un Technicien de 4ème
														grade ~ Echelle 8
														<strong className="text-danger"> (2) </strong>
														postes au Commune MAKNASSA ACHARQIA (Province Taza)
													</p>
												</Link>
											</td>
										</tr>
										<tr>
											<td className="dateAvis">
												<div className="annonces text-center">
													<h3>16</h3>
													<h5>Mars</h5>
												</div>
											</td>
											<td>
												<p>
													Publication de la liste des convoqués pour l'appel à
													candidature pour le poste Appel à candidature pour le
													poste de Chef de service (Services centraux)
													<strong className="text-danger"> (1) </strong>
													poste au Agence Nationale de la Sécurité Routière
													(NARSA)
												</p>
											</td>
										</tr>
										<tr className="odd">
											<td className="dateAvis">
												<div className="annonces text-center">
													<h3>15</h3>
													<h5>Mars</h5>
												</div>
											</td>
											<td>
												<p>
													Annulation de l'appel à candidature pour le poste
													expert
													<strong className="text-danger"> (1) </strong>
													poste au Ministère de la Transition énergétique et du
													Développement durable - Département du Développement
													durable
												</p>
											</td>
										</tr>
										<tr>
											<td className="dateAvis">
												<div className="annonces text-center">
													<h3>15</h3>
													<h5>Mars</h5>
												</div>
											</td>
											<td>
												<p>
													Appel à candidature pour le poste expert
													<strong className="text-danger"> (1) </strong>
													poste au Ministère de la Transition énergétique et du
													Développement durable - Département du Développement
													durable
												</p>
											</td>
										</tr>
										<tr className="odd">
											<td className="dateAvis">
												<div className="annonces text-center">
													<h3>14</h3>
													<h5>Mars</h5>
												</div>
											</td>
											<td>
												<p>
													Publication de la liste des convoqués pour le concours
													de recrutement d'un AGENT DE MAITRISE
													<strong className="text-danger"> (2) </strong>
													postes à la Société des Silos Portuaires (SOSIPO)
												</p>
											</td>
										</tr>
										<tr className="odd">
											<td className="dateAvis">
												<div className="annonces text-center">
													<h3>14</h3>
													<h5>Mars</h5>
												</div>
											</td>
											<td>
												<p>
													Appel à candidature pour le poste RESPONSABLE
													ADMINISTRATIF ET FINANCIER
													<strong className="text-danger"> (1) </strong>
													poste au Casablanca Iskane et Equipements
												</p>
											</td>
										</tr>
										<tr className="odd">
											<td className="dateAvis">
												<div className="annonces text-center">
													<h3>13</h3>
													<h5>Mars</h5>
												</div>
											</td>
											<td>
												<p>
													Appel à candidature pour
													<strong className="text-danger"> (6) </strong>
													postes de chef de division et
													<strong className="text-danger"> (16) </strong>
													postes de chef de service ou assimilés au Ministère de
													la Santé et de la Protection sociale
												</p>
											</td>
										</tr>
										<tr className="odd">
											<td className="dateAvis">
												<div className="annonces text-center">
													<h3>13</h3>
													<h5>Mars</h5>
												</div>
											</td>
											<td>
												<p>
													Annulation du concours de recrutement d'un Adjoint
													technique 3ème grade ~ Echelle 6
													<strong className="text-danger"> (3) </strong>
													postes au Conseil provincial (Province Chefchaouen)
												</p>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div
						className="btn-toolbar"
						role="toolbar"
						aria-label="Toolbar with button groups"
					>
						<div
							className="btn-group mr-2"
							role="group"
							aria-label="First group"
						>
							<button type="button" className="btn btn-outline-dark">
								1
							</button>
							<button type="button" className="btn btn-outline-dark">
								2
							</button>
							<button type="button" className="btn btn-outline-dark">
								3
							</button>
							<button type="button" className="btn btn-outline-dark">
								4
							</button>
							<button type="button" className="btn btn-outline-dark">
								5
							</button>
							<button type="button" className="btn btn-outline-dark">
								...
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FrAnnonces;
