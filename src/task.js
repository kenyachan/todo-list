export const Task = (name) => {
	
	let completionStatus = 'Incomplete';
	let priority = 'Normal';

	const getName = () => {
		return name;
	}

	const getStatus = () => {
		return completionStatus;
	}

	const getPriority = () => {
		return priority;
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

	return {
		getName,
		getStatus,
		getPriority,
		setName,
		setComplete,
		setIncomplete,
		setPriorityHigh,
		setPriorityNormal,
		setPriorityLow,
	};
}

