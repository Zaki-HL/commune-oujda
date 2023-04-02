import even4 from '/imgs/even4.jpg';
import even2 from '/imgs/even2.jpg';
import even3 from '/imgs/even3.jpg';

const Evenement = () => {
	return (
		<>
			<div className="card-group">
				<div className="card">
					<img src={even4} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Cisco LIVE</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</p>
						<p className="card-text">
							<small className="text-muted">19 Mars 2023</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img src={even2} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">ERP</h5>
						<p className="card-text">
							This card has supporting text below as a natural lead-in to
							additional content.
						</p>
						<p className="card-text">
							<small className="text-muted">21 Mars 2023</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img src={even3} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">DOMO PALOOZA</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This card has even longer content
							than the first to show that equal height action.
						</p>
						<p className="card-text">
							<small className="text-muted">26 Mars 2023</small>
						</p>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center align-items-center mt-2">
				<button type="button" className="btn btn-outline-secondary btn-sm">
					<a href="#" className="text-dark">
						voir plus
					</a>
				</button>
			</div>
		</>
	);
};

export default Evenement;
