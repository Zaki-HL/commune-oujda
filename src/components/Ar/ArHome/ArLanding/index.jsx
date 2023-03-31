import './index.scss';
import React from 'react';
import myImage3 from '/imgs/img3.webp';
import myImage4 from '/imgs/1.jpg';

import oujda from '/imgs/oujda.jpg';

const ArLanding = () => {
	return (
		<div className="landing">
			<div id="carouselExampleCaptions" className="carousel slide mt-3">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={oujda} className="d-block w-100" alt="..." />
						<div className="carousel-caption">
							<h3>بلدية وجدة</h3>
						</div>
					</div>
					<div className="carousel-item">
						<img src={myImage4} className="d-block w-100" alt="..." />
						<div className="carousel-caption">
							<h3>بلدية وجدة</h3>
						</div>
					</div>
					<div className="carousel-item">
						<img src={myImage3} className="d-block w-100" alt="..." />
						<div className="carousel-caption">
							<h3>بلدية وجدة</h3>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
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
					data-bs-target="#carouselExampleCaptions"
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

export default ArLanding;
