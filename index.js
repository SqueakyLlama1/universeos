function navigate(url) {
	document.getElementById('loadshade').style.display = "block";
	const universe = "https://universe-os.com/";
	if (url == 'home') {
		window.location.href = universe;
	} else {
		window.location.href = universe + url;
	}
}

function applyNavigation() {
	const navcontent = `
	<button onclick="navigate('home')" class="selectedButton">Home</button><br>
	<button onclick="navigate('download/')">Download</button>`;
	document.getElementById('navigation').innerHTML = navcontent;
}

document.addEventListener('DOMContentLoaded', applyNavigation);
