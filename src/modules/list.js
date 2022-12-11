import { Task } from './task';

export const List = (name) => {

	const tasks = [];
	
	const setName = (newName) => {
		name = newName;
	}

	const getName = () => {
		return name;
	}

	const getTasks = () => {
		return tasks;
	}

	const getDOMElement = () => {
		const listElement = document.createElement('div');
		listElement.classList.add('list');

		const listName = document.createElement('p');
		listName.classList.add('list-name');
		listName.textContent = getName();
		listElement.appendChild(listName);

		const itemContainer = document.createElement('div');
		itemContainer.classList.add('item-container');
		listElement.appendChild(itemContainer);

		// render list elements
		
		tasks.forEach(task => {
			listElement.appendChild(task.getDOMElement());
		});

		return listElement;
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
		getName,
		getTasks,
		getDOMElement,
		add,
		remove,
	}
}

