import React from 'react';
import myFile from "/docs/file1.pdf";

const FrAnnonceDetail = () => {
	return (
		<div className="container p-5">
			<h2 className="text-center"><u>Concours de recrutement : Technicien de 4ème grade ~ Echelle 8</u></h2>
			<table class="table table-striped mt-4">
				<tbody>
					<tr>
						<th>Collectivité organisatrice :</th>
						<td>Commune MAKNASSA ACHARQIA (Province Taza )</td>
					</tr>
					<tr>
						<th>Grade :</th>
						<td>Technicien de 4ème grade ~ Echelle 8</td>
					</tr>
					<tr>
						<th>Spécialités :</th>
						<td> genie civil/ resaux informatique</td>
					</tr>
					<tr>
						<th>Type de recrutement :	</th>
						<td>Recrutement statutaire</td>
					</tr>
					<tr>
						<th>Nombre de postes :	</th>
						<td>2</td>
					</tr>
					<tr>
						<th>Date de publication :	</th>
						<td>17 février 2023</td>
					</tr>
					<tr>
						<th>Délai de dépôt des candidatures :	</th>
						<td>13 mars 2023 <p className="text-danger">(Expiré)</p></td>
					</tr>
					<tr>
						<th>Date du concours :	</th>
						<td>19 mars 2023</td>
					</tr>
				</tbody>
			</table>
			<div class="row">
				<h5 className="mt-3">Fichiers attachés :</h5>
				<embed src={myFile} type="application/pdf" width="500" height="400" />
			</div>
		</div>
	);
};

export default FrAnnonceDetail;
