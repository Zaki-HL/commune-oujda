import './index.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '/imgs/logo.jpg';

const FrNavBar = () => {
	return (
		<nav className="navbar navbar-expand-md d-flex">
			<div className="container-fluid mx-1 fw-bold">
				<div className="d-flex justify-content-center align-items-center w-90 w-md-auto">
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
					<Link
						className="navbar-brand m-0 d-flex justify-content-center w-100"
						to="/fr"
					>
						<img src={logo} alt="..." className="img-fluid" />
					</Link>
				</div>
				<div
					className="collapse navbar-collapse justify-content-md-center"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav">
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
						<NavLink className="nav-link text-dark" to="reclamation">
							Réclamation
						</NavLink>
					</div>
				</div>
				<NavLink className="nav-link text-dark" to="/ar">
					Ar
				</NavLink>
			</div>
		</nav>
	);
};

export default FrNavBar;
