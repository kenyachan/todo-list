import logoImg from './assets/logo-icon.svg';

export const Logo = () => {
	const logoElement = document.createElement('div');
	logoElement.classList.add('logo');
	
	const icon = new Image();
	icon.src = logoImg;
	logoElement.appendChild(icon);

	const logoText = document.createElement('p');
	logoText.textContent = "ToDo";
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
