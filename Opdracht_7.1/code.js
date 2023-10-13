// Haal de budget- en productinformatie op uit de HTML
const budget = parseInt(document.getElementById("budgetInfo").textContent);
const product = parseInt(document.getElementById("productInfo").textContent);

// Controleer of er genoeg budget is om het product te kopen
if (budget >= product) {
    // Als er genoeg budget is, toon de boodschap in het groen
    document.getElementById("result").textContent = "U heeft genoeg geld!";
    document.getElementById("result").classList.add("green");
} else {
    // Als er niet genoeg budget is, toon de boodschap in het rood
    document.getElementById("result").textContent = "Helaas, te weinig geld.";
    document.getElementById("result").classList.add("red");
}
