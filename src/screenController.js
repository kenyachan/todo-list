import { todoApp } from './app';
import * as create from './modules/elements';

export const screenController = (application) => {
	const app = application;
	const bodyElement = document.querySelector('body');

	const header = (() => {
		let headerElement;
		let parentNode;

		function render(node) {
			headerElement = create.headerElement();

			node === undefined ? 
				parentNode.appendChild(headerElement) :
				node.appendChild(headerElement);
		}

		return {
			set parentNode(node) {
				parentNode = node;
			},

			render,
		}
	})();

	const main = (() => {
		let parentNode;
		let mainElement;

		function render(node) {
			mainElement = create.mainElement();

			node === undefined ?
				parentNode.appendChild(mainElement) :
				node.appendChild(mainElement);
		}

		return {
			set parentNode(node) {
				parentNode = node;
			},

			render,
		}
	})();

	const projectPane = (() => {
		let parentNode;
			
		function render() {
			let projectPaneElement = create.projectPaneElement();
			parentNode.appendChild(projectPaneElement);

			let projectListElement = projectPaneElement.querySelector('.projectList');

			app.getProjects().forEach(project => {
				let projectItem = createProjectItem(project);
				projectListElement.appendChild(projectItem);
			});

			let addProjectButton = projectPaneElement.querySelector('.add-button');
			addProjectButton.addEventListener('click', () => {
				openCreateProjectWidget(addProjectButton, projectListElement);
			});
		}

		function createProjectItem(project) {
			let projectElement = create.projectItemElement(project.name);
			
			const listItemInner = projectElement.querySelector('.listItem-inner');
			listItemInner.addEventListener('click', () => {
				app.activeProject = project;
				taskPane.render();
			});

			const deleteButton = projectElement.querySelector('.deleteBtn');
			deleteButton.addEventListener('click', () => {
				app.deleteProject(project);
				projectElement.remove();
				taskPane.render();
			});

			return projectElement;
		}

		function openCreateProjectWidget(buttonElement, parentNode) {
			let widgetElement = create.addProjectElement();
			buttonElement.replaceWith(widgetElement);

			let inputElement = widgetElement.querySelector('#addProject-input');
			inputElement.focus();

			let addButtonElement = widgetElement.querySelector('.add-button');
			addButtonElement.addEventListener('click', () => {
				if (validateInput(inputElement.value) === false) {
					closeWidget();
					return;
				}

				let project = app.newProject(inputElement.value);
				let projectItem = createProjectItem(project);
				parentNode.appendChild(projectItem);

				app.activeProject = project;
				taskPane.render();

				closeWidget();
			});

			let cancelButtonElement = widgetElement.querySelector('.cancel-button');
			cancelButtonElement.addEventListener('click', () => closeWidget());

			function closeWidget() {
				widgetElement.replaceWith(buttonElement);
			}

			function validateInput(inputString) {
				return inputString.length > 0;
			}
		}

		return {
			set parentNode(node) {
				parentNode = node;
			},

			render,
		}
	})();

	const taskPane = (() => {
		let parentNode;
		let taskPaneElement;

		function render() {
			// render empty task pane
			if (app.activeProject === undefined) {
				let emptyTaskPaneElement = create.taskPaneElement();
				
				taskPaneElement === undefined ?
					parentNode.appendChild(emptyTaskPaneElement) : 
					taskPaneElement.replaceWith(emptyTaskPaneElement);

				return;
			}

			if (taskPaneElement === undefined) {			 
				taskPaneElement = create.taskPaneElement(app.activeProject.name);
				parentNode.appendChild(taskPaneElement);
			} else {
				let oldTaskPaneElement = taskPaneElement;
				taskPaneElement = create.taskPaneElement(app.activeProject.name);
				oldTaskPaneElement.replaceWith(taskPaneElement);
			}

			// render task list
			let taskListElement = taskPaneElement.querySelector('.taskList');
			app.activeProject.tasks.forEach(task => {
				let taskItem = createTaskItem(task);
				taskListElement.appendChild(taskItem);
			});

			// initiate add task button event listener
			let addTaskButton = taskPaneElement.querySelector('.add-button');
			addTaskButton.addEventListener('click', () => {
				openCreateTaskWidget(addTaskButton, taskListElement);			
			});
		}

		function createTaskItem(task) {
			let taskElement = create.taskElement(
				task.completionStatus,
				task.name,
				task.priority,
				task.friendlyDueDate
			);

			let checkbox = taskElement.querySelector('.complete');
			checkbox.addEventListener('change', () => {
				task.completionStatus = checkbox.checked;
			});

			let editBtn = taskElement.querySelector('.editButton');
			editBtn.addEventListener('click', () => {
				openEditModal(task, taskElement);
			});

			return taskElement;
		}

		function openEditModal(task, taskElement) {
			let modalElement = create.modalElement();
			let taskDelta = app.newTask();

			bodyElement.appendChild(modalElement);

			const taskNameInput = modalElement.querySelector('input[name="taskName"]');
			taskNameInput.addEventListener('change', () => {
				taskDelta.name = taskNameInput.value;
			});

			const priorityInput = modalElement.querySelector('select[name="priority"]');
			priorityInput.addEventListener('change', () => {
				taskDelta.priority = priorityInput.value;
			});

			const dueDateInput = modalElement.querySelector('input[name="dueDate"]');
			dueDateInput.addEventListener('change', () => {
				taskDelta.dueDate = dueDateInput.value;
			});

			const completeCheck = modalElement.querySelector('input[name="switch"]');
			completeCheck.addEventListener('change', () => {
				taskDelta.completionStatus = completeCheck.checked;
			});

			const overlay = modalElement.querySelector('.overlay');

			taskNameInput.value = task.name;
			priorityInput.value = task.priority.toLowerCase();
			dueDateInput.value = task.dueDate;
			completeCheck.checked = task.completionStatus;

			let updateButton = modalElement.querySelector('#updateTaskBtn');
			updateButton.addEventListener('click', () => {
				task.update(taskDelta);

				let taskItem = createTaskItem(task);
				taskElement.replaceWith(taskItem);
				closeModal();
			});

			let cancelButton = modalElement.querySelector('#cancelBtn');
			cancelButton.addEventListener('click', () => {
				closeModal();
			});

			let deleteButton = modalElement.querySelector('#deleteBtn');
			deleteButton.addEventListener('click', () => {
				app.activeProject.remove(task);
				taskElement.remove();
				closeModal();
			});

			function closeModal() {
				modalElement.remove();
			}
		}

		function openCreateTaskWidget(buttonElement, parentNode) {
			let widgetElement = create.addTaskElement();
			buttonElement.replaceWith(widgetElement);

			let inputElement = widgetElement.querySelector('#addTask-input');
			inputElement.focus();

			let addButtonElement = widgetElement.querySelector('.add-button');
			addButtonElement.addEventListener('click', () => {
				if (validateInput(inputElement.value) === false) {
					closeWidget();
					return;
				}

				let task = app.activeProject.newTask(inputElement.value);
				app.activeProject.add(task);
				
				let taskItem = createTaskItem(task);
				parentNode.appendChild(taskItem);

				closeWidget();
			});

			let cancelButtonElement = widgetElement.querySelector('.cancel-button');
			cancelButtonElement.addEventListener('click', () => closeWidget());

			function closeWidget() {
				widgetElement.replaceWith(buttonElement);
			}

			function validateInput(inputString) {
				return inputString.length > 0;
			}
		}

		return {
			set parentNode(node) {
				parentNode = node;
			},

			render,
		}
	})();

	const footer = (() => {
		let footerElement;
		let parentNode;

		function render(node) {
			footerElement = create.footerElement();

			node === undefined ?
				parentNode.appendChild(footerElement) :
				node.appendChild(footerElement);
		}

		return {
			set parentNode(node) {
				parentNode = node;
			},

			render,
		}
	})();

	const init = (() => {
		header.parentNode = bodyElement;
		header.render();

		main.parentNode = bodyElement;
		main.render();

		let mainElement = bodyElement.querySelector('main');
		
		projectPane.parentNode = mainElement;
		projectPane.render();

		taskPane.parentNode = mainElement;
		taskPane.render();

		footer.parentNode = bodyElement;
		footer.render();
	})();
}

