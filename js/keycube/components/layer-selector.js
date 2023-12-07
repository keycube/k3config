const KeycubeLayerSelector =
{
	keycubeLayout: null,
	layerSelectorElements: null,

	loadComponent: function (keycubeLayout) {
		if (!KeycubeLayout.isPrototypeOf(keycubeLayout)) {
			return false;
		}

		this.keycubeLayout = keycubeLayout;
		this.layerSelectorElements = document.getElementsByTagName('keycube-layer-selector');

		this.loadElements();

		return true;
	},

	loadElements: function () {
		if (!KeycubeLayout.isPrototypeOf(this.keycubeLayout)) {
			return;
		}

		for (let layerSelectorElement of this.layerSelectorElements) {
			layerSelectorElement.innerHTML = '';
			layerSelectorElement.style.display = null;

			for (let i = 0; i < keycubeLayerNumber; i++) {
				let selectButtonElement = document.createElement('select-button');

				selectButtonElement.textContent = i;
				if (this.keycubeLayout.activeLayer === i) {
					selectButtonElement.classList.add('active');
				}

				selectButtonElement.addEventListener('mousedown', () => {
					event.preventDefault();
				});

				selectButtonElement.addEventListener('click', () => {
					this.keycubeLayout.switchLayer(i);
				});

				layerSelectorElement.appendChild(selectButtonElement);
			}
		}
	},

	refreshElements: function () {
		if (!KeycubeLayout.isPrototypeOf(this.keycubeLayout)) {
			return;
		}

		for (let layerSelectorElement of this.layerSelectorElements) {
			let selectButtonElements = layerSelectorElement.getElementsByTagName('select-button');

			for (let i = 0; i < keycubeLayerNumber; i++) {
				if (!selectButtonElements[i]) {
					break;
				}

				selectButtonElements[i].textContent = i;
				if (this.keycubeLayout.activeLayer === i) {
					selectButtonElements[i].classList.add('active');
				}
				else {
					selectButtonElements[i].classList.remove('active');
				}
			}
		}
	},

	unloadComponent: function () {
		for (let layerSelectorElement of this.layerSelectorElements) {
			layerSelectorElement.innerHTML = '';
			layerSelectorElement.style.display = 'none';
		}

		this.keycubeLayout = null;
		this.layerSelectorElements = null;
	}
};
