const KeycubeNet =
{
	keycubeLayout: null,
	netElements: null,

	loadComponent: function (keycubeLayout) {
		if (!KeycubeLayout.isPrototypeOf(keycubeLayout)) {
			return false;
		}

		this.keycubeLayout = keycubeLayout;
		this.netElements = document.getElementsByTagName('keycube-net');

		this.loadElements();

		return true;
	},

	loadElements: function () {
		if (!KeycubeLayout.isPrototypeOf(this.keycubeLayout)) {
			return;
		}

		for (let netElement of this.netElements) {
			netElement.innerHTML = '';
			netElement.style.display = null;

			for (let face in keycubeFaces) {
				let faceElement = document.createElement('keycube-keys');

				faceElement.classList.add(face);

				for (let key of this.keycubeLayout[face][this.keycubeLayout.activeLayer]) {
					let keyElement = document.createElement('keycube-key');

					keyElement.classList.add(this.keycubeLayout['keycube-id']);
					keyElement.textContent = getKeycodeRepresentationByCode(key);

					faceElement.appendChild(keyElement);
				}

				netElement.appendChild(faceElement);
			}
		}
	},

	refreshElements: function () {
		if (!KeycubeLayout.isPrototypeOf(this.keycubeLayout)) {
			return;
		}

		for (let netElement of this.netElements) {
			for (let face in keycubeFaces) {
				let faceElements = netElement.getElementsByClassName(face);

				for (let faceElement of faceElements) {
					let keyElements = faceElement.children;

					for (let key = 0; key < keyElements.length; key++) {
						if (key >= this.keycubeLayout[face][this.keycubeLayout.activeLayer].length) {
	 						continue;
						}

						keyElements[key].textContent = getKeycodeRepresentationByCode(this.keycubeLayout[face][this.keycubeLayout.activeLayer][key]);
					}
				}

			}

		}
	},

	unloadComponent: function () {
		for (let netElement of this.netElements) {
			netElement.innerHTML = '';
			netElement.style.display = 'none';
		}

		this.keycubeLayout = null;
		this.netElements = null;
	}
};
