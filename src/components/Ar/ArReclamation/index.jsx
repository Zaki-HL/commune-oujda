import './index.scss';

const ArReclamation = () => {
	return (
		<div className="container">
			<h1 className="text-center my-5">شكوى / طلب</h1>
			<form className="d-flex flex-column gap-3">
				<input
					className="form-control p-3"
					type="text"
					placeholder="موضوع"
					required
				/>

				<select className="form-select p-3" defaultValue={'DEFAULT'} required>
					<option value="DEFAULT" disabled hidden>
						-- نوع --
					</option>
					<option value="Reclamation">شكوى</option>
					<option value="Demande">طلب</option>
				</select>

				<textarea
					className="form-control p-3"
					cols="30"
					rows="10"
					placeholder="الرسالة"
					required
				></textarea>

				<input
					className="btn btn-primary w-25 ms-auto"
					type="submit"
					value="ارسال"
				/>
			</form>
		</div>
	);
};

export default ArReclamation;
