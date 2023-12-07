const viewElements = [
	document.getElementById('keycube-text-view'),
	document.getElementById('keycube-net-view'),
	document.getElementById('keycube-3d-view')
];

var currentView = 1;

var prevViewButton = document.getElementById('prev-view-btn');
var nextViewButton = document.getElementById('next-view-btn');

function prevView (btn) {
	if (currentView <= 0) {
		return;
	}

	viewElements[currentView].style.left = '150%';
	currentView -= 1;
	viewElements[currentView].style.left = null;

	prevViewButton.style.opacity = (currentView > 0) ? 1 : 0;
	nextViewButton.style.opacity = (currentView < (viewElements.length - 1)) ? 1 : 0;
}

function nextView (btn) {
	if (currentView >= (viewElements.length - 1)) {
		return;
	}

	viewElements[currentView].style.left = '-50%';
	currentView += 1;
	viewElements[currentView].style.left = null;

	prevViewButton.style.opacity = (currentView > 0) ? 1 : 0;
	nextViewButton.style.opacity = (currentView < (viewElements.length - 1)) ? 1 : 0;
}
