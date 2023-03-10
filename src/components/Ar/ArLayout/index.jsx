import React from 'react';
import { Outlet } from 'react-router-dom';
import ArFooter from './ArFooter';
import ArNavBar from './ArNavBar';

const FrLayout = () => {
	return (
		<>
			<ArNavBar />
			<Outlet />
			<ArFooter />
		</>
	);
};

export default FrLayout;
