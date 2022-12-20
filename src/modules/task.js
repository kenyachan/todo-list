export const newTask = (name) => {
	
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
		setName,
		setComplete,
		setIncomplete,
		setPriorityHigh,
		setPriorityNormal,
		setPriorityLow,
		setDueDate,
	};
}

