console.log('Hello World!')

const mediaQuery = window.matchMedia('(min-width: 600px)');
const popUp = document.getElementById('share__pop-up')

function share() {
	// Tab to edit
		popUp.classList.toggle('hidden')
}

function remove() {
	// Tab to edit
	popUp.classList.toggle('hidden')
	if (e.matches) {
		popUp.classList.toggle('colorchange')
		console.log('hello')
	}
}

function con() {
	// Tab to edit
	if (!popUp.classList.contains('hidden')) {
	popUp.classList.toggle('hidden')
}
}

con()