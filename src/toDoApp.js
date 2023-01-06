import * as render from './modules/render';
import { Modal } from './modules/modal';

export const buildHeaderComponent = (node) => {
	let headerElement = render.header();
	let logoElement = headerElement.querySelector('.logo');
	logoElement.addEventListener('click', e => {
		console.log('logo clicked!')
	});

	node.appendChild(headerElement);

	return headerElement;
}

export const buildSideBarComponent = (node) => {
	let sideBarElement = render.projectPaneElement();
	node.appendChild(sideBarElement);

	let projectListElement = render.projectListElement();
	sideBarElement.appendChild(projectListElement);

	return sideBarElement;
}

export const buildMainComponent = (node) => {
	let mainElement = document.createElement('main');

	node.appendChild(mainElement);

	return mainElement;
}

export const buildFooterComponent = (node) => {
	let footerElement = render.footer();

	node.appendChild(footerElement);
	
	return footerElement;
}

export const buildTaskPaneComponent = (projectName, node) => {
	let taskPaneElement = render.taskPaneElement(projectName);

	if (node !== undefined) {
		node.appendChild(taskPaneElement);
	}

	return taskPaneElement;
}
	
export const buildTaskComponent = (project, taskItem, node) => {
	let taskElement = render.taskElement(taskItem);

	let checkBox = taskElement.querySelector('.complete');
	checkBox.addEventListener('change', () => {
		taskItem.setCompletionStatus(checkBox.checked);
	});
	
	let editBtn = taskElement.querySelector('.editButton');
	editBtn.addEventListener('click', event => {
		let bodyElement = document.querySelector('body');
		buildEditModal(project, event.currentTarget.parentElement, taskItem, bodyElement); 
	});	

	if (node !== undefined) {
		node.appendChild(taskElement);
	}

	return taskElement;
}

export const buildAllTaskComponents = (project, node) => {
	let taskList = project.getTasks();

	taskList.forEach(task => {
		node.appendChild(buildTaskComponent(project, task, node));
	});

	return node;
}

export const buildProjectItemComponent = (projectItem, node) => {
	const projectItemElement = render.projectListItemElement(projectItem.getName());

	projectItemElement.addEventListener('click', () => {
		loadTasks(projectItem);
	});

	if (node !== undefined) {
		node.appendChild(projectItemElement);
	}

	return projectItemElement;
}

export const buildAllProjectItemComponents = (projectList, node) => {
	projectList.forEach(project => {
		node.appendChild(buildProjectItemComponent(project, node));
	});

	return node;
}

const loadTasks = (project) => {
	//let taskList = project.getTasks();
	let taskPane = buildTaskPaneComponent(project.getName());

	let taskListElement = taskPane.querySelector('.taskList');
	buildAllTaskComponents(project, taskListElement);

	let oldTaskPaneElement = document.querySelector('.taskPane');
	oldTaskPaneElement.replaceWith(taskPane);
}

export const buildEditModal = (project, taskElement, taskObj, node) => {
	let modalElement = render.editModal();
	let modal = Modal.create(modalElement);

	modal.taskNameInput.value = taskObj.getName();
	modal.priorityInput.value = taskObj.getPriority().toLowerCase();
	modal.dueDateInput.value = taskObj.getDueDate();
	modal.completeCheck.checked = taskObj.getCompletionStatus();

	modal.overlay.addEventListener('click', () => {
		modalElement.remove();
	});

	modal.updateBtn.addEventListener('click', () => {
		updateTask(modal, taskObj, taskElement);
		modalElement.remove();

	});

	modal.cancelBtn.addEventListener('click', () => {
		modalElement.remove();
	});

	modal.deleteBtn.addEventListener('click', () => {
		deleteTask(project, taskObj, taskElement);
		modalElement.remove();
	});

	node.appendChild(modalElement);
}

const updateTask = (modal, taskObj, taskElement) => {
	taskObj.setName(modal.taskNameInput.value);
	taskObj.setPriority(modal.priorityInput.value);
	taskObj.setDueDate(modal.dueDateInput.value);
	taskObj.setCompletionStatus(modal.completeCheck.checked);

	taskElement.querySelector('.name').textContent = taskObj.getName();
	taskElement.querySelector('.priority').textContent = titleCase(taskObj.getPriority());
	taskElement.querySelector('.dueDate').textContent = taskObj.getDueDateForDisplay();
	taskElement.querySelector('.complete').checked = taskObj.getCompletionStatus();
}

function titleCase(str) {
 	return str.toLowerCase().split(' ').map(function(word) {
   		return word.replace(word[0], word[0].toUpperCase());
  	}).join(' ');
}

const deleteTask = (project, taskObj, taskElement) => {
	let confirmed = true; // need to create a function to ask for confirmation

	if (confirmed === true) {
		project.remove(taskObj);
		taskElement.remove();
	}
}
