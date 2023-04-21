import { Link } from 'react-router-dom';
import './index.scss';
//import logo from '/imgs/logo.jpg';
// import logo from '/imgs/logo.jpg';
// import logo from '/imgs/logo.jpg';
// import logo from '/imgs/logo.jpg';
// import logo from '/imgs/long.jpg';
// import logo from '/imgs/logo.jpg';

const Procedures_ad = () => {
	return (
		<>
			<Link className="p-3 pt-1 d-block" to="..">
				← Services
			</Link>
			<h2 className="text-center m-5">Procédures administratives</h2>
			<div className='container py-1 my-md-2'>
				<div className='row flex-row'>
					<div className='col-12 col-md-4 mb-4'>
							<div className='Eservices'>
								<a href="#" target="_blank">

									<div class="aga_news_content">
										<h4 class="truncate">Copie de l’acte de décès</h4>
									</div>
								</a>
							</div>
					</div>
					<div className='col-12 col-md-4 mb-4 '>
							<div className='Eservices'>
								<a href="#" target="_blank">

									<div class="aga_news_content ">
										<h4 class="truncate">Attestation administrative pour le mariage</h4>
									</div>
								</a>
							</div>
					</div>
					<div className='col-12 col-md-4 mb-4'>
							<div className='Eservices'>
								<a href="#" target="_blank">

									<div class="aga_news_content">
										<h4 class="truncate">Autorisation de circulation exceptionnelle</h4>
									</div>
								</a>
							</div>
					</div>
					<div className='col-12 col-md-4 mb-4'>
							<div className='Eservices'>
								<a href="#" target="_blank">

									<div class="aga_news_content">
										<h4 class="truncate">Certificat de décès</h4>
									</div>

								</a>
							</div>
					</div>
					<div className='col-12 col-md-4 mb-4'>
							<div className='Eservices'>
								<a href="#" target="_blank">

									<div class="aga_news_content">
										<h4 class="truncate">Autorisation de lotir ou de morceler</h4>
									</div>
								</a>
							</div>
					</div>
					<div className='col-12 col-md-4 mb-4'>
							<div className='Eservices'>
								<a href="#" target="_blank">

									<div class="aga_news_content">
										<h4 class="truncate">Autorisation de restauration</h4>
									</div>
								</a>
							</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Procedures_ad;
