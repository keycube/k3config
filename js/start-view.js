const startViewTitle = "Keycube Configurator";

const startViewOptions = {
	"Keycube 1x1": () => {
		layout = KeycubeLayout.create("keycube_1x1");
		KeycubeNet.loadComponent(layout);
		KeycubeLayerSelector.loadComponent(layout);
		KeycubeKeyMapper.loadComponent(layout);
	},
	"Keycube 2x2": () => {
		layout = KeycubeLayout.create("keycube_2x2");
		KeycubeNet.loadComponent(layout);
		KeycubeLayerSelector.loadComponent(layout);
		KeycubeKeyMapper.loadComponent(layout);
	},
	"Keycube 3x3": () => {
		layout = KeycubeLayout.create("keycube_3x3");
		KeycubeNet.loadComponent(layout);
		KeycubeLayerSelector.loadComponent(layout);
		KeycubeKeyMapper.loadComponent(layout);
	},
	"Keycube 4x4": () => {
		layout = KeycubeLayout.create("keycube_4x4");
		KeycubeNet.loadComponent(layout);
		KeycubeLayerSelector.loadComponent(layout);
		KeycubeKeyMapper.loadComponent(layout);
	},
	"Keycube 5x5": () => {
		layout = KeycubeLayout.create("keycube_5x5");
		KeycubeNet.loadComponent(layout);
		KeycubeLayerSelector.loadComponent(layout);
		KeycubeKeyMapper.loadComponent(layout);
	},
	"Keycube 6x6": () => {
		layout = KeycubeLayout.create("keycube_6x6");
		KeycubeNet.loadComponent(layout);
		KeycubeLayerSelector.loadComponent(layout);
		KeycubeKeyMapper.loadComponent(layout);
	},
};

const StartView = {
	isLoaded: false,
	startViewElements: null,

	load: function () {
		this.startViewElements = document.getElementsByTagName('start-view');

		for (let startViewElement of this.startViewElements) {
			let headingElement = document.createElement('h1');

			headingElement.textContent = startViewTitle;

			let optionsDivElement = document.createElement('div');
			for (let startViewOption in startViewOptions) {
				let optionButtonElement = document.createElement('button');

				optionButtonElement.textContent = startViewOption;
				optionButtonElement.onclick = () => {
					this.loadOption(startViewOptions[startViewOption]);
				}

				optionsDivElement.appendChild(optionButtonElement);
			}

			startViewElement.appendChild(headingElement);
			startViewElement.appendChild(optionsDivElement);
		}


		this.isLoaded = true;
	},

	loadOption: function(option) {
		for (let startViewElement of this.startViewElements) {
			let animation = startViewElement.animate(
				[
					{ opacity: 1 },
					{ opacity: 0 }
				],
				{
					duration: 750,
					easing: 'ease-out'
				}
			);

			animation.onfinish = () => {
				StartView.unload();

				if (typeof(option) == 'function') {
					option();
				}
			};
		}
	},

	unload: function () {
		for (let startViewElement of this.startViewElements) {
			startViewElement.innerHTML = '';
		}

		this.isLoaded = false;
	}
}

StartView.load();
