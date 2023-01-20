export function newProject(name) {
	const tasks = [];
	
	function add(task){
		tasks.push(task);
	}

	function remove(task) {
		const index = tasks.indexOf(task);

		if (index > -1)
			tasks.splice(index, 1);
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
		remove,
	}
}


