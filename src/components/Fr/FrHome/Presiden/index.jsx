import Azzaoui from '/imgs/Azzaoui.jpg';

const President = () => {
	return (
		<>
			<h4>Président</h4>
			<div className="card text-bg-dark">
				<img src={Azzaoui} className="card-img  custom-filter" alt="..." />
				<div className="card-img-overlay d-flex align-items-end justify-content-center">
					<h5 className="card-title  p-2 p-md-1 nom_president">
						Mohamed El Azzaoui
					</h5>
				</div>
			</div>
		</>
	);
};

export default President;
