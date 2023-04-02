import imgChiffres from '/imgs/chiffres.jpg';

const Chiffres = () => {
	return (
		<>
			<div className="col-12 mt-3">
				<div className="card text-bg-dark">
					<img
						src={imgChiffres}
						className="card-img h-100 custom-filter "
						alt="..."
					/>
					<div className="card-img-overlay d-flex flex-column justify-content-center fw-bold">
						<h3 className="card-title">
							<span>CHIFFRES-CLÉS</span>
							<div className="d-flex">
								<div className="tmin p-2 flex-fill bg-light text-dark">
									+720k habitants
								</div>
								<div className="tmin p-2 flex-fill bg-warning mx-2">
									30% text
								</div>
								<div className="tmin p-2 flex-fill bg-danger mx-2">
									color red
								</div>
							</div>
							<div className="d-flex">
								<div className="tmin p-2 flex-grow-1 bg-primary mt-2">
									350k voiture
								</div>
								<div className="tmin p-2 bg-secondary mt-2 mx-2">navbar</div>
								<div className="tmin p-2 bg-info mt-2">color info</div>
							</div>
						</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default Chiffres;
