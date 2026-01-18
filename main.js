console.log('Hello World!')

const mediaQuery = window.matchMedia('(min-width: 600px)');
const popUp = document.getElementById('share__pop-up')
const shareSection = document.querySelector('.share-section')


function share() {
		popUp.classList.toggle('hidden')
		popUp.classList.add('slideup')
}

function remove() {
	// Tab to edi
		popUp.classList.toggle('hidden')
}

document.addEventListener('click', (e) => {
	if (!e.target.closest('.share-section')) {
		popUp.classList.add('hidden')
	}
})