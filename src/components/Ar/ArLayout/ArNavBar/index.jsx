import './index.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '/imgs/logo.jpg';

const ArNavBar = () => {
	return (
		<nav
			className="navbar navbar-expand-md d-flex"
			style={{ backgroundColor: 'white' }}
		>
			<div className="container-fluid mx-1 fw-bold">
				<div className="d-flex align-items-center">
					<button
						className="navbar-toggler me-2"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<Link className="navbar-brand" to="/ar">
						<img src={logo} alt="..." className="img-fluid" />
					</Link>
				</div>

				<div
					className="collapse navbar-collapse justify-content-md-center"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav">
						<NavLink className="nav-link text-dark" to="annonces">
							اعلانات
						</NavLink>
						<NavLink className="nav-link text-dark" to="ma-ville">
							مدينتي
						</NavLink>
						<NavLink className="nav-link text-dark" to="articles">
							مقالات
						</NavLink>
						<NavLink className="nav-link text-dark" to="evenements">
							مناسبات
						</NavLink>
						<NavLink className="nav-link text-dark" to="reclamation">
							شكوى
						</NavLink>
					</div>
				</div>
				<NavLink className="nav-link text-dark" to="/fr">
					Fr
				</NavLink>
			</div>
		</nav>
	);
};

export default ArNavBar;
