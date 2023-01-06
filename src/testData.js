import { Project } from './modules/project';
import { Task } from './modules/task';
import { List } from './modules/list';

const projectNames = ['My first project', 'My second project', 'My third project', 'My fourth project'];
const taskLists = [
	['Do Something', 'Do Something Else', 'Do Another Thing', 'Do more stuff', 'Do even more stuff'], 
	['Do some other thing', 'Do some more other things', 'Do even more other things'], 
	['Do stuff', 'Do some other stuff'], 
	['Do some vague thing', 'Do some other vague thing', 'Keep doing stuff']
];

export const TestData = (() => {
	function create() {
		let listIndex = 0;
		projectNames.forEach(projectName => {
			let project = Project.create(projectName);

			taskLists[listIndex].forEach(taskName => {
				let task = Task.create(taskName);
				
				task.setDueDate('2100-01-01');
				project.add(task);

			});

			listIndex++;

			List.add(project);
		});

		return List;
	}

	return {
		create,
	};
})();

