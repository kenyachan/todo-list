import { newTask as createTask } from './task';

export function newProject(name) {
	const tasks = [];
	
	function add(task){
		tasks.push(task);
	}

	function newTask(name) {
		let task = createTask(name);

		tasks.push(task);

		return task;
	}

	function remove(task) {
		const index = tasks.indexOf(task);

		if (index > -1)
			tasks.splice(index, 1);
	}

	function findTask(index) {
		if (tasks[index - 1] === undefined) {
			console.log(`Task "${index}" does not exist`);
			return;
		}

		return tasks[index - 1];
	}

	return {
		get tasks() {
			return tasks;
		},

		get name() {
			return name;
		},
		
		set name(newName) {
			if (typeof newName != 'string')
				throw new Error('New task name is not a string');
			
			name = newName;
		},

		add,
		newTask,
		remove,
		findTask,
	}
}

