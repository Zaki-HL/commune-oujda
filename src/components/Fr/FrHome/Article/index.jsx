import imgArticle2 from '/imgs/article2.png';

const Article = () => {
	return (
		<>
			{/* Start Article */}
			<h4>Articles</h4>
			<div className="card text-bg-dark">
				<img
					src={imgArticle2}
					className="card-img h-100 custom-filter"
					alt="..."
				/>
				<div className="card-img-overlay d-flex flex-column justify-content-end fw-bold">
					<small>14 Mars 2023</small>
					<h3 className="card-title text-start">
						Le Maroc a la biennale DefExpo en Inde - Médias24
					</h3>
				</div>
			</div>
			{/* End Article */}
		</>
	);
};
export default Article;
