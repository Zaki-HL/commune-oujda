import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
	MDBFooter,
	MDBContainer,
	MDBIcon,
	MDBInput,
	MDBCol,
	MDBRow,
	MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const ArFooter = () => {
	return (
		<footer className="mt-5">
			<MDBFooter
				className="text-center"
				color="white"
				style={{ backgroundColor: 'rgba(53,59,65)' }}
			>
				<MDBContainer className="p-4">
					<section className="mb-4">
						<MDBBtn
							outline
							color="light"
							floating
							className="m-1"
							href="#!"
							role="button"
						>
							<div>
								<FontAwesomeIcon icon={faFacebook} />
							</div>
						</MDBBtn>

						<MDBBtn
							outline
							color="light"
							floating
							className="m-1"
							href="#!"
							role="button"
						>
							<div>
								<FontAwesomeIcon icon={faTwitter} />
							</div>
						</MDBBtn>

						<MDBBtn
							outline
							color="light"
							floating
							className="m-1"
							href="#!"
							role="button"
						>
							<div>
								<FontAwesomeIcon icon={faInstagram} />
							</div>
						</MDBBtn>
					</section>

					<section className="mb-4">
						<p>الموقع الرسمي لبلدية وجدة</p>
					</section>

					<section className="">
						<MDBRow>
							<MDBCol lg="4" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">المقاطعات</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a
											href="https://mapcarta.com/fr/25436958"
											className="text-white"
										>
											أهل أنجاد
										</a>
									</li>
									<li>
										<a
											href="https://mapcarta.com/fr/17411306"
											className="text-white"
										>
											سيدي يحيى
										</a>
									</li>
									<li>
										<a
											href="https://mapcarta.com/fr/34260640"
											className="text-white"
										>
											حي الفتح
										</a>
									</li>
								</ul>
							</MDBCol>

							<MDBCol lg="4" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">روابط سريعة </h5>

								<ul className="list-unstyled mb-0">
									<li>
										<Link to="evenements" className="text-white">
											مناسبات
										</Link>
									</li>
									<li>
										<Link to="ma-ville" className="text-white">
											مدينتي
										</Link>
									</li>
									<li>
										<Link to="articles" className="text-white">
											مقالات
										</Link>
									</li>
								</ul>
							</MDBCol>
						</MDBRow>
					</section>
				</MDBContainer>

				<div
					className="text-center p-3"
					style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
				>
					© 2023 حقوق النشر <span>: </span>
					بلدية وجدة
				</div>
			</MDBFooter>
		</footer>
	);
};

export default ArFooter;
