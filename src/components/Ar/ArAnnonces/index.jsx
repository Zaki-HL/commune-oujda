import React, { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const ArAnnonces = () => {
	const [annonces, setAnnonces] = useState([]);

	useEffect(() => {
		fetch('/api/annonces')
			.then(res => res.json())
			.then(data => setAnnonces(data.annonces));
	}, []);

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
												نشرت في
											</th>
											<th scope="col" className="text-center">
												أحدث الإعلانات
											</th>
										</tr>
									</thead>
									{annonces.length > 0 &&
										annonces.map(e => (
											<tbody key={e.id}>
												<tr className="odd">
													<td className="dateAvis">
														<Link className='decoration' to="1">
															<div className="annonces text-center">
																<h3>{e.date}</h3>
																<h5>{e.date2_ar}</h5>
															</div>
														</Link>
													</td>
													<td>
														<Link to={e.id}>
															<p>
																{e.title_ar}
															</p>
														</Link>
													</td>
												</tr>
											</tbody>
										))}
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

export default ArAnnonces;
