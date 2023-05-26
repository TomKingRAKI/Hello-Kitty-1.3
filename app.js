let punkty = 0;
let bakeryCena = 100;
let bakeryLiczba = 0;
let schoolCena = 100;
let schoolLiczba = 0;
let cinemaCena = 100;
let cinemaLiczba = 0;
let clubCena = 100;
let clubLiczba = 0;
let japaneseCena = 100;
let japaneseLiczba = 0;
let wiecejPunktowCena = 50;
let wiecejPunktowLiczba = 1;

// Hellokittyblock elementy
const obrazek = document.getElementById('obrazek');
const punktyElement = document.getElementById('punkty');
const wiecejPunktowButton = document.getElementById('wiecejPunktow');

// Elementy Piekarnia
const bakeryButton = document.getElementById('bakeryupgrade');
const tlobakery = document.getElementById('bakerytlo')
const firstbuybakery = document.getElementById('firstbuybakery')
const secondbuybakery = document.getElementById('secondbuybakery')
const thirdbuybakery = document.getElementById('thirdbuybakery')
const fourbuybakery = document.getElementById('fourbuybakery')
const fivebuybakery = document.getElementById('fivebuybakery')
const sixbuybakery = document.getElementById('sixbuybakery')
const sevenbuybakery = document.getElementById('sevenbuybakery')
const eightbuybakery = document.getElementById('eightbuybakery')
const ninebuybakery = document.getElementById('ninebuybakery')
const tenbuybakery = document.getElementById('tenbuybakery')
const elevenbuybakery = document.getElementById('elevenbuybakery')
const twelwbuybakery = document.getElementById('twelwbuybakery')
const trzynasciebuybakery = document.getElementById('trzynasciebuybakery')
const czternasciebuybakery = document.getElementById('czternasciebuybakery')
const pietnasciebuybakery = document.getElementById('pietnasciebuybakery')
const szesnasciebuybakery = document.getElementById('szesnasciebuybakery')
const siedemnasciebuybakery = document.getElementById('siedemnasciebuybakery')
const osiemnasciebuybakery = document.getElementById('osiemnasciebuybakery')
const dziewietnasciebuybakery = document.getElementById('dziewietnasciebuybakery')
const dwadziesciabuybakery = document.getElementById('dwadziesciabuybakery')
const twentyonebuybakery = document.getElementById('twentyonebuybakery')
const twentytwobuybakery = document.getElementById('twentytwobuybakery')
const twentythreebuybakery = document.getElementById('twentythreebuybakery')
const twentyfourbuybakery = document.getElementById('twentyfourbuybakery')
const twentyfivebuybakery = document.getElementById('twentyfivebuybakery')
const twentysixbuybakery = document.getElementById('twentysixbuybakery')
const twentysevenbuybakery = document.getElementById('twentysevenbuybakery')
const twentyeightbuybakery = document.getElementById('twentyeightbuybakery')
const twentyninebuybakery = document.getElementById('twentyninebuybakery')
const thirtybuybakery = document.getElementById('thirtybuybakery')
const bakeryhr = document.getElementById('bakeryhr')

// Elementy SCHOOL
const schoolButton = document.getElementById('schoolupgrade');
const schooltlo = document.getElementById('schooltlo')
const firstbuyschool = document.getElementById('firstbuyschool')
const secondbuyschool = document.getElementById('secondbuyschool')
const thirdbuyschool = document.getElementById('thirdbuyschool')
const fourbuyschool = document.getElementById('fourbuyschool')
const fivebuyschool = document.getElementById('fivebuyschool')
const sixbuyschool = document.getElementById('sixbuyschool')
const sevenbuyschool = document.getElementById('sevenbuyschool')
const eightbuyschool = document.getElementById('eightbuyschool')
const ninebuyschool = document.getElementById('ninebuyschool')
const tenbuyschool = document.getElementById('tenbuyschool')
const elevenbuyschool = document.getElementById('elevenbuyschool')
const twelwbuyschool = document.getElementById('twelwbuyschool')
const trzynasciebuyschool = document.getElementById('trzynasciebuyschool')
const czternasciebuyschool = document.getElementById('czternasciebuyschool')
const pietnasciebuyschool = document.getElementById('pietnasciebuyschool')
const szesnasciebuyschool = document.getElementById('szesnasciebuyschool')
const siedemnasciebuyschool = document.getElementById('siedemnasciebuyschool')
const osiemnasciebuyschool = document.getElementById('osiemnasciebuyschool')
const dziewietnasciebuyschool = document.getElementById('dziewietnasciebuyschool')
const dwadziesciabuyschool = document.getElementById('dwadziesciabuyschool')
const twentyonebuyschool = document.getElementById('twentyonebuyschool')
const twentytwobuyschool = document.getElementById('twentytwobuyschool')
const twentythreebuyschool = document.getElementById('twentythreebuyschool')
const twentyfourbuyschool = document.getElementById('twentyfourbuyschool')
const twentyfivebuyschool = document.getElementById('twentyfivebuyschool')
const twentysixbuyschool = document.getElementById('twentysixbuyschool')
const twentysevenbuyschool = document.getElementById('twentysevenbuyschool')
const twentyeightbuyschool = document.getElementById('twentyeightbuyschool')
const twentyninebuyschool = document.getElementById('twentyninebuyschool')
const thirtybuyschool = document.getElementById('thirtybuyschool')
const schoolhr = document.getElementById('schoolhr')

// Elementy CINEMA
const cinemaButton = document.getElementById('cinemaupgrade');
const cinematlo = document.getElementById('cinematlo')
const firstbuycinema = document.getElementById('firstbuycinema')
const secondbuycinema = document.getElementById('secondbuycinema')
const thirdbuycinema = document.getElementById('thirdbuycinema')
const fourbuycinema = document.getElementById('fourbuycinema')
const fivebuycinema = document.getElementById('fivebuycinema')
const sixbuycinema = document.getElementById('sixbuycinema')
const sevenbuycinema = document.getElementById('sevenbuycinema')
const eightbuycinema = document.getElementById('eightbuycinema')
const ninebuycinema = document.getElementById('ninebuycinema')
const tenbuycinema = document.getElementById('tenbuycinema')
const elevenbuycinema = document.getElementById('elevenbuycinema')
const twelwbuycinema = document.getElementById('twelwbuycinema')
const trzynasciebuycinema = document.getElementById('trzynasciebuycinema')
const czternasciebuycinema = document.getElementById('czternasciebuycinema')
const pietnasciebuycinema = document.getElementById('pietnasciebuycinema')
const szesnasciebuycinema = document.getElementById('szesnasciebuycinema')
const siedemnasciebuycinema = document.getElementById('siedemnasciebuycinema')
const osiemnasciebuycinema = document.getElementById('osiemnasciebuycinema')
const dziewietnasciebuycinema = document.getElementById('dziewietnasciebuycinema')
const dwadziesciabuycinema = document.getElementById('dwadziesciabuycinema')
const twentyonebuycinema = document.getElementById('twentyonebuycinema')
const twentytwobuycinema = document.getElementById('twentytwobuycinema')
const twentythreebuycinema = document.getElementById('twentythreebuycinema')
const twentyfourbuycinema = document.getElementById('twentyfourbuycinema')
const twentyfivebuycinema = document.getElementById('twentyfivebuycinema')
const twentysixbuycinema = document.getElementById('twentysixbuycinema')
const twentysevenbuycinema = document.getElementById('twentysevenbuycinema')
const twentyeightbuycinema = document.getElementById('twentyeightbuycinema')
const twentyninebuycinema = document.getElementById('twentyninebuycinema')
const thirtybuycinema = document.getElementById('thirtybuycinema')
const cinemahr = document.getElementById('cinemahr')

// Elementy CLUB
const clubButton = document.getElementById('clubupgrade');
const clubtlo = document.getElementById('clubtlo')
const firstbuyclub = document.getElementById('firstbuyclub')
const secondbuyclub = document.getElementById('secondbuyclub')
const thirdbuyclub = document.getElementById('thirdbuyclub')
const fourbuyclub = document.getElementById('fourbuyclub')
const fivebuyclub = document.getElementById('fivebuyclub')
const sixbuyclub = document.getElementById('sixbuyclub')
const sevenbuyclub = document.getElementById('sevenbuyclub')
const eightbuyclub = document.getElementById('eightbuyclub')
const ninebuyclub = document.getElementById('ninebuyclub')
const tenbuyclub = document.getElementById('tenbuyclub')
const elevenbuyclub = document.getElementById('elevenbuyclub')
const twelwbuyclub = document.getElementById('twelwbuyclub')
const trzynasciebuyclub = document.getElementById('trzynasciebuyclub')
const czternasciebuyclub = document.getElementById('czternasciebuyclub')
const pietnasciebuyclub = document.getElementById('pietnasciebuyclub')
const szesnasciebuyclub = document.getElementById('szesnasciebuyclub')
const siedemnasciebuyclub = document.getElementById('siedemnasciebuyclub')
const osiemnasciebuyclub = document.getElementById('osiemnasciebuyclub')
const dziewietnasciebuyclub = document.getElementById('dziewietnasciebuyclub')
const dwadziesciabuyclub = document.getElementById('dwadziesciabuyclub')
const twentyonebuyclub = document.getElementById('twentyonebuyclub')
const twentytwobuyclub = document.getElementById('twentytwobuyclub')
const twentythreebuyclub = document.getElementById('twentythreebuyclub')
const twentyfourbuyclub = document.getElementById('twentyfourbuyclub')
const twentyfivebuyclub = document.getElementById('twentyfivebuyclub')
const twentysixbuyclub = document.getElementById('twentysixbuyclub')
const twentysevenbuyclub = document.getElementById('twentysevenbuyclub')
const twentyeightbuyclub = document.getElementById('twentyeightbuyclub')
const twentyninebuyclub = document.getElementById('twentyninebuyclub')
const thirtybuyclub = document.getElementById('thirtybuyclub')
const clubhr = document.getElementById('clubhr')

// Elementy JAPANESE
const japaneseButton = document.getElementById('japaneseupgrade');
const japanesetlo = document.getElementById('japanesetlo')
const firstbuyjapanese = document.getElementById('firstbuyjapanese')
const secondbuyjapanese = document.getElementById('secondbuyjapanese')
const thirdbuyjapanese = document.getElementById('thirdbuyjapanese')
const fourbuyjapanese = document.getElementById('fourbuyjapanese')
const fivebuyjapanese = document.getElementById('fivebuyjapanese')
const sixbuyjapanese = document.getElementById('sixbuyjapanese')
const sevenbuyjapanese = document.getElementById('sevenbuyjapanese')
const eightbuyjapanese = document.getElementById('eightbuyjapanese')
const ninebuyjapanese = document.getElementById('ninebuyjapanese')
const tenbuyjapanese = document.getElementById('tenbuyjapanese')
const elevenbuyjapanese = document.getElementById('elevenbuyjapanese')
const twelwbuyjapanese = document.getElementById('twelwbuyjapanese')
const trzynasciebuyjapanese = document.getElementById('trzynasciebuyjapanese')
const czternasciebuyjapanese = document.getElementById('czternasciebuyjapanese')
const pietnasciebuyjapanese = document.getElementById('pietnasciebuyjapanese')
const szesnasciebuyjapanese = document.getElementById('szesnasciebuyjapanese')
const siedemnasciebuyjapanese = document.getElementById('siedemnasciebuyjapanese')
const osiemnasciebuyjapanese = document.getElementById('osiemnasciebuyjapanese')
const dziewietnasciebuyjapanese = document.getElementById('dziewietnasciebuyjapanese')
const dwadziesciabuyjapanese = document.getElementById('dwadziesciabuyjapanese')
const twentyonebuyjapanese = document.getElementById('twentyonebuyjapanese')
const twentytwobuyjapanese = document.getElementById('twentytwobuyjapanese')
const twentythreebuyjapanese = document.getElementById('twentythreebuyjapanese')
const twentyfourbuyjapanese = document.getElementById('twentyfourbuyjapanese')
const twentyfivebuyjapanese = document.getElementById('twentyfivebuyjapanese')
const twentysixbuyjapanese = document.getElementById('twentysixbuyjapanese')
const twentysevenbuyjapanese = document.getElementById('twentysevenbuyjapanese')
const twentyeightbuyjapanese = document.getElementById('twentyeightbuyjapanese')
const twentyninebuyjapanese = document.getElementById('twentyninebuyjapanese')
const thirtybuyjapanese = document.getElementById('thirtybuyjapanese')
const japanesehr = document.getElementById('japanesehr')

// Funkcja obsługująca kliknięce w iobrazek oraz jego animacja
obrazek.addEventListener('click', function() {
	this.style.transform = 'scale(0.92)';
			setTimeout(() => {
				this.style.transform = 'scale(1)';
			}, 70);
    punkty = punkty + wiecejPunktowLiczba;
	punktyElement.innerHTML = punkty.toString();
	localStorage.setItem('punkty', punkty);
});

// Funkcja obsługująca zakup bakery
bakeryButton.addEventListener('click', function() {
	if (punkty >= bakeryCena) {
		punkty -= bakeryCena;
		bakeryLiczba++;
		if (bakeryLiczba >= 1) {
			tlobakery.style.visibility = 'visible';
			firstbuybakery.style.visibility = 'visible';
			bakeryhr.style.visibility = 'visible';
			schoolButton.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 2) {
			secondbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 3) {
			thirdbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 4) {
			fourbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 5) {
			fivebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 6) {
			sixbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 7) {
			sevenbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 8) {
			eightbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 9) {
			ninebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 10) {
			tenbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 11) {
			elevenbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 12) {
			twelwbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 13) {
			trzynasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 14) {
			czternasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 15) {
			pietnasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 16) {
			szesnasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 17) {
			siedemnasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 18) {
			osiemnasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 19) {
			dziewietnasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 20) {
			dwadziesciabuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 21) {
			twentyonebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 22) {
			twentytwobuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 23) {
			twentythreebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 24) {
			twentyfourbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 25) {
			twentyfivebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 26) {
			twentysixbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 27) {
			twentysevenbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 28) {
			twentyeightbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 29) {
			twentyninebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 30) {
			secondbuybakery.style.visibility = 'visible';
		}

		bakeryCena = Math.floor(bakeryCena * 1.5);
		bakeryButton.innerHTML = `Cook Hello Kitty (cena: ${bakeryCena})`;
}
	
});


// Funkcja obsługująca zakup SCHOOL
schoolButton.addEventListener('click', function() {
if (punkty >= schoolCena) {
	punkty -= schoolCena;
	schoolLiczba++;
	if (schoolLiczba >= 1) {
		schooltlo.style.visibility = 'visible';
		firstbuyschool.style.visibility = 'visible';
		schoolhr.style.visibility = 'visible';
		cinemaButton.style.visibility = 'visible';
	}
	if (schoolLiczba >= 2) {
		secondbuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 3) {
		thirdbuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 4) {
		fourbuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 5) {
		fivebuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 6) {
		sixbuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 7) {
		sevenbuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 8) {
		eightbuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 9) {
		ninebuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 10) {
		tenbuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 11) {
		elevenbuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 12) {
		twelwbuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 13) {
		trzynasciebuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 14) {
		czternasciebuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 15) {
		pietnasciebuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 16) {
		szesnasciebuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 17) {
		siedemnasciebuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 18) {
		osiemnasciebuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 19) {
		dziewietnasciebuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 20) {
		dwadziesciabuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 21) {
		twentyonebuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 22) {
		twentytwobuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 23) {
		twentythreebuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 24) {
		twentyfourbuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 25) {
		twentyfivebuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 26) {
		twentysixbuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 27) {
		twentysevenbuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 28) {
		twentyeightbuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 29) {
		twentyninebuyschool.style.visibility = 'visible';
	}
	if (schoolLiczba >= 30) {
		secondbuyschool.style.visibility = 'visible';
	}

	schoolCena = Math.floor(schoolCena * 1.5);
	schoolButton.innerHTML = `School Hello Kitty (cena: ${schoolCena})`;
}

});

// Funkcja obsługująca zakup CINEMA
cinemaButton.addEventListener('click', function() {
	if (punkty >= cinemaCena) {
		punkty -= cinemaCena;
		cinemaLiczba++;
		if (cinemaLiczba >= 1) {
			cinematlo.style.visibility = 'visible';
			firstbuycinema.style.visibility = 'visible';
			cinemahr.style.visibility = 'visible';
			clubButton.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 2) {
			secondbuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 3) {
			thirdbuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 4) {
			fourbuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 5) {
			fivebuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 6) {
			sixbuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 7) {
			sevenbuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 8) {
			eightbuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 9) {
			ninebuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 10) {
			tenbuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 11) {
			elevenbuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 12) {
			twelwbuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 13) {
			trzynasciebuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 14) {
			czternasciebuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 15) {
			pietnasciebuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 16) {
			szesnasciebuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 17) {
			siedemnasciebuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 18) {
			osiemnasciebuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 19) {
			dziewietnasciebuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 20) {
			dwadziesciabuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 21) {
			twentyonebuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 22) {
			twentytwobuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 23) {
			twentythreebuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 24) {
			twentyfourbuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 25) {
			twentyfivebuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 26) {
			twentysixbuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 27) {
			twentysevenbuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 28) {
			twentyeightbuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 29) {
			twentyninebuycinema.style.visibility = 'visible';
		}
		if (cinemaLiczba >= 30) {
			secondbuycinema.style.visibility = 'visible';
		}
	
		cinemaCena = Math.floor(cinemaCena * 1.5);
		cinemaButton.innerHTML = `Cinema Hello Kitty (cena: ${cinemaCena})`;
	}
	
	});



// Funkcja obsługująca zakup CLUB
clubButton.addEventListener('click', function() {
	if (punkty >= clubCena) {
		punkty -= clubCena;
		clubLiczba++;
		if (clubLiczba >= 1) {
			clubtlo.style.visibility = 'visible';
			firstbuyclub.style.visibility = 'visible';
			clubhr.style.visibility = 'visible';
			japaneseButton.style.visibility = 'visible';
		}
		if (clubLiczba >= 2) {
			secondbuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 3) {
			thirdbuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 4) {
			fourbuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 5) {
			fivebuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 6) {
			sixbuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 7) {
			sevenbuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 8) {
			eightbuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 9) {
			ninebuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 10) {
			tenbuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 11) {
			elevenbuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 12) {
			twelwbuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 13) {
			trzynasciebuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 14) {
			czternasciebuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 15) {
			pietnasciebuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 16) {
			szesnasciebuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 17) {
			siedemnasciebuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 18) {
			osiemnasciebuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 19) {
			dziewietnasciebuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 20) {
			dwadziesciabuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 21) {
			twentyonebuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 22) {
			twentytwobuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 23) {
			twentythreebuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 24) {
			twentyfourbuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 25) {
			twentyfivebuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 26) {
			twentysixbuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 27) {
			twentysevenbuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 28) {
			twentyeightbuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 29) {
			twentyninebuyclub.style.visibility = 'visible';
		}
		if (clubLiczba >= 30) {
			secondbuyclub.style.visibility = 'visible';
		}
	
		clubCena = Math.floor(clubCena * 1.5);
		clubButton.innerHTML = `Club Hello Kitty (cena: ${clubCena})`;
	}
	
	});





// Funkcja obsługująca zakup JAPANESE
japaneseButton.addEventListener('click', function() {
	if (punkty >= japaneseCena) {
		punkty -= japaneseCena;
		japaneseLiczba++;
		if (japaneseLiczba >= 1) {
			japanesetlo.style.visibility = 'visible';
			firstbuyjapanese.style.visibility = 'visible';
			japanesehr.style.visibility = 'visible';
			japaneseButton.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 2) {
			secondbuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 3) {
			thirdbuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 4) {
			fourbuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 5) {
			fivebuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 6) {
			sixbuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 7) {
			sevenbuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 8) {
			eightbuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 9) {
			ninebuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 10) {
			tenbuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 11) {
			elevenbuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 12) {
			twelwbuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 13) {
			trzynasciebuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 14) {
			czternasciebuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 15) {
			pietnasciebuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 16) {
			szesnasciebuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 17) {
			siedemnasciebuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 18) {
			osiemnasciebuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 19) {
			dziewietnasciebuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 20) {
			dwadziesciabuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 21) {
			twentyonebuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 22) {
			twentytwobuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 23) {
			twentythreebuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 24) {
			twentyfourbuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 25) {
			twentyfivebuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 26) {
			twentysixbuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 27) {
			twentysevenbuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 28) {
			twentyeightbuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 29) {
			twentyninebuyjapanese.style.visibility = 'visible';
		}
		if (japaneseLiczba >= 30) {
			secondbuyjapanese.style.visibility = 'visible';
		}
	
		japaneseCena = Math.floor(japaneseCena * 1.5);
		japaneseButton.innerHTML = `Japanese Hello Kitty (cena: ${japaneseCena})`;
	}
	
	});

// Funkcja obsługująca zakup ulepszenia zwiększającego liczbę punktów za kliknięcie
wiecejPunktowButton.addEventListener('click', function() {
	if (punkty >= wiecejPunktowCena) {
	  punkty -= wiecejPunktowCena;
	  punktyElement.innerHTML = punkty.toString();
	  wiecejPunktowLiczba++;
	  wiecejPunktowCena = wiecejPunktowCena * 2;
	  wiecejPunktowButton.innerHTML = `+1 per click (cena: ${wiecejPunktowCena})`;
	}
  });

  
// Funkcja obsługująca bakery
setInterval(function() {
punkty += bakeryLiczba;
punktyElement.innerHTML = punkty.toString();
}, 1000);

// Funkcja obsługująca school
setInterval(function() {
	punkty += schoolLiczba;
	punktyElement.innerHTML = punkty.toString();
	}, 500);

// Funkcja obsługująca CINEMA
setInterval(function() {
	punkty += cinemaLiczba;
	punktyElement.innerHTML = punkty.toString();
	}, 100);

// Funkcja obsługująca CLUB
setInterval(function() {
	punkty += clubLiczba;
	punktyElement.innerHTML = punkty.toString();
	}, 100);

// Funkcja obsługująca JAPANESE
setInterval(function() {
	punkty += japaneseLiczba;
	punktyElement.innerHTML = punkty.toString();
	}, 1);

