import { newTask } from './task';
import { newProject } from './project';

export function saveProjects(projects) {
	localStorage.setItem('projects', JSON.stringify(projects));
}

export function getProjects() {
	let projects = JSON.parse(localStorage.getItem('projects') || '[]');
	projects = projects.map(project => 
		Object.assign(newProject(project.name), project)
	);

	projects.forEach(project =>	
		project.tasks = project.tasks.map(task => 
			Object.assign(newTask(), task)
		)
	);

	return projects;
}

