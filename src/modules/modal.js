export const Modal = (() => {
	const create = (modalElement) => {
		const taskNameInput = modalElement.querySelector('input[name="taskName"]');
		const priorityInput = modalElement.querySelector('select[name="priority"]');
		const dueDateInput = modalElement.querySelector('input[name="dueDate"]');
		const completeCheck = modalElement.querySelector('input[name="switch"]');
		const overlay = modalElement.querySelector('.overlay');

		const updateBtn = modalElement.querySelector('#updateTaskBtn');
		const cancelBtn = modalElement.querySelector('#cancelBtn');
		const deleteBtn = modalElement.querySelector('#deleteBtn');

		return {
			taskNameInput,
			priorityInput,
			dueDateInput,
			completeCheck,
			overlay,
			updateBtn,
			cancelBtn,
			deleteBtn,
		}
	}

	return {
		create,
	}	
})();
