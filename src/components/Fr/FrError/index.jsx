import { Link } from 'react-router-dom';
import './index.scss';

const FrError = () => {
	return (
		<div id="notfound">
			<div className="notfound">
				<div className="notfound-404">
					<h1>Oops!</h1>
				</div>
				<h2>code d'erreur : 404</h2>
				<p>la page que vous recherchez semble introuvable</p>
				<Link to="/fr">returne à l'acceuil</Link>
			</div>
		</div>
	);
};

export default FrError;
