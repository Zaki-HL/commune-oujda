import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Auth = () => {
	const auth = { token: 'null' };

	if (!auth.token) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
};

export default Auth;
