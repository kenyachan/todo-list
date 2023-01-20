export const projectsList = (() => {
	const projects = [];

	function add(project) {
		projects.push(project);
	}

	function remove(project) {
		let index = projects.indexOf(project);

		if (index > -1)
			projects.splice(index, 1);
	}

	return {
		get projects() {
			return projects;
		},

		add,
		remove,
	}
})();
