import './index.scss';
import React from 'react';
import myImage1 from '/imgs/img1.jpg';
import myImage2 from '/imgs/img2.jpg';
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
					<div className="carousel-item active" data-bs-interval="5000">
						<img src={myImage4} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item" data-bs-interval="5000">
						<img src={myImage2} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item" data-bs-interval="5000">
						<img src={myImage3} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item" data-bs-interval="5000">
						<img src={myImage1} className="d-block w-100" alt="..." />
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
