import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ArEvenementDetail = () => {
	const params = useParams();
	const [evenements, setEvenements] = useState([]);

	useEffect(() => {
		fetch(`/api/evenements/${params.id}`)
			.then(res => res.json())
			.then(data => setEvenements(data.evenements));
	}, []);
	return (
		<>
			<div className='container pt-3'>
			<Link className="p-3 pt-1 d-block" to="/Ar/evenements">
				رجوع →
			</Link>

			{evenements ? (
				<>
					<img className='w-100 mx-auto d-block' src={evenements.image} alt='image article 1' style={{ maxWidth: '400px' }}/>
					<h1 className='text-center mt-5'>{evenements.title_ar}</h1>
					<p className='text-center text-muted'>{evenements.date}</p>
					<p className='mt-4'>{evenements.body_ar}</p>
				</>
			) : (
				<h2 className="text-center">Loading ...</h2>
			)}
		</div>
		</>
	);
};

export default ArEvenementDetail;
