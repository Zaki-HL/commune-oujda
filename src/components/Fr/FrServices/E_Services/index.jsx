import { Link } from 'react-router-dom';
import './index.scss';

const E_Services = () => {
	return (
		<>
			<Link className="p-3 pt-1 d-block" to="..">
				← Services
			</Link>
			<h2 className="text-center m-5">E-Services</h2>
			<a
				href="https://fr.tanger.ma/eservices/"
				className="text-center d-block"
				target="_blank"
			>
				Inspiration
			</a>
		</>
	);
};

export default E_Services;
