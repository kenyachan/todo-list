export const Task = (name) => {
	
	let completionStatus = 'Incomplete';
	let priority = 'Normal';
	let dueDate = '';

	const getName = () => {
		return name;
	}

	const getStatus = () => {
		return completionStatus;
	}

	const getPriority = () => {
		return priority;
	}

	const getDueDate = () => {
		return dueDate;
	}	
	
	const getDOMElement = () => {
		const taskElement = document.createElement('div');
		taskElement.classList.add('list-item');
		
		const itemName = document.createElement('p');
		itemName.classList.add('item-name');
		itemName.textContent = getName();
		taskElement.appendChild(itemName);

		const itemButtons = document.createElement('div');
		itemButtons.classList.add('item-buttons');
		taskElement.appendChild(itemButtons);

		const itemPriority = document.createElement('p');
		itemPriority.classList.add('item-priority');
		itemPriority.textContent = getPriority();
		itemButtons.appendChild(itemPriority);

		const itemDueDate = document.createElement('p');
		itemDueDate.classList.add('item-due-date');
		itemDueDate.textContent = getDueDate();
		itemButtons.appendChild(itemDueDate);

		const itemCompleteButton = document.createElement('button');
		itemCompleteButton.textContent = '.';
		itemButtons.appendChild(itemCompleteButton);

		return taskElement;
	}

	const setName = (newName) => {
		name = newName;
	}

	const setComplete = () => {
		completionStatus = 'Complete';
	}

	const setIncomplete = () => {
		completionStatus = 'Incomplete';
	}

	const setPriorityHigh = () => {
		priority = 'High';
	}

	const setPriorityNormal = () => {
		priority = 'Normal';
	}

	const setPriorityLow = () => {
		priority = 'Low';
	}

	const setDueDate = (newDueDate) => {
		dueDate = newDueDate;
	}

	return {
		getName,
		getStatus,
		getPriority,
		getDueDate,
		getDOMElement,
		setName,
		setComplete,
		setIncomplete,
		setPriorityHigh,
		setPriorityNormal,
		setPriorityLow,
		setDueDate,
	};
}

