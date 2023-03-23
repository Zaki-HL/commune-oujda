import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArArticles = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetch('/api/articles')
			.then(res => res.json())
			.then(data => setArticles(data.articles));
	}, []);

	return (
		<div className="container">
			<h1 className="articles mt-5 text-center"> مقالات </h1>

			<div className="card-deck row mt-5 align-items-center">
				{articles.length > 0 &&
					articles.map(e => (
						<div key={e.id} className="col-sm-12 col-md-6 col-lg-3 my-3">
							<Link to={e.id}>
								<div className="card bg-dark text-white">
									<img
										className="card-img custom-filter"
										src={e.image}
										alt="Card image"
										style={{ height: '200px' }}
									/>
									<div className="card-img-overlay d-flex flex-column justify-content-end">
										<h4 className="card-title text-end fs-6">{e.title_ar}</h4>
										<p className="card-text">{e.date}</p>
									</div>
								</div>
							</Link>
						</div>
					))}
			</div>
		</div>
	);
};

export default ArArticles;
