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

// list of tasks
export const projectElement = (projectObj) => {
	const element = document.createElement('div');
	element.classList.add('project');

	const projectName = document.createElement('p');
	projectName.classList.add('projectName');
	projectName.textContent = projectObj.getName();
	element.appendChild(projectName);

	const taskList = document.createElement('ul');
	taskList.classList.add('taskList');
	element.appendChild(taskList);

	// render task elements
		
	projectObj.getTasks().forEach(task => {
		taskList.appendChild(taskElement(task));
	});

	return element;
}

// list of projects
export const listElement = (listObj) => {
	const element = document.createElement('div');
	element.classList.add('list');

	const projectList = document.createElement('ul');
	projectList.classList.add('project-list');
	element.appendChild(projectList);

	// render projects
		
	listObj.getProjects().forEach(project => {
		let listItem = document.createElement('li');

		listItem.textContent = project.getName();

		projectList.appendChild(listItem);
	});

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
