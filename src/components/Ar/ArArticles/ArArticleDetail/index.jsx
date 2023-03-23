import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ArArticleDetail = () => {
	const params = useParams();
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetch(`/api/articles/${params.id}`)
			.then(res => res.json())
			.then(data => setArticles(data.articles));
	}, []);
	return (
		<div className="container pt-3">
			<Link className="p-3 pt-1 d-block" to="/Ar/articles">
				رجوع →
			</Link>

			{articles ? (
				<>
					<img
						className="w-100 mx-auto d-block"
						src={articles.image}
						alt={articles.title}
						style={{ maxWidth: '900px' }}
					/>
					<h2 className="text-center mt-5">{articles.title_ar}</h2>
					<p className="text-center text-muted">{articles.date}</p>
					<p className="mt-4">{articles.body_ar}</p>
				</>
			) : (
				<h2 className="text-center">Loading ...</h2>
			)}
		</div>
	);
};

export default ArArticleDetail;
