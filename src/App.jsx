import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import FrArticleDetail from './components/Fr/FrArticles/FrArticleDetail';
import FrEvenementDetail from './components/Fr/FrEvenements/FrEvenementDetail';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/fr" replace />} />

				<Route path="/fr" element={<FrLayout />}>
					<Route index element={<FrHome />} />
					<Route path="annonces" element={<FrAnnonces />} />
					<Route path="annonces/:id" element={<FrAnnoncesDetail />} />
					<Route path="ma-ville" element={<FrMaVille />} />
					<Route path="articles" element={<FrArticles />} />
					<Route path="articles/:id" element={<FrArticleDetail />} />
					<Route path="evenements" element={<FrEvenements />} />
					<Route path="evenements/:id" element={<FrEvenementDetail />} />
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
