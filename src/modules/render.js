export const taskElement = (taskObj) => {
	const element = document.createElement('li');
	
	const itemName = document.createElement('p');
	itemName.classList.add('name');
	itemName.textContent = taskObj.getName();
	element.appendChild(itemName);

	const itemButtons = document.createElement('div');
	itemButtons.classList.add('buttons-container');
	element.appendChild(itemButtons);

	const itemPriority = document.createElement('p');
	itemPriority.classList.add('priority');
	itemPriority.textContent = taskObj.getPriority();
	itemButtons.appendChild(itemPriority);

	const itemDueDate = document.createElement('p');
	itemDueDate.classList.add('due-date');
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
	projectName.classList.add('project-name');
	projectName.textContent = projectObj.getName();
	element.appendChild(projectName);

	const taskList = document.createElement('ul');
	taskList.classList.add('task-list');
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

	const listName = document.createElement('p');
	listName.classList.add('name');
	listName.textContent = listObj.getName();
	element.appendChild(listName);

	const projectsList = document.createElement('ul');
	projectsList.classList.add('project-list');
	element.appendChild(itemContainer);

	// render project elements
		
	listObj.getProjects().forEach(project => {
		projectList.appendChild(project.getName());
	});

	return element;
}

