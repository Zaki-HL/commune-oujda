import { Link } from 'react-router-dom';
import './index.scss';

const FrServices = () => {
	return (
		<>
			<h2 className="text-center m-5">Services</h2>
			<div className="container">
				<div className="row text-center">
					<div className="col-6">
						<Link className="btn btn-primary" to="e-services">
							E-Services
						</Link>
					</div>

					<div className="col-6">
						<Link className="btn btn-primary" to="procedures-ad">
							Procédures administratives
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default FrServices;
