var getalElement = document.getElementById("getal");
var knop = document.getElementById("knop");

var huidigGetal = 0;

knop.addEventListener("click", function () {
    huidigGetal++; 

    if (huidigGetal === 11) {
        huidigGetal = 0;
    }

    getalElement.textContent = huidigGetal;
});
