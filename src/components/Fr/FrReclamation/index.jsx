import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const FrReclamation = () => {
	const [emailInfo, setEmailInfo] = useState({
		service: '',
		template: '',
	});
	const refForm = useRef();

	const changeEmail = e => {
		if (e.target.value === 'Reclamation') {
			setEmailInfo({
				service: 'service_reclamation',
				template: 'template_reclamation',
			});
		} else {
			setEmailInfo({
				service: 'service_demande',
				template: 'template_demande',
			});
		}
	};

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				emailInfo.service,
				emailInfo.template,
				refForm.current,
				'enwaJYSdnkbwJCV4N',
			)
			.then(
				result => {
					const inputs = document.querySelectorAll(
						'input[type=text], input[type=email], textarea, select',
					);
					inputs.forEach(input => (input.value = ''));
					alert('Votre message a été envoyé avec succès');
				},
				error => {
					alert('Une erreur est survenue, veuillez réessayer');
					console.log(error);
				},
			);
	};

	return (
		<div className="container">
			<h1 className="text-center my-5">Réclamation/Demande</h1>
			<form
				ref={refForm}
				className="d-flex flex-column gap-3"
				onSubmit={sendEmail}
			>
				<input
					className="form-control p-3"
					type="text"
					placeholder="Nom"
					name="user_name"
					required
				/>

				<input
					className="form-control p-3"
					type="email"
					placeholder="Email"
					name="user_email"
					required
				/>

				<input
					className="form-control p-3"
					type="text"
					placeholder="Objet"
					name="subject"
					required
				/>

				<select
					onChange={changeEmail}
					className="form-select p-3"
					defaultValue={''}
					required
				>
					<option value="" disabled hidden>
						-- type --
					</option>
					<option value="Reclamation">Réclamation</option>
					<option value="Demande">Demande</option>
				</select>

				<textarea
					className="form-control p-3"
					cols="30"
					rows="7"
					placeholder="Message"
					name="message"
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
