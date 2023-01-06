const svgNS = 'http://www.w3.org/2000/svg';

export const logo = () => {
	const logoElement = document.createElement('div');
	logoElement.classList.add('logo');

	const icon = document.createElementNS(svgNS, 'svg');
	icon.setAttribute('width', '16px');
	icon.setAttribute('height', '16px');
	icon.setAttribute('viewBox', '0 0 16 16');
	icon.setAttribute('xmlns', svgNS);
	icon.setAttribute('version', '1.1');
	icon.setAttribute('fill', 'none');
	icon.setAttribute('stroke', 'currentColor');
	icon.setAttribute('stroke-linecap', 'round');
	icon.setAttribute('stroke-linejoin', 'round');
	icon.setAttribute('stroke-width', '1.5');
	logoElement.appendChild(icon);
	
	const path = document.createElementNS(svgNS, 'path');
	path.setAttribute('d','m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5');
	icon.appendChild(path);
	
	const logoText = document.createElement('p');
	logoText.textContent = 'ToDo';
	logoElement.appendChild(logoText);

	return logoElement;
}

const listPath = 'M7.5 34q-.65 0-1.075-.425Q6 33.15 6 32.5q0-.65.425-1.075Q6.85 31 7.5 31q.65 0 1.075.425Q9 31.85 9 32.5q0 .65-.425 1.075Q8.15 34 7.5 34Zm0-8.5q-.65 0-1.075-.425Q6 24.65 6 24q0-.65.425-1.075Q6.85 22.5 7.5 22.5q.65 0 1.075.425Q9 23.35 9 24q0 .65-.425 1.075-.425.425-1.075.425Zm0-8.5q-.65 0-1.075-.425Q6 16.15 6 15.5q0-.65.425-1.075Q6.85 14 7.5 14q.65 0 1.075.425Q9 14.85 9 15.5q0 .65-.425 1.075Q8.15 17 7.5 17Zm7 17v-3H42v3Zm0-8.5v-3H42v3Zm0-8.5v-3H42v3Z';
const editPath = 'M9 39h2.2l22.15-22.15-2.2-2.2L9 36.8Zm30.7-24.3-6.4-6.4 2.1-2.1q.85-.85 2.1-.85t2.1.85l2.2 2.2q.85.85.85 2.1t-.85 2.1Zm-2.1 2.1L12.4 42H6v-6.4l25.2-25.2Zm-5.35-1.05-1.1-1.1 2.2 2.2Z';
const addPath = 'M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z';
const removePath = 'M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z';

export const list = () => {
	return createSVGIcon(listPath); 
}

export const edit = () => {
	return createSVGIcon(editPath);
}

export const add = () => {
	return createSVGIcon(addPath);
}

export const remove = () => {
	return createSVGIcon(removePath);
}

function createSVGIcon(svgPath) {
	const icon = document.createElementNS(svgNS, 'svg');
	
	icon.setAttribute('xmlns', svgNS);
	icon.setAttribute('width', '48px');
	icon.setAttribute('height', '48px');
	icon.setAttribute('viewBox', '0 0 48 48');

	const path = document.createElementNS(svgNS, 'path');
	path.setAttribute('d', svgPath); 
	icon.appendChild(path);

	return icon;
}
