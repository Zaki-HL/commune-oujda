import './index.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '/imgs/logo.jpg';
const FrNavBar = () => {
	return (
		<nav
			className="navbar navbar-expand-md "
			style={{ backgroundColor: 'white' }}
		>
			<div className="container-fluid mx-1 fw-bold">
				<Link className="navbar-brand" to="/fr">
					<img src={logo} alt="..." className="img_l" />
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
						<NavLink className="nav-link text-dark" to="annonces">
							Annonces
						</NavLink>
						<NavLink className="nav-link text-dark" to="ma-ville">
							Ma Ville
						</NavLink>
						<NavLink className="nav-link text-dark" to="articles">
							Articles
						</NavLink>
						<NavLink className="nav-link text-dark" to="evenements">
							Evenements
						</NavLink>
						<NavLink className="nav-link text-dark" to="/ar">
							Ar
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default FrNavBar;
