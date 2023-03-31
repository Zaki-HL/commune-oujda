import './index.scss';
import React from 'react';

import Azzaoui from '/imgs/Azzaoui.jpg';
import imgArticle2 from '/imgs/article2.png';

import imgChiffres from '/imgs/chiffres.jpg';
import even4 from '/imgs/even4.jpg';
import even2 from '/imgs/even2.jpg';
import even3 from '/imgs/even3.jpg';
import service from '/imgs/service.webp';

import onee from '/imgs/onee.png';
import oncf from '/imgs/oncf1.png';
import radeeo from '/imgs/radeeo.png';
import ctm from '/imgs/ctm.png';
//import ctm from '/imgs/ctm.png';
//import oncf from '/imgs/oncf.png';
//import onee from '/imgs/onee.png';
//import redeeo from '/imgs/redeeo.png';

const Articles = () => {
	return (
		<div className="container">
			{/* Ligne 1 */}
			<div className="row mt-5 align-items-center">
				<div className="col-md-5">
					{/* Start President */}
					<h4>رئيس</h4>
					<div className="card text-bg-dark">
						<img src={Azzaoui} className="card-img  custom-filter" alt="..." />
						<div className="card-img-overlay d-flex align-items-end justify-content-center">
							<h5 className="card-title  p-2 p-md-1 nom_president">
								محمد العزاوي
							</h5>
						</div>
						{/* End President */}
					</div>
				</div>
				<div className="col-md-7 mt-3 mt-md-0 ">
					{/* Start Article */}
					<h4>مقالات</h4>
					<div className="card text-bg-dark">
						<img
							src={imgArticle2}
							className="card-img h-100 custom-filter"
							alt="..."
						/>
						<div className="card-img-overlay d-flex flex-column justify-content-end fw-bold">
							<small>14 مارس 2023</small>
							<h3 className="card-title text-end">
								المغرب في بينالي DefExpo بالهند - Medias24
							</h3>
						</div>
					</div>
					{/* End Article */}
				</div>
			</div>
			<h4 className="evenements text-center mt-5">مناسبات</h4>
			{/* Ligne 2 evenement*/}
			<div className="card-group">
				<div className="card">
					<img src={even4} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Cisco LIVE</h5>
						<p className="card-text">
							هذه بطاقة أوسع مع نص داعم أدناه كطبيعي
							يؤدي إلى محتوى إضافي. هذا المحتوى قليلا
							طويل.
						</p>
						<p className="card-text">
							<small className="text-muted">19 مارس 2023</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img src={even2} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">ERP</h5>
						<p className="card-text">
							تحتوي هذه البطاقة على نص داعم أدناه كموجه طبيعي إلى
							محتوى إضافي.
						</p>
						<p className="card-text">
							<small className="text-muted">21 مارس 2023</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img src={even3} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">DOMO PALOOZA</h5>
						<p className="card-text">
							هذه بطاقة أوسع مع نص داعم أدناه كطبيعي
							يؤدي إلى محتوى إضافي. تحتوي هذه البطاقة على محتوى أطول
							من أول من أظهر حركة ارتفاع متساوية.
						</p>
						<p className="card-text">
							<small className="text-muted">26 مارس 2023</small>
						</p>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center align-items-center mt-2">
				<button type="button" className="btn btn-outline-secondary btn-sm">
					<a href="#" className="text-dark">
						شاهد المزيد
					</a>
				</button>
			</div>
			{/* Ligne 3*/}

			<div className="row mt-5 align-items-center">
				<div className="col-12 col-md-4">
					{/*start announces*/}
					<h4 className="announces text-center m-3">الإعلانات</h4>
					<div className="card col-12 col-md-12 d-md-flex m-2 mx-auto">
						<div className="card-body">
							<h5 className="card-title fw-bold">16 مارس 2023</h5>
							<p className="card-text text-center">
								مع النص الداعم أدناه كمقدمة طبيعية إلى إضافية
								بسعادة غامرة.
							</p>
							<a href="#" className="btn btn-outline-secondary d-block">
								شاهد المزيد
							</a>
						</div>
					</div>

					<div className="card col-12 col-md-12 d-md-flex m-2 mx-auto">
						<div className="card-body">
							<h5 className="card-title fw-bold">17 مارس 2023</h5>
							<p className="card-text text-center">
								مع النص الداعم أدناه كمقدمة طبيعية إلى إضافية
								بسعادة غامرة.
							</p>
							<a href="#" className="btn btn-outline-secondary d-block">
								شاهد المزيد
							</a>
						</div>
					</div>

					<div className="card col-12 col-md-12 d-md-flex m-2 mx-auto">
						<div className="card-body">
							<h5 className="card-title fw-bold">18 مارس 2023</h5>
							<p className="card-text text-center">
								مع النص الداعم أدناه كمقدمة طبيعية إلى إضافية
								بسعادة غامرة.
							</p>
							<a href="#" className="btn btn-outline-secondary d-block">
								شاهد المزيد
							</a>
						</div>
					</div>

					{/*end annonces*/}
				</div>
				{/*start services*/}

				<div className="col-md-7 mt-3 ms-auto">
					<div className="row">
						<div className="col-12">
							<div className="card text-bg-dark">
								<img src={service} className="card-img" alt="..." />

								<div className="card-img-overlay d-flex align-items-end justify-content-center">
									<button type="button" className="btn btn-secondary btn-sm">
										شاهد المزيد
									</button>
								</div>
							</div>
						</div>
						{/*end services*/}
						{/*start chiffres*/}
						<div className="col-12 mt-3">
							<div className="card text-bg-dark">
								<img
									src={imgChiffres}
									className="card-img h-100 custom-filter "
									alt="..."
								/>
								<div className="card-img-overlay d-flex flex-column justify-content-center fw-bold">
									<h3 className="card-title">
										<span>أعداد مهمة</span>
										<div className="d-flex">
											<div className="tmin p-2 flex-fill bg-light text-dark">
												+720k نسمة
											</div>
											<div className="tmin p-2 flex-fill bg-warning mx-2">
												30% نص
											</div>
											<div className="tmin p-2 flex-fill bg-danger mx-2">
												لون احمر
											</div>
										</div>
										<div className="d-flex">
											<div className="tmin p-2 flex-grow-1 bg-primary mt-2">
												350k سيارة
											</div>
											<div className="tmin p-2 bg-secondary mt-2 mx-2">
												نافبار
											</div>
											<div className="tmin p-2 bg-info mt-2">معلومات اللون</div>
										</div>
									</h3>
								</div>
							</div>
						</div>
					</div>
					{/*end chiffres*/}
				</div>
				{/*partenaires*/}
			</div>
			{/*map*/}
		</div>
	);
};

export default Articles;
