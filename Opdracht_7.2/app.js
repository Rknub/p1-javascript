function BepaalSaldo()

{

    let product = 100;
    //let budget = 10;
    let budget = prompt("hoeveel geld heb je?",0);

let ResultP = document.getElementById("ResultParagraph");
if (product >= budget) {
    ResultP.innerHTML = "Helaas, te weinig geld!";
    ResultP.style.color = "red";
}
else {
    ResultP. innerHTML = "U heeft genoeg geld!";
    ResultP.style.color = "green";
}

}