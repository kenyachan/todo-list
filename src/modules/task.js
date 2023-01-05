import { format, isMatch } from 'date-fns';

export const Task = (() => {
	const create = (_name) => {	
		let _completionStatus = false;
		let _priority = 'Normal';
		let _dueDate = '';

		const getName = () => {
			return _name;
		}

		const getCompletionStatus = () => {
			return _completionStatus;
		}

		const getPriority = () => {
			return _priority;
		}
	
		const getDueDate = () => {
			return _dueDate;
		}	

		const getDueDateForDisplay = () => {
			return format(new Date(_dueDate), 'dd/MM/yyyy');
		}

		const setName = (newName) => {
			if (typeof newName != 'string') {
				throw new Error('New task name is not a string');
			}

			_name = newName;
		}
	
		const setCompletionStatus = (completionStatus) => {
			if (typeof completionStatus != 'boolean') {
				throw new Error('Setting completion status must be a boolean');
			}

			_completionStatus = completionStatus;
		}

		const setPriority = (newPriority) => {
			const validPriorities = ['high', 'normal', 'low'];

			if (!validPriorities.includes(newPriority.toLowerCase())) {
				throw new Error(`Set priority must value must be ${validPriorities}`);
			}

			_priority = newPriority;
		}
	
		const setDueDate = (newDueDate) => {
			const requiredDateFormat = 'yyyy-MM-dd';

			if (!isMatch(newDueDate, requiredDateFormat)) {
				throw new Error(`Due date must be in format ${requiredDateFormat}`);
			}

			_dueDate =  newDueDate;
		}
	
		return {
			getName,
			getCompletionStatus,
			getPriority,
			getDueDate,
			getDueDateForDisplay,
			setName,
			setCompletionStatus,
			setPriority,
			setDueDate,
		};
	}

	return {
		create,
	};
})();

