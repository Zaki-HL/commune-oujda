import { Link } from 'react-router-dom';
import './index.scss';
import rokhas from '/imgs/rokhas.png';
import chikaya from '/imgs/chikaya.png';
import halamadania from '/imgs/halamadania.png';
import idarati from '/imgs/idarati.png';
import bibliotheque from '/imgs/bibliotheque.gif';
import tresorerie from '/imgs/tresorerie.png';

const E_Services = () => {
	return (
		<>
			<Link className="p-3 pt-1 d-block" to="..">
				← Services
			</Link>
			<h2 className="text-center m-5">E-Services</h2>
			<div className='container py-1 my-md-2'>
				<div className='row flex-row'>
					<div className='col-12 col-md-4 mb-4'>
							<div className='Eservices'>
								<a href="https://rokhas.ma/karazal/" target="_blank">
									<img className='mw-100' src={rokhas} alt="" />
								</a>
							</div>
					</div>
					<div className='col-12 col-md-4 mb-4'>
							<div className='Eservices'>
								<a href="https://www.chikaya.ma/?lang=fr" target="_blank">
									<img className='mw-100' src={chikaya} alt="" />
								</a>
							</div>
					</div>
					<div className='col-12 col-md-4 mb-4'>
							<div className='Eservices'>
								<a href="https://www.alhalalmadania.ma/fr/Pages/Accueil.aspx" target="_blank">
									<img className='mw-100' src={halamadania} alt="" />
								</a>
							</div>
					</div>
					<div className='col-12 col-md-4 mb-4'>
							<div className='Eservices'>
								<a href="https://www.idarati.ma/ar/web/pna" target="_blank">
									<img className='mw-100' src={idarati} alt="" />
								</a>
							</div>
					</div>
					<div className='col-12 col-md-4 mb-4'>
							<div className='Eservices'>
								<a href="http://www.bnrm.ma/bnrm/" target="_blank">
									<img className='mw-100' src={bibliotheque} alt="" />
								</a>
							</div>
					</div>
					<div className='col-12 col-md-4 mb-4'>
							<div className='Eservices'>
								<a href="https://www.tgr.gov.ma/wps/portal/erecouvrement" target="_blank">
									<img className='mw-100' src={tresorerie} alt="" />
								</a>
							</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default E_Services;
