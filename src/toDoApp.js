import * as render from './modules/render';

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
	
export const buildTaskComponent = (taskItem, node) => {
	let taskElement = render.taskElement(taskItem);
	
	let editBtn = taskElement.querySelector('.editButton');
	editBtn.addEventListener('click', event => {
		let bodyElement = document.querySelector('body');
		buildEditModal(event.currentTarget.parentElement, taskItem, bodyElement); 
	});	

	if (node !== undefined) {
		node.appendChild(taskElement);
	}

	return taskElement;
}

export const buildAllTaskComponents = (taskList, node) => {
	taskList.forEach(task => {
		node.appendChild(buildTaskComponent(task, node));
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
	let taskList = project.getTasks();
	let taskPane = buildTaskPaneComponent(project.getName());

	let taskListElement = taskPane.querySelector('.taskList');
	buildAllTaskComponents(taskList, taskListElement);

	let oldTaskPaneElement = document.querySelector('.taskPane');
	oldTaskPaneElement.replaceWith(taskPane);
}

export const buildEditModal = (taskElement, taskObj, node) => {
	let modal = render.editModal();

	let taskNameInput = modal.querySelector('input[name="taskName"]');
	taskNameInput.value = taskObj.getName();

	let priorityInput = modal.querySelector('select[name="priority"]');
	priorityInput.value = taskObj.getPriority().toLowerCase();

	let dueDateInput = modal.querySelector('input[name="dueDate"]');
	dueDateInput.value = taskObj.getDueDate();

	let completeCheck = modal.querySelector('input[name="switch"]');
	completeCheck.checked = taskObj.getCompletionStatus();

	let overlay = modal.querySelector('.overlay');
	overlay.addEventListener('click', () => {
		modal.remove();
	});

	let updateBtn = modal.querySelector('#updateTaskBtn');
	updateBtn.addEventListener('click', () => {
		taskObj.setName(taskNameInput.value);
		taskObj.setPriority(priorityInput.value);
		taskObj.setDueDate(dueDateInput.value);
		taskObj.setCompletionStatus(completeCheck.checked);

		taskElement.querySelector('.name').textContent = taskObj.getName();
		taskElement.querySelector('.priority').textContent = titleCase(taskObj.getPriority());
		taskElement.querySelector('.dueDate').textContent = taskObj.getDueDateForDisplay();
		taskElement.querySelector('.complete').checked = taskObj.getCompletionStatus();
		modal.remove();

	});

	let cancelBtn = modal.querySelector('#cancelBtn');
	cancelBtn.addEventListener('click', () => {
		modal.remove();
	});

	node.appendChild(modal);
}

function titleCase(str) {
 	return str.toLowerCase().split(' ').map(function(word) {
   		return word.replace(word[0], word[0].toUpperCase());
  	}).join(' ');
}

