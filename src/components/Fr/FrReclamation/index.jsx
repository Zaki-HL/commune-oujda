const FrReclamation = () => {
	return (
		<div className="container">
			<h1 className="text-center my-5">Réclamation/Demande</h1>
			<form className="d-flex flex-column gap-3">
				<input
					className="form-control p-3"
					type="text"
					placeholder="Object"
					required
				/>

				<select className="form-select p-3" defaultValue={'DEFAULT'} required>
					<option value="DEFAULT" disabled hidden>
						-- type --
					</option>
					<option value="Reclamation">Réclamation</option>
					<option value="Demande">Demande</option>
				</select>

				<textarea
					className="form-control p-3"
					cols="30"
					rows="10"
					placeholder="Message"
					required
				></textarea>

				<input
					className="btn btn-primary w-25 ms-auto"
					type="submit"
					value="Envoyer"
				/>
			</form>
		</div>
	);
};

export default FrReclamation;
