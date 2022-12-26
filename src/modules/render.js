export const listIcon = () => {
	const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	
	icon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	icon.setAttribute('width', '48px');
	icon.setAttribute('height', '48px');
	icon.setAttribute('viewBox', '0 0 48 48');

	const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('d', 'M7.5 34q-.65 0-1.075-.425Q6 33.15 6 32.5q0-.65.425-1.075Q6.85 31 7.5 31q.65 0 1.075.425Q9 31.85 9 32.5q0 .65-.425 1.075Q8.15 34 7.5 34Zm0-8.5q-.65 0-1.075-.425Q6 24.65 6 24q0-.65.425-1.075Q6.85 22.5 7.5 22.5q.65 0 1.075.425Q9 23.35 9 24q0 .65-.425 1.075-.425.425-1.075.425Zm0-8.5q-.65 0-1.075-.425Q6 16.15 6 15.5q0-.65.425-1.075Q6.85 14 7.5 14q.65 0 1.075.425Q9 14.85 9 15.5q0 .65-.425 1.075Q8.15 17 7.5 17Zm7 17v-3H42v3Zm0-8.5v-3H42v3Zm0-8.5v-3H42v3Z');
	icon.appendChild(path);

	return icon;
}

export const taskElement = (taskObj) => {
	const element = document.createElement('li');
	
	const itemName = document.createElement('p');
	itemName.classList.add('name');
	itemName.textContent = taskObj.getName();
	element.appendChild(itemName);

	const itemButtons = document.createElement('div');
	itemButtons.classList.add('buttonsContainer');
	element.appendChild(itemButtons);

	const itemPriority = document.createElement('p');
	itemPriority.classList.add('priority');
	itemPriority.textContent = taskObj.getPriority();
	itemButtons.appendChild(itemPriority);

	const itemDueDate = document.createElement('p');
	itemDueDate.classList.add('dueDate');
	itemDueDate.textContent = taskObj.getDueDate();
	itemButtons.appendChild(itemDueDate);

	const itemCompleteButton = document.createElement('button');
	itemCompleteButton.textContent = '.';
	itemButtons.appendChild(itemCompleteButton);

	return element;
}

export const taskListElement = (projectName) => {
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
	const icon = listIcon();
	listItemIcon.appendChild(icon);
	listItemInner.appendChild(listItemIcon);

	const listItemText = document.createElement('p');
	listItemText.textContent = projectName;
	listItemInner.appendChild(listItemText);

	return element;
}

export const projectListElement = () => {
	const element = document.createElement('div');
	element.classList.add('projectListPane');

	const projectListElement = document.createElement('ul');
	projectListElement.classList.add('projectList');
	element.appendChild(projectListElement);

	return element;
}

export const logo = () => {
	const logoElement = document.createElement('div');
	logoElement.classList.add('logo');

	const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	icon.setAttribute('width', '16px');
	icon.setAttribute('height', '16px');
	icon.setAttribute('viewBox', '0 0 16 16');
	icon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	icon.setAttribute('version', '1.1');
	icon.setAttribute('fill', 'none');
	icon.setAttribute('stroke', 'currentColor');
	icon.setAttribute('stroke-linecap', 'round');
	icon.setAttribute('stroke-linejoin', 'round');
	icon.setAttribute('stroke-width', '1.5');
	logoElement.appendChild(icon);
	
	const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('d','m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5');
	icon.appendChild(path);
	
	const logoText = document.createElement('p');
	logoText.textContent = 'ToDo';
	logoElement.appendChild(logoText);

	return logoElement;
}

export const header = () => {
	const headerElement = document.createElement('header');

	const headerLogo = logo();
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
