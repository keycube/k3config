const KeycubeKeyMapper =
{
	keycubeLayout: null,
	keyMapperElements: null,
	isOpen: false,
	activeKeyPage: 0,
	selectedKeyElement: null,

	keyPages: [
		[
			'KC_A', 'KC_B', 'KC_C', 'KC_D', 'KC_E', 'KC_F', 'KC_G', 'KC_H', 'KC_I', 'KC_J', 'KC_K', 'KC_L', 'KC_M',
			'KC_N', 'KC_O', 'KC_P', 'KC_Q', 'KC_R', 'KC_S', 'KC_T', 'KC_U', 'KC_V', 'KC_W', 'KC_X', 'KC_Y', 'KC_Z'
		],
		[
			'KC_0' , 'KC_1' , 'KC_2' , 'KC_3' , 'KC_4' , 'KC_5' , 'KC_6'  , 'KC_7'  , 'KC_8'  , 'KC_9'           , 'KC_F1'           , 'KC_F2'   , 'KC_F3'       ,
			'KC_F4', 'KC_F5', 'KC_F6', 'KC_F7', 'KC_F8', 'KC_F9', 'KC_F10', 'KC_F11', 'KC_F12', 'KC_LEFT_BRACKET', 'KC_RIGHT_BRACKET', 'KC_SLASH', 'KC_BACKSLASH'
		],
		[
			'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0',
			'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0', 'KC_N0'
		],
	],


	loadComponent: function (keycubeLayout) {
		if (!KeycubeLayout.isPrototypeOf(keycubeLayout)) {
			return false;
		}

		this.keycubeLayout = keycubeLayout;
		this.keyMapperElements = document.getElementsByTagName('keycube-key-mapper');

		this.loadElements();

		return true;
	},

	loadElements: function () {
		if (!KeycubeLayout.isPrototypeOf(this.keycubeLayout)) {
			return;
		}

		for (let keyMapperElement of this.keyMapperElements) {
			keyMapperElement.setAttribute('tabindex', -1);
			keyMapperElement.style.display = null;
		}

		this.loadKeyPageElements();
		this.addKeycubeNetEvents();
	},

	loadKeyPageElements: function () {
		for (let keyMapperElement of this.keyMapperElements) {
			keyMapperElement.innerHTML = '';

			let keyPageElement = document.createElement('keycube-keys');

			for (let code of this.keyPages[this.activeKeyPage]) {
				let keyElement = document.createElement('keycube-key');

				keyElement.classList.add('key-mapper-key');
				keyElement.textContent = getKeycodeRepresentationByCode(code);

				keyElement.addEventListener('click',
											(event) => { this.editKey(code); });

				keyPageElement.appendChild(keyElement);
			}

			let prevPageButtonElement = document.createElement('page-nav-button');
			let nextPageButtonElement = document.createElement('page-nav-button');

			prevPageButtonElement.id = 'prev-page-button';
			prevPageButtonElement.innerHTML = '<h2 class=\"bi bi-chevron-left\"></h2>'
			prevPageButtonElement.addEventListener('click',
												   (event) => { this.prevKeyPage(event) });

			nextPageButtonElement.id = 'next-page-button';
			nextPageButtonElement.innerHTML = '<h2 class=\"bi bi-chevron-right\"></h2>'
			nextPageButtonElement.addEventListener('click',
												   (event) => { this.nextKeyPage(event) });

			keyMapperElement.appendChild(keyPageElement);
			keyMapperElement.appendChild(prevPageButtonElement);
			keyMapperElement.appendChild(nextPageButtonElement);
		}
	},

	addKeycubeNetEvents: function () {
		let netElements = document.getElementsByTagName('keycube-net');
		for (let netElement of netElements) {
			let keyElements = netElement.getElementsByTagName("keycube-key");

			for (let keyElement of keyElements) {
				keyElement.addEventListener('mousedown',
											(event) => { event.preventDefault(); });

				keyElement.addEventListener('click',
											(event) => { this.open(event); });
			}
		}
	},

	open: function (event) {
		if (event instanceof Event) {
			if (this.selectedKeyElement instanceof Element) {
				this.selectedKeyElement.classList.remove('active');
			}

			this.selectedKeyElement = event.currentTarget;

			if (this.selectedKeyElement instanceof Element) {
				this.selectedKeyElement.classList.add('active');
			}
		}

		for (let keyMapperElement of this.keyMapperElements) {
			if (!this.isOpen) {
				keyMapperElement.setAttribute('inert', '');
				keyMapperElement.classList.add('open');
			}

			keyMapperElement.addEventListener('transitionend', () => {
				keyMapperElement.removeAttribute('inert');
				if (this.isOpen) {
					keyMapperElement.focus();
				}
			}, {once : true});

			keyMapperElement.addEventListener('focusout', () => {
				this.close();
			}, {once : true});
		}

		this.isOpen = true;
	},

	close: function () {
		if (this.selectedKeyElement instanceof Element) {
			this.selectedKeyElement.classList.remove('active');
		}

		this.selectedKeyElement = null;

		for (let keyMapperElement of this.keyMapperElements) {
			keyMapperElement.classList.remove('open');
		}

		this.isOpen = false;
	},

	editKey: function (code) {
		try {
			let face  = this.selectedKeyElement.parentElement.classList[0];
			let layer = this.keycubeLayout.activeLayer;
			let key = Array.prototype.indexOf.call(
				this.selectedKeyElement.parentNode.children,
				this.selectedKeyElement);

			this.keycubeLayout.editKey(face, layer, key, code);
		}
		catch {}
	},

	prevKeyPage: function (event) {
		event.preventDefault();

		this.activeKeyPage = this.activeKeyPage > 0
			? this.activeKeyPage - 1
			: this.keyPages.length - 1;

		this.loadKeyPageElements();
	},

	nextKeyPage: function (event) {
		event.preventDefault();

		this.activeKeyPage = this.activeKeyPage < (this.keyPages.length - 1)
			? this.activeKeyPage + 1
			: 0;

		this.loadKeyPageElements();
	},

	unloadComponent: function () {
		for (let keyMapperElement of this.keyMapperElements) {
			keyMapperElement.innerHTML = '';
			keyMapperElement.classList.remove('open');
			keyMapperElement.removeAttribute('tabindex');
			keyMapperElement.style.display = 'none';
		}

		this.keycubeLayout = null;
		this.keyMapperElements = null;
		this.isOpen = false;
		this.activeKeyPage = 0;
		this.selectedKeyElement = null;
	}
};
