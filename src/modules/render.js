export const taskElement = (taskObj) => {
	const element = document.createElement('div');
	element.classList.add('list-item');
	
	const itemName = document.createElement('p');
	itemName.classList.add('item-name');
	itemName.textContent = taskObj.getName();
	element.appendChild(itemName);

	const itemButtons = document.createElement('div');
	itemButtons.classList.add('item-buttons');
	element.appendChild(itemButtons);

	const itemPriority = document.createElement('p');
	itemPriority.classList.add('item-priority');
	itemPriority.textContent = taskObj.getPriority();
	itemButtons.appendChild(itemPriority);

	const itemDueDate = document.createElement('p');
	itemDueDate.classList.add('item-due-date');
	itemDueDate.textContent = taskObj.getDueDate();
	itemButtons.appendChild(itemDueDate);

	const itemCompleteButton = document.createElement('button');
	itemCompleteButton.textContent = '.';
	itemButtons.appendChild(itemCompleteButton);

	return element;
}

export const listElement = (listObj) => {
	const element = document.createElement('div');
	element.classList.add('list');

	const listName = document.createElement('p');
	listName.classList.add('list-name');
	listName.textContent = listObj.getName();
	element.appendChild(listName);

	const itemContainer = document.createElement('div');
	itemContainer.classList.add('item-container');
	element.appendChild(itemContainer);

	// render list elements
		
	listObj.getTasks().forEach(task => {
		itemContainer.appendChild(taskElement(task));
	});

	return element;
}
