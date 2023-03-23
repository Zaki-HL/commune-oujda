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
import ArArticles from './components/Ar/ArArticles';
import ArEvenements from './components/Ar/ArEvenements';
import ArMaVille from './components/Ar/ArMaVille';
import FrArticleDetail from './components/Fr/FrArticles/FrArticleDetail';
import ArArticleDetail from './components/Ar/ArArticles/ArArticleDetail';
import FrEvenementDetail from './components/Fr/FrEvenements/FrEvenementDetail';
import FrAnnonceDetail from './components/Fr/FrAnnonces/FrAnnonceDetail';
import ArAnnonceDetail from './components/Ar/ArAnnonces/ArAnnonceDetail';
import FrError from './components/Fr/FrError';
import FrReclamation from './components/Fr/FrReclamation';
import ArReclamation from './components/Ar/ArReclamation';
import Auth from './components/Auth';
import Login from './components/Auth/Login';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/fr" replace />} />
				<Route path="login" element={<Login />} />

				<Route path="/fr" element={<FrLayout />}>
					<Route path="*" element={<FrError />} />
					<Route index element={<FrHome />} />
					<Route path="annonces" element={<FrAnnonces />} />
					<Route path="annonces/:id" element={<FrAnnonceDetail />} />
					<Route path="ma-ville" element={<FrMaVille />} />
					<Route path="articles" element={<FrArticles />} />
					<Route path="articles/:id" element={<FrArticleDetail />} />
					<Route path="evenements" element={<FrEvenements />} />
					<Route path="evenements/:id" element={<FrEvenementDetail />} />
					<Route element={<Auth />}>
						<Route path="reclamation" element={<FrReclamation />} />
					</Route>
				</Route>

				<Route path="/ar" element={<ArLayout />}>
					<Route index element={<ArHome />} />
					<Route path="annonces" element={<ArAnnonces />} />
					<Route path="annonces/:id" element={<ArAnnonceDetail />} />
					<Route path="ma-ville" element={<ArMaVille />} />
					<Route path="articles" element={<ArArticles />} />
					<Route path="articles/:id" element={<ArArticleDetail />} />
					<Route path="evenements" element={<ArEvenements />} />
					<Route path="reclamation" element={<ArReclamation />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
