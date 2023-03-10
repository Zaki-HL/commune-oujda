import React from 'react';
import { Outlet } from 'react-router-dom';
import FrFooter from './FrFooter';
import FrNavBar from './FrNavBar';

const FrLayout = () => {
	return (
		<>
			<FrNavBar />
			<Outlet />
			<FrFooter />
		</>
	);
};

export default FrLayout;
