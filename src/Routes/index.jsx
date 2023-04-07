import {
	Navigate,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import FrLayout from '../components/Fr/FrLayout';
import FrError from '../components/Fr/FrError';
import FrHome from '../components/Fr/FrHome';
import FrAnnonces from '../components/Fr/FrAnnonces';
import FrAnnonceDetail from '../components/Fr/FrAnnonces/FrAnnonceDetail';
import FrMaVille from '../components/Fr/FrMaVille';
import FrArticles from '../components/Fr/FrArticles';
import FrArticleDetail from '../components/Fr/FrArticles/FrArticleDetail';
import FrEvenements from '../components/Fr/FrEvenements';
import FrEvenementDetail from '../components/Fr/FrEvenements/FrEvenementDetail';
import Auth from '../components/Auth';
import FakeLogin, { action as loginAction } from '../components/Auth/FakeLogin';
import FrReclamation from '../components/Fr/FrReclamation';
import ArLayout from '../components/Ar/ArLayout';
import ArHome from '../components/Ar/ArHome';
import ArAnnonces from '../components/Ar/ArAnnonces';
import ArAnnonceDetail from '../components/Ar/ArAnnonces/ArAnnonceDetail';
import ArMaVille from '../components/Ar/ArMaVille';
import ArArticles from '../components/Ar/ArArticles';
import ArArticleDetail from '../components/Ar/ArArticles/ArArticleDetail';
import ArEvenements from '../components/Ar/ArEvenements';
import ArEvenementDetail from '../components/Ar/ArEvenements/ArEvenementDetail';
import ArReclamation from '../components/Ar/ArReclamation';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Navigate to="/fr" replace />} />
			<Route path="login" element={<FakeLogin />} action={loginAction} />

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
				<Route path="evenements/:id" element={<ArEvenementDetail />} />
				<Route path="reclamation" element={<ArReclamation />} />
			</Route>
		</>,
	),
);

const Routes = () => {
	return <RouterProvider router={router} />;
};

export default Routes;
