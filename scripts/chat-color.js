Hooks.on('init', () => {
	let newLogo = document.createElement('div');
	newLogo.classList.add("new-logo")
	newLogo.innerText = "Foundry \nVTT"
	document.body.appendChild(newLogo);
});