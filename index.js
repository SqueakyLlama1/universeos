function navigate(url) {
	document.getElementById('loadshade').style.display = "block";
	let button = document.createElement('button');
	let br = document.createElement('br');
	button.onclick = "location.reload()";
	button.id = "reloadbutton";
	document.getElementById('loadshade').appendChild(div);
	document.getElementById('loadshade').appendChild(div);
	document.getElementById('loadshade').appendChild(button);
	document.getElementById('reloadbutton').innerHTML = "Close";
	setTimeout(function() {
	const universe = "https://universe-os.com/";
		if (url == 'home') {
			window.location.href = universe;
		} else {
			window.location.href = universe + url;
		}
	}, 500);
}

function applyNavigation() {
	const navcontent = `
	<button onclick="navigate('home')" class="selectedButton">Home</button><br>
	<button onclick="navigate('download/')">Download</button>`;
	document.getElementById('navigation').innerHTML = navcontent;
}

document.addEventListener('DOMContentLoaded', applyNavigation);
