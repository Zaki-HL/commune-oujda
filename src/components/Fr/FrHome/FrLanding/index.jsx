import './index.scss';
import React from 'react';
import myImage1 from '/imgs/img1.jpg';
import myImage3 from '/imgs/img3.webp';
import myImage4 from '/imgs/1.jpg';

const FrLanding = () => {
	return (
		<div className="landing">
			<div
				id="carouselExampleInterval"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div
						className="carousel-item active card text-bg-dark"
						data-bs-interval="5000"
					>
						<img src={myImage3} className="d-block w-100" alt="..." />
						<div className="card-img-overlay d-flex flex-column justify-content-center fw-bold">
							<h5 className="card-title">Commune Oujda</h5>
						</div>
					</div>
					<div
						className="carousel-item card text-bg-dark"
						data-bs-interval="5000"
					>
						<img src={myImage1} className="d-block w-100" alt="..." />
						<div className="card-img-overlay d-flex flex-column justify-content-center fw-bold">
							<h5 className="card-title">Commune Oujda</h5>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleInterval"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleInterval"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default FrLanding;
