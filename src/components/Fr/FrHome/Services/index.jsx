import { Link } from 'react-router-dom';
import service from '/imgs/service.webp';

const Services = () => {
	return (
		<Link to="services">
			<div className="card">
				<img src={service} className="card-img custom-filter" alt="..." />

				<div className="card-img-overlay d-flex align-items-end justify-content-center">
					<h2 className="text-center text-white m-4">Services</h2>
				</div>
			</div>
		</Link>
	);
};

export default Services;
