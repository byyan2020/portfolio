import "./ProjectCard.css";

function ProjectCard({ title, img_path, description, path, navigatePage }) {
	return (
		<>
			<div className="project-card" tabIndex="0">
				<img src={img_path} alt={title} className="card-img" />
				<div className="card-content">
					<h3 className="card-title">{title}</h3>
					<p className="card-text">{description}</p>

					<a className="card-btn" href={path} onClick={(event) => navigatePage(event, path)}>
						Read More       
					</a>
				</div>
			</div>
		</>
	);
}

export default ProjectCard;
