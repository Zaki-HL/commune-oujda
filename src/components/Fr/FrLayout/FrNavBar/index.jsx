import './index.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '/imgs/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const FrNavBar = () => {
	function fakeLogOut() {
		localStorage.removeItem('loggedin');
	}

	return (
		<nav className="navbar navbar-expand-md d-flex">
			<div className="container-fluid mx-1 fw-bold">
				<div className="d-flex justify-content-center align-items-center w-85 w-md-auto">
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
						<img src={logo} alt="logo" className="img-fluid" />
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
				<div className="dropdown">
					<button
						className="btn  dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<FontAwesomeIcon icon={faEllipsisV} color="black" />
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<li>
							<NavLink className="dropdown-item" to="/login">
								Login
							</NavLink>
						</li>
						<li>
							<NavLink className="dropdown-item" to="/ar">
								Ar
							</NavLink>
						</li>
						<li onClick={fakeLogOut}>
							<NavLink className={'dropdown-item'} to="/fr">
								Déconnecter
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default FrNavBar;
