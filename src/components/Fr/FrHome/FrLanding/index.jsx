import './index.scss';
import React from 'react';
import myImage1 from '/imgs/img1.jpg';
import myImage2 from '/imgs/img2.jpg';
import myImage3 from '/imgs/img3.webp';

const Landing = () => {
	return (
		<div className="landing">
			<div
				id="carouselExampleInterval"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<div class="carousel-inner">
					<div class="carousel-item active" data-bs-interval="5000">
						<img src={myImage1} class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item" data-bs-interval="5000">
						<img src={myImage2} class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item" data-bs-interval="5000">
						<img src={myImage3} class="d-block w-100" alt="..." />
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleInterval"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleInterval"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default Landing;
