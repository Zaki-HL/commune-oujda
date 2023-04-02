import React from 'react';
import bab from '/imgs/bab.jpg';
import lala from '/imgs/lala-aicha.jpg';
import medina from '/imgs/medina.jpg';
import map from '/imgs/map.png';
import habitants from '/imgs/habitants.jpg';
import tradution from '/imgs/tradution.jpg';
import ka from '/imgs/Kaak.jpg';
import berkoukes from '/imgs/berkoukes.jpg';
import karan from '/imgs/karan.jpg';
import boudin from '/imgs/boudin-blanc.jpg';
import babsidi from '/imgs/bab-sidi.jpg';

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
						<img src={babsidi} className="d-block w-100" />
						<div className="carousel-caption">
							<h5>باب سيدي عبد الوهاب</h5>
						</div>
					</div>
					<div className="carousel-item">
						<img src={lala} className="d-block w-100" />
						<div className="carousel-caption">
							<h5>حديقة للا عائشة</h5>
						</div>
					</div>
					<div className="carousel-item">
						<img src={medina} className="d-block w-100" />
						<div className="carousel-caption">
							<h5>المدينة </h5>
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
			<div className="container">
				{/* ligne 1  */}
				<h3 className="m-5 text-center">ما الذي يجب أن تزوره ؟</h3>
				<br />
				<div className="row d-flex flex-column flex-md-row text-center">
					<div className="col-md-6">
						<img className="img-fluid" src={map} alt="image" />
					</div>
					<br />
					<div className="col-md-6">
						<h4>مدينة وجدة</h4>
						<p>
							وجدة هي مدينة حدودية في المغرب ، تقع في أقصى الحدود شمال شرق
							البلاد ، على حافة منطقة الريف الشرقي ، لها القرب من ميناء الناظور
							ومع الجزائر على بعد 5 كم يجعل من الممكن لعب دور مفترق طرق بين
							المغرب والجزائر ، يبلغ عدد سكانها أكثر من مليون نسمة. مدينة وجدة
							بلغ طابعها العربي الإسلامي مساحة خمسة وعشرين هكتار ، موطن للعديد
							من المعالم ذات القيمة التاريخية لا يمكن إنكاره ، كان محاطًا بحزام
							من الحدائق المزروعة من أشجار الزيتون حزام سميك ألف متر في بعض
							الأماكن. كانت كل حديقة محاطة بجدار من الطوب اللبن بارتفاع 1.80 إلى
							2 متر. أعلى مثقوب مع العديد من الثقوب. لذلك شكلت هذه الحدائق أ
							نظام دفاع قيم. ليس بهذه السرعة ، إنها ليست المدينة فقط يمتلك.
						</p>
					</div>
				</div>
				<br />
				<br />
				{/* ligne 2 */}

				<div className="row d-flex flex-column flex-md-row text-center">
					<div className="col-md-6">
						<img className="img-fluid" src={habitants} alt="image" />
					</div>
					<div className="col-md-6 mt-4">
						<h4>سكان وجدة</h4>
						<p className="para">
							La traduction est trop longue pour être enregistrée يعرف أهل وجدة
							بكرم ضيافتهم اللطف للزوار. غالبا ما توصف بأنها دافئ ومرحب ومنفتح.
							والمدينة هي معروف أيضًا بتنوعه الثقافي ، مع التأثيرات المغاربة
							والعرب والبربر اهل وجدة يفتخرون بها تراثهم الثقافي والتاريخي ،
							وغالبًا ما يكونون كذلك تعلق على مدينتهم ومنطقتهم. هم معروفون أيضا
							لإحساسهم بالمجتمع وروح التضامن.
						</p>
					</div>
				</div>
				<br />
				<br />
				{/* ligne 3 */}

				<div className="row d-flex flex-column flex-md-row">
					<div className="col-md-6">
						<img className="img-fluid" src={tradution} alt="image" />
					</div>
					<div className="col-md-6 mt-4" style={{ textAlign: 'center' }}>
						<h4>التقاليد</h4>
						<p className="para">
							سكان وجدة لديهم ثقافة غنية في التقاليد و العادات والتقاليد
							المحلية. هنا بعض من أكثر المدينة والمنطقة: مهرجان المولود: إنه
							الاحتفال بمولد النبي محمد. هي يتم الاحتفال به كل عام في وجدة وفي
							جميع أنحاء منطقة الشرقية. غالبًا ما يرتبط بالطقوس الدينية و تُعزف
							بأدوات مثل الغيمبري ، والكراكيبس ، و الطبل.
						</p>
					</div>
				</div>

				{/* card */}

				<h3 className="mt-4" style={{ textAlign: 'center' }}>
					ماذا يجب ان تزور؟
				</h3>
				<br />
				<div className="row row-cols-1 row-cols-md-3 g-4">
					<div className="col">
						<div className="card h-100">
							<img src={bab} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">باب الغربي</h5>
								<p className="card-text">
									مدينة وجدة القديمة مليئة بالشوارع الضيقة و طرق متعرجة تصطف على
									جانبيها مباني ترابية تاريخية. هذا مكان رائع لتجربة العمارة
									والثقافة مغربي.
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<img src={medina} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">المدينة</h5>
								<p className="card-text">
									مدينة وجدة في منطقة الريف الشرقي هي واحدة من مدن المغرب حيث
									التقاليد هي الأكثر رسوخًا في حقيقة تاريخها وسكانها المحافظين.
									قوي من تاريخ الألفية ، وجدة لا تزال تحتفظ بقايا ماضيها المجيد.
									هل سنقدم لك جولة إرشادية صغيرة؟
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<img src={lala} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">حديقة للا عائشة</h5>
								<p className="card-text">
									غير بعيد عن المدينة تمتد حديقة للا عائشة أ مساحة حوالي 20
									هكتار. تم إنشاؤه في عام 1935 ، وهو يشكل مكان استرخاء لسكان
									وجدة. يعرض منطقة ترفيهية جميلة بها حمامات سباحة وملاعب النوادي
									الرياضية والتنس وركوب الخيل ونواديها معدات لعب الأطفال ...
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* ligne 4 */}

				<h3 className="mt-4" style={{ textAlign: 'center' }}>
					ماذا يجب أن تتذوق؟
				</h3>
				<br />
				<div className="container">
					<div className="row d-flex flex-column flex-md-row mx-auto">
						<div className="col-4">
							<img src={ka} alt="image" />
						</div>

						<div className="col-8 mx-auto">
							<h4 className="mt-3 mx-auto text-center">كعك</h4>
							<p>
								الكاك أو الأصح كعك ، حرفيا "كعكة" في اللغة العربية الفصحى ،
								مصطلح يمكن أن يشير إلى العديد معجنات شمال أفريقية وشرقية على شكل
								حلقات ذاكرة رائعة!
							</p>
						</div>
					</div>
					<br />
					<div className="row d-flex flex-column flex-md-row mx-auto">
						<div className="col-4">
							<img src={berkoukes} alt="image" />
						</div>
						<div className="col-8 mx-auto">
							<h4 className="mt-3 text-center">بركوكش</h4>
							<p>
								البركوك ، وتسمى أيضًا بركوكيتش ، أفازين أو آش ، هي أ طبق مغاربي
								تقليدي محضر من المكرونة المشكلة حبات كبيرة من الكسكس والخضروات
								الموسمية واللحوم. البركوك هو الاسم الذي يطلق على حبة الكسكس
								الملفوفة باليد.
							</p>
						</div>
					</div>
					<br />
					<div className="row d-flex flex-column flex-md-row mx-auto">
						<div className="col-4">
							<img src={karan} alt="image" />
						</div>
						<div className="col-8 mx-auto">
							<h4 className="mt-3 text-center">كاران</h4>
							<p>
								كران طبق لذيذ من دقيق الحمص تؤكل على شكل شطيرة في قطعة من الرغيف
								الفرنسي ، رش كل الكمون. لماذا الكمون؟ بكل بساطة لمنع الانتفاخ من
								دقيق الحمص
							</p>
						</div>
					</div>
					<br />
					<div className="row d-flex flex-column flex-md-row mx-auto">
						<div className="col-4">
							<img src={boudin} alt="image" />
						</div>
						<div className="col-8 mx-auto">
							<h4 className="mt-3 text-center">بودنغ </h4>
							<p>
								بودان هو مستحضر تشاركوتيري أغلفة. يستهلك باردا أو ساخنا في الفم
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ArMaVille;
