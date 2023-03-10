import React from 'react';
import { Outlet } from 'react-router-dom';
import ArFooter from './ArFooter';
import ArNavBar from './ArNavBar';

const FrLayout = () => {
	return (
		<div className="rtl">
			<ArNavBar />
			<Outlet />
			<ArFooter />
		</div>
	);
};

export default FrLayout;
