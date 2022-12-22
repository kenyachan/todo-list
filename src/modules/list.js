export const List = (() => {

	const projects = [];	

	const getProjects = () => {
		return projects;
	}	

	const add = (project) => {
		projects.push(project);
	}

	const remove = (project) => {
		const index = projects.indexOf(project);

		if (index > -1) {
			projects.splice(index, 1);
		}
	}
	
	return {
		getProjects,
		add,
		remove,
	}
})();

