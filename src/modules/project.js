import { newTask as createTask } from './task';

export function newProject(name) {
	let tasks = [];
	
	function contains(taskName) {
		return tasks.some(task => task.name === taskName);
	}

	function add(task){
		if (contains(task.name)) {
			console.log(`Task with name '${task.name}' already exists.`);
			return;
		}
		tasks.push(task);
	}

	return {
		get tasks() {
			return tasks;
		},

		set tasks(newTaskList) {
			tasks = newTaskList;
		},
		
		get name() {
			return name;
		},
		
		set name(newName) {
			if (typeof newName != 'string')
				throw new Error('New task name is not a string');
			
			name = newName;
		},

		contains,
		add,
	}
}

