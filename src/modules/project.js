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
			const index = tasks.indexOf(task);
	
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


