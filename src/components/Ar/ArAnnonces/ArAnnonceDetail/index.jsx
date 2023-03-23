import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ArAnnonceDetail = () => {
	const params = useParams();
	const [annonces, setAnnonces] = useState([]);

	useEffect(() => {
		fetch(`/api/annonces/${params.id}`)
			.then(res => res.json())
			.then(data => setAnnonces(data.annonces));
	}, []);
	return (
		<div className="container p-3">
			<Link className="p-3 pt-1 d-block" to="/Ar/annonces">
				رجوع →
			</Link>

		{annonces ? (
			<>
				<h3 className="text-center">
					<u>{annonces.title_ar}</u>
				</h3>
				<table className="table table-striped mt-4">
					<tbody>
						<tr>
							<th>الإدارة المنظمة : </th>
							<td>{annonces.body1_ar}</td>
						</tr>
						<tr>
							<th>الرتبة / المركز : </th>
							<td>{annonces.body2_ar}</td>
						</tr>
						<tr>
							<th>عدد المناصب : </th>
							<td>{annonces.body3}</td>
						</tr>
						<tr>
							<th>تاريخ النشر  : </th>
							<td>{annonces.body4}</td>
						</tr>
						<tr>
							<th>الموعد النهائي لتقديم : </th>
							<td>
								{annonces.body5}
							</td>
						</tr>
					</tbody>
				</table>
				<div className="row">
					<h5 className="mb-3">الملفات المرفقة : </h5>
					<embed src={annonces.pdf} type="application/pdf" height="900" />
				</div>
			</>
			) : (
				<h2 className="text-center">Loading ...</h2>
			)}
		</div>
	);
};

export default ArAnnonceDetail;

