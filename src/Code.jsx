import "./Projects.css";
import ProjectCard from "./ProjectCard";
import code_projects from "./code_projects";

function Code() {
	const project_cards = code_projects.map((item) => {
		return (
			<ProjectCard
				key={item.title}
				title={item.title}
				img_path={item.image_path}
				description={item.description}
				path={item.path}
			/>
		);
	});

	return (
		<div className="projects">
			<h1 className="project-title">Programming Projects</h1>
			<div className="project-cards">{project_cards}</div>
		</div>
	);
}

export default Code;
