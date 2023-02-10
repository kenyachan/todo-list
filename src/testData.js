import { newProject } from './modules/project';
import { newTask } from './modules/task';

const projectNames = ['My first project', 'My second project', 'My third project', 'My fourth project'];
const taskLists = [
	['Do Something', 'Do Something Else', 'Do Another Thing', 'Do more stuff', 'Do even more stuff'], 
	['Do some other thing', 'Do some more other things', 'Do even more other things'], 
	['Do stuff', 'Do some other stuff'], 
	['Do some vague thing', 'Do some other vague thing', 'Keep doing stuff']
];

export function createTestData(app) {
	let listIndex = 0;

	projectNames.forEach(projectName => {
		app.newProject(projectName);
		
		taskLists[listIndex].forEach(taskName => {
			let task = app.activeProject.newTask(taskName);
			task.dueDate = '2100-01-01';
		});

		listIndex++;
	});
}

