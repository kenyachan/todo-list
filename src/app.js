import { newTask } from './modules/task';
import { newProject as createProject } from './modules/project';
import * as storage from './modules/storage';

//app controller
export function todoApp() {
	const projects = [];
	let activeProject;

	storage.loadProjects(projects, createProject);

	if (projects.length >= 1)
		activeProject = projects[0];

	function findProject(number) {
		if (projects[number - 1] === undefined) {
			console.log(`Project ${number} does not exist`);
			return;
		}

		return projects[number - 1];
	}

	function deleteProject(project) {
		let projectIndex = projects.indexOf(project)

		if (activeProject === project) {
			if (projects.length === 1) 
				activeProject = undefined;

			if (projectIndex === 0 && projects.length > 1) 
				activeProject = projects[projectIndex + 1];

			if (projectIndex > 0) 
				activeProject = projects[projectIndex - 1];
		}

		if (projectIndex >= 0)
			projects.splice(projectIndex, 1);
	}

	function newProject(name) {
		let project = createProject(name);

		activeProject = project;
		projects.push(project);

		storage.addProject(project);

		return project;
	}

	function getProjects() {
		return projects;
	}

	return {
		newTask,
		newProject,

		set activeProject(project) {
			activeProject = project;
		},

		get activeProject() {
			return activeProject;
		},

		findProject,
		deleteProject,
		getProjects,
	}
}

