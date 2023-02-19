import { newTask as createTask } from './modules/task';
import { newProject as createProject } from './modules/project';
import * as storage from './modules/storage';

//app controller
export function todoApp() {
	let projects = [];
	let activeProject;

	projects = storage.getProjects();

	if (projects.length >= 1)
		activeProject = projects[0];

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

		if (projectIndex >= 0) {
			projects.splice(projectIndex, 1);
			storage.saveProjects(projects);
		}
	}

	function newProject(name) {
		let project = createProject(name);

		activeProject = project;
		projects.push(project);
		storage.saveProjects(projects);

		return project;
	}

	function getProjects() {
		return projects;
	}

	function newTask(name, project) {
		let task = createTask(name);

		if (name === undefined) return task;

		let proj = project === undefined ? activeProject : project;

		proj.add(task);
		storage.saveProjects(projects);

		return task;
	}

	function removeTask(task) {
		let tasks = activeProject.tasks;
		let taskIndex = tasks.indexOf(task);

		if (taskIndex < 0) return;

		tasks.splice(taskIndex, 1);
		storage.saveProjects(projects);
	}

	function updateTask(task, delta) {
		if (delta.name !== undefined)
			task.name = delta.name;

		if (delta.completionStatus !== undefined) 
			task.completionStatus = delta.completionStatus;

		if (delta.priority !== undefined)
			task.priority = delta.priority;

		if (delta.dueDate !== undefined)
			task.dueDate = delta.dueDate;

		storage.saveProjects(projects);
	}

	function contains(projectName) {
		return projects.some(project => project.name === projectName);
	}

	return {
		newTask,
		newProject,

		set activeProject(project) {
			if (activeProject === project) return;

			activeProject = project;
		},

		get activeProject() {
			return activeProject;
		},

		removeTask,
		updateTask,
		deleteProject,
		getProjects,
	}
}

