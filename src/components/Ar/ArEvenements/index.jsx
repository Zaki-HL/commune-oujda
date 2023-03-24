import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArEvenements = () => {
	const [evenements, setEvenements] = useState([]);

	useEffect(() => {
		fetch('/api/evenements')
			.then(res => res.json())
			.then(data => setEvenements(data.evenements));
	}, []);
	return (
		<>
			<div className="container">
				{/* Start Title */}
				<h1 className="articles mt-5 text-center">مناسبات </h1>
				{/* End Title */}

				{/* Start line 1 */}

				<div className="card-deck row mt-5 align-items-center">
					{/* Start Evenement 1 */}
					{evenements.length > 0 &&
					evenements.map(e => (
					<div key={e.id} className="col-sm-12 col-md-6 col-lg-3 my-3">
						<Link to={e.id}>
							<div className="card bg-dark text-white">
								<img
									className="card-img custom-filter"
									src={e.image}
									alt="Card image"
									style={{ height: '350px' }}
								/>
								<div className="card-img-overlay d-flex flex-column justify-content-end">
									<h4 className="card-title text-end fs-6">
										{e.title_ar}
									</h4>
									<p className="card-text">{e.date}</p>
								</div>
							</div>
						</Link>
					</div>
					))}
					{/* End Evenement 1 */}
				</div>
				{/* End line 1 */}
			</div>
		</>
	);
};

export default ArEvenements;
