import React from 'react';
import { Outlet, Navigate, redirect } from 'react-router-dom';

const Auth = () => {
	const isLoggedIn = localStorage.getItem('loggedin');

	if (!isLoggedIn) {
		return <Navigate to="/login" />;
	}

	return <Outlet />;
};

export default Auth;
