Hooks.on('init', () => {
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
	game.settings.register('rpg-styled-ui', 'compactModeToggle', {
		name: game.i18n.localize('RPGUI.SETTINGS.COMPACT_MODE'),
		hint: game.i18n.localize('RPGUI.SETTINGS.COMPACT_MODE_HINT'),
		scope: "world",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});

	if (!game.settings.get('rpg-styled-ui', 'compactModeToggle')) {
		let newLogo = document.createElement('div');
		newLogo.classList.add("new-logo")
		newLogo.innerText = "Foundry \nVTT"
		document.body.appendChild(newLogo);
	}
});

Hooks.on('getSceneNavigationContext', () => {
	if (!game.settings.get('rpg-styled-ui', 'navigationVerticalToggle')) {
		navigation = document.querySelector("nav.app > ol#scene-list");
		navigation.classList.add("vertical")
	}
	if (game.settings.get('rpg-styled-ui', 'compactModeToggle')) {
		addClassByQuerySelector("compact-mode", "body")
	}
});

Hooks.on('renderCombatCarousel', () => {
	let carouselSize = game.settings.get('combat-carousel', 'carouselSize')
	if (carouselSize !== "") {
		addClassByQuerySelector(carouselSize, "#combat-carousel")
	}

	if (game.settings.get('combat-carousel', 'fixedTopModeToggle')) {
		addClassByQuerySelector("fixed-mode", "#combat-carousel")
	}
});

function addClassByQuerySelector(className, selector) {
	let navigation = document.querySelector(selector);
	navigation.classList.add(className)
}