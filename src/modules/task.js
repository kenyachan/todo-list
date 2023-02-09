import { format, isMatch } from 'date-fns';

export function newTask(name) {
	let completionStatus;
	let priority;
	let dueDate;

	if (name !== undefined) {
		completionStatus = false;
		priority = 'Normal';
		dueDate = '';
	}

	function update(delta) {
		if (delta.name !== undefined)
			name = delta.name;

		if (delta.completionStatus !== undefined) 
			completionStatus = delta.completionStatus;

		if (delta.priority !== undefined)
			priority = delta.priority;

		if (delta.dueDate !== undefined)
			dueDate = delta.dueDate;
	}

	return {
		get name() {
			return  name;
		},

		get completionStatus() {
			return completionStatus;
		},

		get priority() {
			return priority;
		},

		get dueDate() {
			return dueDate;
		},

		get friendlyDueDate() {
			return dueDate === '' ?
				'' :
				format(new Date(dueDate), 'dd/MM/yyyy');
		},

		set name(newName) {
			if (typeof newName != 'string')
				throw new Error('New task name is not a string');

			name = newName;
		},

		set completionStatus(newCompletionStatus) {
			if (typeof newCompletionStatus != 'boolean')
				throw new Error('Setting completion status must be a boolean');

			completionStatus = newCompletionStatus;
		},

		set priority(newPriority) {
			const validPriorities = ['high', 'normal', 'low'];

			if (!validPriorities.includes(newPriority.toLowerCase()))
					throw new Error(`Set priority must value must be ${validPriorities}`);
			
			priority = newPriority;
		},

		set dueDate(newDueDate) {
			if (newDueDate === undefined || '') {
				dueDate = '';

				return;
			}

			const requiredDateFormat = 'yyyy-MM-dd';

			if (!isMatch(newDueDate, requiredDateFormat))
				//throw new Error(`Due date must be in format ${requiredDateFormat}`);
				dueDate = '';

			dueDate =  newDueDate;
		},

		update,
	}
}

