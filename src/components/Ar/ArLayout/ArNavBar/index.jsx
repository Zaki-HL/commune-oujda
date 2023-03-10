import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ArNavBar = () => {
	return (
		<nav className="navbar navbar-expand-md bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/ar">
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
					<div className="navbar-nav me-auto">
						<NavLink className="nav-link" to="annonces">
							اعلانات
						</NavLink>
						<NavLink className="nav-link" to="ma-ville">
							مدينتي
						</NavLink>
						<NavLink className="nav-link" to="articles">
							مقالات
						</NavLink>
						<NavLink className="nav-link" to="evenements">
							مناسبات
						</NavLink>
						<NavLink className="nav-link" to="/fr">
							Fr
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default ArNavBar;
