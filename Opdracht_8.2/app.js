// De waarden ophalen
function GetValues() {
    Value1 = document.getElementById("Value 1").value;
    Value2 = document.getElementById("Value 2").value;

    if (Value1 <= 0 || Value2 <=0.) {
        SetResult("Een ingevoerd getal is te laag!");
        return false;
}
else {
    return true;
}
}

function Multiply() {
   if (GetValues()) {
    Result = Value1 * Value2;
    SetResult (Result);
   }
}
function Subtract() {
   if (GetValues()) {
     Result = Value1 - Value2;
     SetResult (Result);
   }
}
function Sum() {
   if (GetValues()) {
     Result = Value1 + Value2;
     SetResult (Result);
   }
}
function Devide() {
  if  (GetValues()) {
     Result = Value1 / Value2;

     // Afronden op 1 decimaal
     let rounded = Result.toFixed(1);
     SetResult(rounded);
  }
}

// Resultaat in de id ResultH1 plaatsen
function SetResult(result) {
    ResultH1.innerHTML = "Result: " + result;
}