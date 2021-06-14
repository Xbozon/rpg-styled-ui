Hooks.on('init', () => {
	let newLogo = document.createElement('div');
	newLogo.classList.add("new-logo")
	newLogo.innerText = "Foundry \nVTT"
	document.body.appendChild(newLogo);

	// Register module settings.
	game.settings.register('rpg-styled-ui', 'navigationVerticalToggle', {
		name: game.i18n.localize('RPGUI.SETTINGS.NAVIGATION'),
		hint: game.i18n.localize('RPGUI.SETTINGS.NAVIGATION_HINT'),
		scope: "world",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});

});

Hooks.on('getSceneNavigationContext', () => {
	if (!game.settings.get('rpg-styled-ui', 'navigationVerticalToggle')) {
		navigation = document.querySelector("nav.app > ol#scene-list");
		navigation.classList.add("vertical")
	}
});
