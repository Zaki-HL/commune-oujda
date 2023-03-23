import React from 'react';
import babSidi from '/imgs/bab-sidi.jpg';
import coteOuest from '/imgs/cote-ouest.jpg';
import entreeParc from '/imgs/l-entree-du-parc-1.jpg';
import Elmedina from '/imgs/Ville-Oujda-Maroc.jpg';
import BabElgharbi from '/imgs/bab-sidi.jpg';
import SidiYahya from '/imgs/SidiYahya.jpg';
import Karan from '/imgs/karan.jpg';
import Kaak from '/imgs/kaak.jfif';
import berkoukch from '/imgs/1-berkoukes.jpg';
import boudin from '/imgs/boudin.jpeg';

const ArMaVille = () => {
	return (
		<>
			<div
				id="carouselExampleCaptions"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={babSidi} className="d-block w-100" />
						<div className="carousel-caption">
							<h5>باب سيدي عبد الوهاب</h5>
						</div>
					</div>
					<div className="carousel-item">
						<img src={coteOuest} className="d-block w-100" />
						<div className="carousel-caption">
							<h5>حديقة للا مريم</h5>
						</div>
					</div>
					<div className="carousel-item">
						<img src={entreeParc} className="d-block w-100" />
						<div className="carousel-caption">
							<h5>حديقة للا عائشة</h5>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<h2 className="text-center mt-5">حول وجدة</h2>
			<div
				style={{ margin: '8px' }}
				className="row row-cols-1 row-cols-md-3 g-4 "
			>
				<div className="col">
					<div className="card h-100">
						<div className="card-body">
							<h5 className="card-title">مدينة وجدة</h5>
							<p className="card-text">
								وجدة هي مدينة تقع في شرق المغرب ، بالقرب من
								الحدود مع الجزائر. إنها محافظة منطقة
								الشرقية ويبلغ عدد سكانها حوالي 500000 نسمة. والمدينة هي
								معروفة بتراثها التاريخي والثقافي. لديها
								العديد من المعالم والمواقع السياحية مثل المدينة المنورة
								من وجدة ، الجامع الكبير ، قصبة وجدة ، المكان
								محمد السادس ، ساحة 16 نوفمبر ومتحف وجدة. وجدة
								هو أيضا مركز اقتصادي مهم في المنطقة. هي
								مطار دولي ومحطة سكة حديد
								يربط المدن الرئيسية في المغرب.
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<div className="card-body">
							<h5 className="card-title">اهل وجدة (Wjada)</h5>
							<p className="card-text">
								يُعرف سكان وجدة بكرم ضيافتهم وحسن ضيافتهم
								اللطف للزوار. غالبا ما توصف بأنها
								دافئ ومرحب ومنفتح. والمدينة هي
								معروف أيضًا بتنوعه الثقافي ، مع
								التأثيرات المغربية والعربية والبربرية.سكان وجدة
								فخورون بتراثهم الثقافي والتاريخي وهم
								غالبًا ما يكونون مرتبطين جدًا بمدينتهم ومنطقتهم. هم
								معروفون أيضًا بإحساسهم بالانتماء للمجتمع و
								روح التضامن.
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<div className="card-body">
							<h5 className="card-title">التقاليد</h5>
							<p className="card-text">
								سكان وجدة لديهم ثقافة غنية في التقاليد و
								العادات والتقاليد المحلية. هنا بعض من أكثر
								المدينة والمنطقة: مهرجان المولود:
								إنه الاحتفال بمولد النبي محمد. هي
								يتم الاحتفال به كل عام في وجدة وفي جميع أنحاء منطقة
								الشرقية. غالبًا ما يرتبط بالطقوس الدينية و
								تُعزف بأدوات مثل الغيمبري والكراكيب
								والطبل.
							</p>
						</div>
					</div>
				</div>
			</div>
			<h3 className="text-center mt-5">ماذا يجب ان تزور؟</h3>
			<div className="container p-5 d-flex flex-column align-items-center">
				<div className="card mb-3" style={{ maxWidth: '540px' }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src={Elmedina}
								className="img-fluid w-100 h-100 object-fit-cover rounded-start"
								alt="Card Image"
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">لمدينة وجدة</h5>
								<p className="card-text">
									{' '}
									مدينة وجدة القديمة مليئة بالشوارع الضيقة و
									طرق متعرجة تصطف على جانبيها مباني ترابية تاريخية. هذا
									مكان رائع لتجربة العمارة والثقافة
									مغربي.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="card mb-3" style={{ maxWidth: '540px' }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src={SidiYahya}
								className="img-fluid w-100 object-fit-cover rounded-start"
								alt="Card Image"
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">سيدي يحيى</h5>
								<p className="card-text">
									هذه البوابة التاريخية هي نصب تذكاري مهم للمدينة.
									يعود تاريخه إلى القرن الثامن عشر وهو مزين بالفسيفساء و
									الأنماط التقليدية.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="card mb-3" style={{ maxWidth: '540px' }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src={BabElgharbi}
								className="img-fluid w-100 h-100 object-fit-cover rounded-start"
								alt="Card Image"
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">باب الغربي</h5>
								<p className="card-text">
									باب الغربي هو أحد البوابات التاريخية للمدينة
									من وجدة ، وتقع في شرق المغرب. هذا الباب
									تعتبر من أهم رموز المدينة.
									{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h3 className="m-5 text-center">ماذا يجب أن تتذوق؟</h3>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-8 col-lg-6">
						<div className="card mb-3">
							<div className="row g-0">
								<div className="col-md-4">
									<img
										src={Karan}
										className="img-fluid object-fit-cover rounded-start h-100"
										alt="Card Image"
									/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">كاران</h5>
										<p className="card-text">
											كاران من طحين البازلاء اللذيذة
											الكتاكيت التي تؤكل على شكل شطيرة في
											قطعة من الرغيف الفرنسي ، مرشوشة بالكمون ؛ لماذا
											كمون؟ ببساطة لتجنب الانتفاخ
											بسبب دقيق الحمص.
											{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-8 col-lg-6">
						<div className="card mb-3">
							<div className="row g-0">
								<div className="col-md-4">
									<img
										src={Kaak}
										className="img-fluid object-fit-cover rounded-start h-100"
										alt="Card Image"
									/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">كعك</h5>
										<p className="card-text">
											الكعك أو الأصح كعك ، حرفيا "كعكة
											في اللغة العربية الفصحى ، مصطلح يمكن أن يعين
											عدة معجنات شمال أفريقية وشرقية على شكل
											من الخواتم.
											{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-8 col-lg-6">
						<div className="card mb-3">
							<div className="row g-0">
								<div className="col-md-4">
									<img
										src={berkoukch}
										className="img-fluid object-fit-cover object-fit-cover rounded-start h-100"
										alt="Card Image"
									/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">باركوكش</h5>
										<p className="card-text">
											البركوك ، وتسمى أيضًا بركوكش ، أفازين أو آيش ،
											هو طبق مغاربي تقليدي محضر من
											مكرونة على شكل حبات كبيرة من الكسكس والخضروات
											الموسم واللحوم.
											{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-8 col-lg-6">
						<div className="card mb-3">
							<div className="row g-0">
								<div className="col-md-4">
									<img
										src={boudin}
										className="img-fluid rounded-start h-100"
										alt="Card Image"
									/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">بودان</h5>
										<p className="card-text">
											بودان هو مستحضر تشاركوتيري
											أغلفة. تؤكل ساخنة أو باردة.
											{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ArMaVille;
