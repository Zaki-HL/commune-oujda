import './index.scss';
import React from 'react';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-md bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					LOGO
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse text-end"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav ms-auto">
						<a className="nav-link" href="#">
							Annonces
						</a>
						<a className="nav-link" href="#">
							Ma Ville
						</a>
						<a className="nav-link" href="#">
							Arrondissements
						</a>
						<a className="nav-link" href="#">
							Services
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
