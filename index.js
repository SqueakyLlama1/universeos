function navigate(url) {
				document.getElementById('loadshade').style.display = "block";
				setTimeout(function() {
					const universe = "https://universe-os.com/";
					if (url == 'home') {
						window.location.href = universe;
					} else {
						window.location.href = universe + url;
					}
				}, 500);
			}
