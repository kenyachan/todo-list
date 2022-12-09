export const List = (name) => {

	const tasks = [];
	
	const setName = (newName) => {
		name = newName;
	}

	const getTasks = () => {
		return tasks;
	}

	const add = (item) => {
		tasks.push(item);
	}

	const remove = (item) => {
		const index = tasks.indexOf(item);

		if (index > -1) {
			tasks.splice(index, 1);
		}
	}
	
	return {
		setName,
		getTasks,
		add,
		remove,
	}
}

