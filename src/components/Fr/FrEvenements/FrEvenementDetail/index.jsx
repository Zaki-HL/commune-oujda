import React from 'react';
import festival from '/imgs/festivale.jpg';

const FrEvenementDetail = () => {
	return (
		<>
			<div className='container pt-3'>
			<a className='p-3 pt-1 d-block' href='/fr/Evenements'>← Retour</a>
			<img className='w-100 mx-auto d-block' src={festival} alt='image article 1' style={{ maxWidth: '400px' }}/>
			<h1 className='text-center mt-5'>ACTION DANSE 7 - Oujda & Casablanca, de Action Danse</h1>
			<p className='text-center text-muted'>1-9 Mars 2023</p>
			<p className='mt-4'>Action danse est une manifestation organisée par des jeunes et pour les jeunes et qui a pour vocation de sensibiliser les jeunes marocains à la danse en générale et à la danse contemporaine en particulier.
						Un festival en constante évolution, « Action Danse » s’adapte et innove d’année en année pour s’harmoniser autant que possible avec le stagiaire qui découvre et le spectateur curieux. Ne pas choquer mais déplacer poétiquement les repères pour redonner un nouveau visage à la danse au Maroc, tel est l’objectif d’Action Danse.
						Les éditions précédentes se sont intéressées à Casablanca, Rabat et Meknès. En 2011, l’association Fleur d’Orange fait voyager ACTION DANSE dans l’Oriental ; Oujda et Nador.
						Les  oujdis et nadoris auront l’occasion de découvrir la danse et de se faire leur propre opinion à travers une variété de spectacles (de danse contemporaine, afro-contemporaine et hip hop), de projections et une exposition  de photo de danse permanente.
						Compagnies : Sifiso Seleme (Afrique du Sud), Florent Mahoukou (Congo Brazaville), Cie Tamadia (Burkina Faso), Pablo Esbert (Espagne), Lhiba Kingzoo (Casa)…
						Lieux : la Galerie d’Art, la fondation Moulay Sliman, place du lycée Omar, Espace Jeunes (Oujda,) la corniche et le Centre Culturel (Nador)…
						Les chorégraphes invités animeront des ateliers d’initiation pour adultes, enfants, adolescents et femmes à Oujda et Nador mais feront également profiter les amateurs de danse de Rabat, Casablanca, Marrakech,  Meknès, Larache…en amont et en aval du festival Action Danse.</p>
						<p>Festival Action Danse 7</p>
						<p>Oujda & Casablanca</p>
						<p>1er au 9 mai 2023</p>
						<p>Au programme :</p>
						<p>Gaby Saranouffi
						Low Rize
						Jeune Ballet National Marocain
						Sidi Graoui</p>
		</div>
		</>
	);
};

export default FrEvenementDetail;
