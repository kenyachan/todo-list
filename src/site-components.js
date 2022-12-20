export const Logo = () => {
	const logoElement = document.createElement('div');
	logoElement.classList.add('logo');

	const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	icon.setAttribute('width', '16px');
	icon.setAttribute('height', '16px');
	icon.setAttribute('viewBox', '0 0 16 16');
	icon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	icon.setAttribute('version', '1.1');
	icon.setAttribute('fill', 'none');
	icon.setAttribute('stroke', 'currentColor');
	icon.setAttribute('stroke-linecap', 'round');
	icon.setAttribute('stroke-linejoin', 'round');
	icon.setAttribute('stroke-width', '1.5');
	logoElement.appendChild(icon);
	
	const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('d','m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5');
	icon.appendChild(path);
	
	const logoText = document.createElement('p');
	logoText.textContent = 'ToDo';
	logoElement.appendChild(logoText);

	return logoElement;
}

export const Header = () => {
	const headerElement = document.createElement('header');

	const logo = Logo();
	headerElement.appendChild(logo);

	return headerElement;
}

export const Footer = () => {
	const footerElement = document.createElement('footer');

	const authorWidget = document.createElement('div');
	authorWidget.classList.add('author-widget');

	const authorTextElement = document.createElement('p');
	authorTextElement.textContent = 'Created by ';

	const authorLink = document.createElement('a');
	const link = 'https://github.com/kenyachan';
	const author = 'Kenya Chan';
	authorLink.setAttribute('href', link);
	authorLink.textContent = author;
	authorTextElement.appendChild(authorLink);

	authorWidget.appendChild(authorTextElement);
	
	footerElement.appendChild(authorWidget);

	return footerElement;
}

const Projects = () => {
	const projectsElement = document.createElement('aside');

}

const List = () => {
	const listElement = document.createElement('div');

}
