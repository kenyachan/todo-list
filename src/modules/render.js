import * as icons from './icons'; 

export const taskElement = (taskObj) => {
	const element = document.createElement('li');
	element.dataset.uuid = taskObj.uuid();

	const itemCompleteButton = document.createElement('input');
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
	itemDueDate.textContent = taskObj.getDueDate();
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
