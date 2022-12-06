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


