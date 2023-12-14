// JavaScript-code om de tafel van 10 weer te geven in de HTML-pagina
let resultatenDiv = document.getElementById('resultaten');

for (let i = 1; i <= 10; i++) {
    let resultaat = i * 10;
    let tekst = `${i} x 10 = ${resultaat}`;
    
    // Maak een nieuw element om de tekst weer te geven
    let paragraaf = document.createElement('p');
    paragraaf.textContent = tekst;

    // Voeg het element toe aan de div op de pagina
    resultatenDiv.appendChild(paragraaf);
}
