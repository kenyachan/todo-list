export const Project = (() => {
	const create = (name) => {
		const tasks = [];

		const getTasks = () => {
			return tasks;
		}
	
		const getName = () => {
			return name;
		}
	
		const setName = () => {
			name = newName;
		}
	
		const add = (task) => {
			tasks.push(task);
		}
	
		const remove = (task) => {
			const index = task.indexOf(task);
	
			if (index > -1) {
				tasks.splice(index, 1);
			}
		}
	
		return {
			getTasks,
			getName,
			setName,
			add,
			remove,
		}
	}

	return {
		create,
	};
})();

export const newProject = (name) => {
	const tasks = [];

	const getTasks = () => {
		return tasks;
	}

	const getName = () => {
		return name;
	}

	const setName = () => {
		name = newName;
	}

	const add = (task) => {
		tasks.push(task);
	}

	const remove = (task) => {
		const index = task.indexOf(task);

		if (index > -1) {
			tasks.splice(index, 1);
		}
	}

	return {
		getTasks,
		getName,
		setName,
		add,
		remove,
	}
}
