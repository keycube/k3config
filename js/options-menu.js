const OptionsMenu = {
	isOpen: false,

	open: function (btn) {
		btn.innerHTML = '<h1 class=\"bi bi-x-lg\"></h1>'

		divElements = btn.parentElement.getElementsByTagName('div');
		for (let divElement of divElements) {
			divElement.classList.add('open');
		}

		btn.onclick = function() { OptionsMenu.close(this); };

		this.isOpen = true;
	},

	close: function (btn) {
		btn.innerHTML = '<h1 class=\"bi bi-list\"></h1>'

		divElements = btn.parentElement.getElementsByTagName('div');
		for (let divElement of divElements) {
			divElement.classList.remove('open');
		}

		btn.onclick = function() { OptionsMenu.open(this); };

		this.isOpen = false;
	}
}

/* Import Keycube Config from Json */

function importKeycubeLayout() {
    let element = document.createElement('input');

	element.display = 'none';
    element.setAttribute('type', 'file');
	element.setAttribute('accept', '.json');

    document.body.appendChild(element);
    element.click();

	element.addEventListener('change', (event) => {
		let fileList = event.target.files;
		let fileReader = null;

		if (!fileList && !fileList[0]) {
			return;
		}

		fileReader = new FileReader();
		fileReader.onload = (event) => {
			const content = event.target.result;
			const keycubeLayout = KeycubeLayout.createFromJson(content);

			if (keycubeLayout) {
				keycubeLayout.loadKeycubeNet();
			}

		};

		fileReader.readAsText(fileList[0]);
	});

	document.body.removeChild(element);
}

/* Export Keycube Config to Json */

function exportKeycubeLayout() {
    let element = null;

	if (!KeycubeLayout.isPrototypeOf(loadedLayout)) {
		return;
	}

	element = document.createElement('a');
	element.display = 'none';
    element.setAttribute('href',
						 'data:application/json;'
						 + 'charset=utf-8,'
						 + encodeURIComponent(loadedLayout.exportJson()));
	element.setAttribute('download', loadedLayout.name);

    document.body.appendChild(element);
    element.click();
	document.body.removeChild(element);
}

/* Load & toggle Theme */

function loadTheme() {
    let theme = localStorage.getItem('theme');

    if (theme) {
        document.documentElement.setAttribute('theme', theme);
    }
	else {
		document.documentElement.setAttribute('theme', 'dark');
	}
}

function toggleTheme() {
	const root = document.documentElement;
	let theme = root.getAttribute('theme');

	if (!theme) {
		theme = 'dark';
	}
	else {
		theme = (theme === 'dark')
			? 'light'
			: 'dark';
	}

	root.setAttribute('theme', theme);
	localStorage.setItem('theme', theme);
}

loadTheme();

/* Options Menu Click Event Listeners */


document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('menu-import-json').addEventListener('click', importKeycubeLayout);
	document.getElementById('menu-export-json').addEventListener('click', exportKeycubeLayout);
	//document.getElementById('menu-view-json').addEventListener('click', viewJson);
	document.getElementById('menu-toggle-theme').addEventListener('click', toggleTheme);
});
