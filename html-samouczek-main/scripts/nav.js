const svg = `<svg width="40" height="40">
			  <polyline points="12,8 27,20 12,32" style="fill:none;stroke-width:2;stroke:black;" />
			</svg>`;

let text = `
		<ul>
          <li><a href="../index.html">Strona główna</a></li>
          <li><a class="lst">Podstawy
		    ${svg}</a>
            <ul>
              <li><a href="./wprowadzenie.html">Wprowadzenie</a></li>
              <li><a href="./struktura_strony.html">Struktura strony</a></li>
              <li><a href="./znaczniki_formatowania.html">Znaczniki formatowania</a></li>
              <li><a href="./odnosniki_obrazy.html">Odnośniki i obrazy</a></li>
              <li><a href="./listy.html">Listy</a></li>
              <li><a href="./tabele.html">Tabele</a></li>
              <li><a href="./meta_div_span.html"><code>&lt;meta&gt;</code>, <code>&lt;div&gt;</code> i <code>&lt;span&gt;</code></a></li>
            </ul>
          </li>
          <li><a class="lst">Style
			${svg}</a>
            <ul>
              <li><a href="./wprowadzenie_css.html">Wprowadzenie do CSS</a></li>
			  <li><a href="./formatowanie_tekstu.html">Formatowanie tekstu</a></li>
              <li><a href="./wlasciwosci_blokowe.html">Właściwości blokowe</a></li>
              <li><a href="./jednostki.html">Jednostki</a></li>
              <li><a href="./formatowanie_list_tabel.html">Formatowanie list i tabel</a></li>
              <li><a href="./selektory.html">Selektory</a></li>
			  <li><a href="./kaskadowosc.html">Kaskadowość (cd.)</a></li>
            </ul>
          </li>
		  <li><a class="lst">Złożone strony
		    ${svg}</a>
            <ul>
              <li><a href="./menu_poziome_pionowe.html">Menu poziome i pionowe</a></li>
              <li><a href="./pozycjonowanie.html">Pozycjonowanie</a></li>
              <li><a href="./uklad_strony.html">Układ strony</a></li>
              <li><a href="./formularze.html">Formularze</a></li>
              <li><a href="./formularze_input.html">Formularze: <code>&lt;input&gt;</code></a></li>
              <li><a href="./menu_rozwijane.html">Menu rozwijane</a></li>
              <li><a href="./responsywnosc.html">Responsywność</a></li>
            </ul>
          </li>
		  <li><a class="lst">Zaawansowane
		    ${svg}</a>
			<ul>
			  <li><a href="./animacje.html">Animacje</a></li>
			  <li><a href="./gradienty.html">Gradienty</a></li>
			  <li><a href="./audio_wideo.html">Audio i wideo</a></li>
			  <li><a href="./mapy_odsyłaczy.html">Mapy odsyłaczy</a></li>
			  <li><a href="./rysunki_svg.html">Rysunki SVG</a></li>
			</ul>
		  </li>
		  <li><a href="./materialy.html">Materiały</a></li>
		  <li><a href="#" id="omnie">O mnie</a></li>
        </ul>
`
if (typeof window.is_this_file_the_main_page !== "undefined") {
	text = text.replace("../index.html","#");
	text = text.replaceAll(`"./`,`"./src/`);
}
document.getElementsByTagName("nav")[0].innerHTML = text;

let lst = document.getElementsByClassName("lst");
for(let i=0; i < lst.length; i++) {
	lst[i].addEventListener('click', function (e) {
		e.preventDefault();
		/*if(window.innerWidth < 700)*/
			lst[i].parentElement.querySelector("ul").classList.toggle("open");
	});
}
