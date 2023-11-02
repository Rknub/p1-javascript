// De waarden ophalen
function GetValues() {
    //Value1 = document.getElementById("Value 1").value;
    //Value2 = document.getElementById("Value 2").value;

    // parseInt gebruiken om string/tekst om te zetten naar int/getal.
    Value1 = parseInt (document. getElementById("Value 1"). value);
    Value2 = parseInt(document .getElementById("Value 2").value);
}

function Multiply() {
    GetValues();
    Result = Value1 * Value2;
    SetResult (Result);
}
function Subtract() {
    GetValues();
    Result = Value1 - Value2;
    SetResult (Result);
}
function Sum() {
    GetValues();
    Result = (Value1 + Value2);
    SetResult (Result);
}
function Devide() {
    GetValues();
    Result = Value1 / Value2;
    SetResult (Result);
}

// Resultaat in de id ResultH1 plaatsen
function SetResult(result) {
    ResultH1.innerHTML = "Result: " + result;
}