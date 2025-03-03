let primaryLoaded;

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
	<button onclick="navigate('home')">Home</button><br>
	<button onclick="navigate('download/')">Download</button><br>
 	<button onclick="navigate('contact/')">Contact</button>`
	document.getElementById('navigation').innerHTML = navcontent;
}

document.addEventListener('DOMContentLoaded', applyNavigation);

const disclaimerArray = [
	"Universe is only available in English.",
	"El universo solo está disponible en inglés.",
	"L'univers est uniquement disponible en anglais.",
	"Das Universum ist nur auf Englisch verfügbar.",
	"宇宙仅提供英文版本。",
	"Вселенная доступна только на английском языке.",
	"宇宙は英語でのみ利用可能です。",
	"Universo está disponível apenas em inglês.",
	"الكون متاح باللغة الإنجليزية فقط.",
	"ब्रह्मांड केवल अंग्रेजी में उपलब्ध है।",
	"বিশ্ব কেবলমাত্র ইংরেজিতে উপলব্ধ।",
	"الكون متوفر فقط باللغة الإنجليزية.",
	"Evren yalnızca İngilizce olarak mevcuttur.",
	"Всесвіт доступний лише англійською мовою.",
	"宇宙은 영어로만 제공됩니다.",
	"Το σύμπαν είναι διαθέσιμο μόνο στα Αγγλικά.",
	"Il universo è disponibile solo in inglese.",
	"Vesmir je k dispozici pouze v angličtině.",
	"Het universum is alleen beschikbaar in het Engels.",
	"宇宙 chỉ có sẵn bằng tiếng Anh.",
	"Uniberso ay makukuha lamang sa Ingles."
];

var daIndex = 0;

function disclaimerIteration() {
	setInterval(() => {
		document.getElementById('disclaimer').innerHTML = disclaimerArray[daIndex];
		daIndex = (daIndex + 1) % disclaimerArray.length;
	}, 1000); // 7 seconds
}
