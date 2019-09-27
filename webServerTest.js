window.onload = () => {
	// write text
	const pElement = document.createElement('p');
	pElement.innerText = 'this text is remote resource';
	document.body.appendChild(pElement);
};
