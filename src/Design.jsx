import "./Projects.css";
import ProjectCard from "./ProjectCard";
import design_projects from "./design_projects";

function Design({navigatePage}) {
	const project_cards = design_projects.map((item) => {
		return (
			<ProjectCard
				key={item.title}
				title={item.title}
				img_path={item.image_path}
				description={item.description}
                path={item.path}
                navigatePage={navigatePage}
			/>
		);
	});

	return (
		<div className="projects">
			<h1 className="project-title">Design Projects</h1>
			<div className="project-cards">{project_cards}</div>
		</div>
	);
}

export default Design;
