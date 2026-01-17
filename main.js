console.log('Hello World!')

const shareSection = document.querySelector(".share-links");
const activeShareIcon = document.querySelector(".share-icon-active");
const shareIcon = document.getElementById("share-icon");
const authorSection = document.getElementById("author-section");

function share() {
	// Tab to edit
	if (screen.width>= 600) {
		showShareSection()
		// toggleIconColor()
	} else if(screen.width < 600) {
		changeSections()
	} else {
		return
	}
}

function changeSections() {
	// Tab to edit
	shareSection.style.display = 'flex';
	authorSection.style.display = 'none';
}

function showShareSection() {
	// Tab to edit
	shareSection.style.display = (shareSection.style.display === 'none') ? 'flex' : 'none';
	authorSection.style.display = 'flex';
}