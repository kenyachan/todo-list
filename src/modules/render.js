import * as icons from './icons'; 

export const taskElement = (taskObj) => {
	const element = document.createElement('li');

	const itemCompleteButton = document.createElement('input');
	itemCompleteButton.classList.add('complete');
	itemCompleteButton.setAttribute('type', 'checkbox');
	element.appendChild(itemCompleteButton);

	const itemName = document.createElement('p');
	itemName.classList.add('name');
	itemName.textContent = taskObj.getName();
	element.appendChild(itemName);

	const itemPriority = document.createElement('p');
	itemPriority.classList.add('priority');
	itemPriority.textContent = taskObj.getPriority();
	element.appendChild(itemPriority);

	const itemDueDate = document.createElement('p');
	itemDueDate.classList.add('dueDate');
	itemDueDate.textContent = taskObj.getDueDateForDisplay();
	element.appendChild(itemDueDate);

	const editButton = document.createElement('button');
	editButton.classList.add('editButton');
	element.appendChild(editButton);

	const editIcon = icons.edit();
	editButton.appendChild(editIcon);

	return element;
}

export const taskPaneElement = (projectName) => {
	const element = document.createElement('div');
	element.classList.add('taskPane');

	const projectNameElement = document.createElement('p');
	projectNameElement.classList.add('projectName');
	projectNameElement.textContent = projectName;
	element.appendChild(projectNameElement);

	const taskList = document.createElement('ul');
	taskList.classList.add('taskList');
	element.appendChild(taskList);

	return element;
}

export const projectListItemElement = (projectName) => {
	const element = document.createElement('li');

	const listItemInner = document.createElement('div');
	listItemInner.classList.add('listItem-inner');
	element.appendChild(listItemInner);

	const listItemIcon = document.createElement('span');
	const icon = icons.list();
	listItemIcon.appendChild(icon);
	listItemInner.appendChild(listItemIcon);

	const listItemText = document.createElement('p');
	listItemText.textContent = projectName;
	listItemInner.appendChild(listItemText);

	return element;
}

export const projectPaneElement = () => {
	const element = document.createElement('div');
	element.classList.add('projectPane');

	return element;
}

export const projectListElement = () => {
	const element = document.createElement('ul');
	element.classList.add('projectList');

	return element;
}

export const header = () => {
	const headerElement = document.createElement('header');

	const headerLogo = icons.logo();
	headerElement.appendChild(headerLogo);

	return headerElement;
}

export const footer = () => {
	const footerElement = document.createElement('footer');

	const authorWidget = document.createElement('div');
	authorWidget.classList.add('author-widget');

	const authorTextElement = document.createElement('p');
	authorTextElement.textContent = 'Created by ';

	const authorLink = document.createElement('a');
	const link = 'https://github.com/kenyachan';
	const author = 'Kenya Chan';
	authorLink.setAttribute('href', link);
	authorLink.textContent = author;
	authorTextElement.appendChild(authorLink);

	authorWidget.appendChild(authorTextElement);
	
	footerElement.appendChild(authorWidget);

	return footerElement;
}

export const editModal = () => {
	const modalWidget = document.createElement('div');
	modalWidget.classList.add('modal-widget');

	modalWidget.appendChild(modalOverlay());
	modalWidget.appendChild(modalDialog());
	
	return modalWidget;
}

const modalOverlay = () => {
	const overlay = document.createElement('div');
	overlay.classList.add('overlay');
	
	return overlay;
}

const modalDialog = () => {
	const modalDialog = document.createElement('div');
	modalDialog.classList.add('modal-dialog');
	
	const title = document.createElement('h1');
	title.textContent = 'Edit task';
	modalDialog.appendChild(title);

	const editForm = document.createElement('form');
	editForm.classList.add('form');
	modalDialog.appendChild(editForm);

	editForm.appendChild(taskNameInput());
	editForm.appendChild(priorityInput());
	editForm.appendChild(dueDateInput());
	editForm.appendChild(switchWidget('Complete', 'Incomplete'));

	const updateButton = document.createElement('button');
	updateButton.id = 'updateTaskBtn';
	updateButton.setAttribute('type', 'button');
	updateButton.textContent = 'Update';
	editForm.appendChild(updateButton);

	const cancelButton = document.createElement('button');
	cancelButton.id = 'cancelBtn';
	cancelButton.setAttribute('type', 'button');
	cancelButton.textContent = 'Cancel';
	editForm.appendChild(cancelButton);

	return modalDialog;
}

const taskNameInput = () => {
	const element = document.createElement('div');
	element.classList.add('inputItem');

	const taskNameInputLabel = document.createElement('label');
	taskNameInputLabel.setAttribute('for', 'taskName');
	taskNameInputLabel.setAttribute('placeholder', 'Do Something...');
	taskNameInputLabel.textContent = 'Task:';
	element.appendChild(taskNameInputLabel);

	const taskNameInput = document.createElement('input');
	taskNameInput.setAttribute('type', 'text');
	taskNameInput.setAttribute('name', 'taskName');
	taskNameInput.Id = 'taskName';
	element.appendChild(taskNameInput);

	return element;
}

const priorityInput = () => {
	const element = document.createElement('div');
	element.classList.add('inputItem');

	const priorityLabel = document.createElement('label');
	priorityLabel.setAttribute('for', 'priority');
	priorityLabel.textContent = 'Priority:';
	element.appendChild(priorityLabel);

	const prioritySelection = document.createElement('select');
	prioritySelection.setAttribute('name', 'priority');
	prioritySelection.Id = 'priority';
	element.appendChild(prioritySelection);

	const priorityOptionLow = document.createElement('option');
	priorityOptionLow.setAttribute('value', 'low');
	priorityOptionLow.textContent = 'Low';
	prioritySelection.appendChild(priorityOptionLow);

	const priorityOptionNormal = document.createElement('option');
	priorityOptionNormal.setAttribute('value', 'normal');
	priorityOptionNormal.selected = true;
	priorityOptionNormal.textContent = 'Normal';
	prioritySelection.appendChild(priorityOptionNormal);

	const priorityOptionHigh = document.createElement('option');
	priorityOptionHigh.setAttribute('value', 'high');
	priorityOptionHigh.textContent = 'High';
	prioritySelection.appendChild(priorityOptionHigh);

	return element;
}

const dueDateInput = () => {
	const element = document.createElement('div');
	element.classList.add('inputItem');

	const dueDateInputLabel = document.createElement('label');
	dueDateInputLabel.setAttribute('for', 'dueDate');
	dueDateInputLabel.textContent = 'Due Date:';
	element.appendChild(dueDateInputLabel);
	
	const dueDateInput = document.createElement('input');
	dueDateInput.setAttribute('type', 'date');
	dueDateInput.setAttribute('name', 'dueDate');
	dueDateInput.setAttribute('min', new Date().toLocaleDateString('en-ca'));
	dueDateInput.Id = 'dueDate';
	element.appendChild(dueDateInput);

	return element;
}

export const switchWidget = (labelOnText, labelOffText) => {
	const switchWidgetElement = document.createElement('div');
	switchWidgetElement.classList.add('switch-widget');

	const toggleSwitch = document.createElement('input');
	toggleSwitch.setAttribute('id', 'switch');
	toggleSwitch.setAttribute('type', 'checkbox');
	toggleSwitch.setAttribute('name', 'switch');
	switchWidgetElement.appendChild(toggleSwitch);

	const label = document.createElement('label');
	label.setAttribute('for', 'switch');
	switchWidgetElement.appendChild(label);

	const onLabel = document.createElement('span');
	onLabel.classList.add('on');
	onLabel.textContent = labelOnText === undefined ? 'On' : labelOnText;
	label.appendChild(onLabel);
	
	const offLabel = document.createElement('span');
	offLabel.classList.add('off');
	offLabel.textContent = labelOffText === undefined ? 'Off' : labelOffText;
	label.appendChild(offLabel);
	
	return switchWidgetElement;
}


