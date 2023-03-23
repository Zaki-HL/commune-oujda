import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import myFile from '/docs/file1.pdf';

const FrAnnonceDetail = () => {
	const params = useParams();
	const [annonces, setAnnonces] = useState([]);

	useEffect(() => {
		fetch(`/api/annonces/${params.id}`)
			.then(res => res.json())
			.then(data => setAnnonces(data.annonces));
	}, []);
	return (
		<div className="container p-3">
			<Link className="p-3 pt-1 d-block" to="/fr/annonces">
				← Retour
			</Link>

		{annonces ? (
			<>
				<h3 className="text-center">
					<u>{annonces.title}</u>
				</h3>
				<table className="table table-striped mt-4">
					<tbody>
						<tr>
							<th>Administration organisatrice : </th>
							<td>{annonces.body1}</td>
						</tr>
						<tr>
							<th>Grade/Poste :</th>
							<td>{annonces.body2}</td>
						</tr>
						<tr>
							<th>Nombre de postes : </th>
							<td>{annonces.body3}</td>
						</tr>
						<tr>
							<th>Date de publication : </th>
							<td>{annonces.body4}</td>
						</tr>
						<tr>
							<th>Date limite de dépôt : </th>
							<td>
								{annonces.body5}
							</td>
						</tr>
					</tbody>
				</table>
				<div className="row">
					<h5 className="mb-3">Fichiers attachés :</h5>
					<embed src={annonces.pdf} type="application/pdf" height="900" />
				</div>
			</>
			) : (
				<h2 className="text-center">Loading ...</h2>
			)}
		</div>
	);
};

export default FrAnnonceDetail;
