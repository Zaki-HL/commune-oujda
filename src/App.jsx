import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
} from 'react-router-dom';
import './App.scss';
import FrHome from './components/Fr/FrHome';
import FrLayout from './components/Fr/FrLayout';
import FrAnnonces from './components/Fr/FrAnnonces';
import FrArticles from './components/Fr/FrArticles';
import FrEvenements from './components/Fr/FrEvenements';
import FrMaVille from './components/Fr/FrMaVille';
import ArHome from './components/Ar/ArHome';
import ArLayout from './components/Ar/ArLayout';
import ArAnnonces from './components/Ar/ArAnnonces';
import ArMaVille from './components/Ar/ArMaVille';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/fr" replace />} />

				<Route path="/fr" element={<FrLayout />}>
					<Route index element={<FrHome />} />
					<Route path="annonces" element={<FrAnnonces />} />
					<Route path="ma-ville" element={<FrMaVille />} />
					<Route path="articles" element={<FrArticles />} />
					<Route path="evenements" element={<FrEvenements />} />
				</Route>

				<Route path="/ar" element={<ArLayout />}>
					<Route index element={<ArHome />} />
					<Route path="annonces" element={<ArAnnonces />} />
					<Route path="ma-ville" element={<ArMaVille />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
