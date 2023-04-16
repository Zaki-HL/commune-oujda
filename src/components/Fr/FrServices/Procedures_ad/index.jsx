import { Link } from 'react-router-dom';
import './index.scss';

const Procedures_ad = () => {
	return (
		<>
			<Link className="p-3 pt-1 d-block" to="..">
				← Services
			</Link>
			<h2 className="text-center m-5">Procédures administratives</h2>
			<a
				href="https://agadir.ma/fr/"
				className="text-center d-block"
				target="_blank"
			>
				Inspiration
			</a>
		</>
	);
};

export default Procedures_ad;
