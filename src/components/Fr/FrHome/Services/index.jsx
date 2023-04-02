import service from '/imgs/service.webp';

const Services = () => {
	return (
		<>
			<div className="row">
				<div className="col-12">
					<div className="card text-bg-dark">
						<img src={service} className="card-img" alt="..." />

						<div className="card-img-overlay d-flex align-items-end justify-content-center">
							<button type="button" className="btn btn-secondary btn-sm">
								voir plus
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
