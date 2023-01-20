import { newTask } from './modules/task';
import { newProject as createProject } from './modules/project';
import { projectsList } from './modules/projectsList';

//app controller
export function todoApp() {
	let activeProject;
	let activeTask;

	function findProject(number) {
		if (projectsList.projects[number - 1] === undefined)
			throw new Error('Project does not exist');

		return projectsList.projects[number - 1];
	}

	function findTask(number, project) {
		let proj = project === undefined ? activeProject : project;

		if (proj.tasks[number - 1] === undefined)
			throw new Error('Task does not exist');

		return proj.tasks[number - 1];
	}

	function deleteProject(project) {
		if (activeProject === project) {
			let projectIndex = projectsList.projects.indexOf(project)

			if (projectsList.projects.length === 1) 
				activeProject = undefined;

			if (projectIndex === 0 && projectsList.projects.length > 1) 
				activeProject = projectsList.projects[projectIndex + 1];

			if (projectIndex > 0) 
				activeProject = projectsList.projects[projectIndex - 1];
		}

		projectsList.remove(project);
	}

	function newProject(name) {
		let project = createProject(name);

		activeProject = project;
		projectsList.add(project);

		return project;
	}

	return {
		newTask,
		newProject,
		projectsList,
		
		set activeProject(project) {
			activeProject = project;
		},

		set activeTask(task) {
			activeTask = task;
		},

		get activeProject() {
			return activeProject;
		},

		get activeTask() {
			return activeTask;
		},

		findProject,
		findTask,
		deleteProject,
	}
}

