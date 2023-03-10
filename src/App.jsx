import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.scss';
import FrHome from './components/Fr/FrHome';
import FrLayout from './components/Fr/FrLayout';
import FrAnnonces from './components/Fr/FrAnnonces';
import ArHome from './components/Ar/ArHome';
import ArLayout from './components/Ar/ArLayout';
import ArAnnonces from './components/Ar/ArAnnonces';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/fr" element={<FrLayout />}>
					<Route index element={<FrHome />} />
					<Route path="annonces" element={<FrAnnonces />} />
				</Route>
				<Route path="/ar" element={<ArLayout />}>
					<Route index element={<ArHome />} />
					<Route path="annonces" element={<ArAnnonces />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
