// Lijst met producten in het winkelmandje
var winkelmandje = ["playstation", "Xbox", "PC"];

// Functie om producten weer te geven wanneer de knop wordt geklikt
function toonProducten() {
  var winkelmandjeDiv = document.getElementById('winkelmandje');
  winkelmandjeDiv.innerHTML = ''; // Leegmaken van de inhoud voordat nieuwe producten worden toegevoegd
  
  var aantalProducten = winkelmandje.length;
  
  var productenHTML = "<p>Er zitten " + aantalProducten + " producten in uw winkelmand:</p><ul>";
  for (var i = 0; i < aantalProducten; i++) {
    productenHTML += "<li>" + winkelmandje[i] + "</li>";
  }
  productenHTML += "</ul>";
  
  winkelmandjeDiv.innerHTML = productenHTML;
}