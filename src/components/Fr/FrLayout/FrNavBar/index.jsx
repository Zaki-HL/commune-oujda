import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const FrNavBar = () => {
	return (
		<nav className="navbar navbar-expand-md bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/fr">
					LOGO
				</Link>
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
						<NavLink className="nav-link" to="annonces">
							Annonces
						</NavLink>
						<NavLink className="nav-link" to="ma-ville">
							Ma Ville
						</NavLink>
						<NavLink className="nav-link" to="articles">
							Articles
						</NavLink>
						<NavLink className="nav-link" to="evenements">
							Evenements
						</NavLink>
						<NavLink className="nav-link" to="/ar">
							Ar
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default FrNavBar;
