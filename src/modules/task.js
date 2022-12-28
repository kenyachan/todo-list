import { v4 as uuidv4 } from 'uuid';

export const Task = (() => {
	const create = (name) => {	
		let completionStatus = 'Incomplete';
		let priority = 'Normal';
		let dueDate = '';
		const _uuid = uuidv4();

		const uuid = () => {
			return _uuid;
		}

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
			uuid,
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

	return {
		create,
	};
})();

