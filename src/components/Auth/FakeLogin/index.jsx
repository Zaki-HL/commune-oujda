import React from 'react';
import { useNavigation, Form, useActionData, Navigate } from 'react-router-dom';
import { loginUser } from '../../../api';
import './index.scss';

export async function action({ request }) {
	const formData = await request.formData();
	const email = formData.get('email');
	const password = formData.get('password');

	try {
		const data = await loginUser({ email, password });
		localStorage.setItem('loggedin', true);
		return <Navigate to="/fr/reclamation" />;
	} catch (err) {
		return err.message;
	}
}

const FakeLogin = () => {
	const errorMessage = useActionData();
	const navigation = useNavigation();

	return (
		<div className="container FakeLogin">
			<h1 className="my-5 text-center">Connectez-vous à votre compte</h1>
			{errorMessage && (
				<h5 className="alert alert-danger text-center">{errorMessage}</h5>
			)}

			<Form method="post" className="login-form" replace>
				<label htmlFor="email">Email</label>
				<input
					className="form-control mt-3 p-3"
					name="email"
					type="email"
					placeholder="b@b.com"
				/>
				<label className="mt-4" htmlFor="password">
					Mot de pass
				</label>
				<input
					className="form-control mt-3 p-3"
					name="password"
					type="password"
					placeholder="p123"
				/>
				<button
					className="btn btn-primary mt-5 ms-auto d-block"
					disabled={navigation.state === 'submitting'}
				>
					{navigation.state === 'submitting'
						? 'Connexion en cours…'
						: 'connexion'}
				</button>
			</Form>
		</div>
	);
};

export default FakeLogin;
