import { Link } from 'react-router-dom';
import './index.scss';

const FrError = () => {
	return (
		<div className="p-5 bg-warning h-100">
			<h1 className="text-center m-5">French Error Page</h1>
			<Link to="/" className="d-block text-center m-5">
				Retour à l'accueil
			</Link>
		</div>
	);
};

export default FrError;
