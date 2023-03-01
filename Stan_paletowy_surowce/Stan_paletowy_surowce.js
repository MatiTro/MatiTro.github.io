let free = document.getElementById("free");
let rawmaterial = document.getElementById("rawmaterial");
let andersa = document.getElementById("andersa");
let finishedProduct = document.getElementById("finished_product");
let count = document.getElementById("btn1");

function countresult() {
  let freeValue = parseInt(free.value);
  let rawmaterialValue = parseInt(rawmaterial.value);
  let andersaValue = parseInt(andersa.value);
  let finishedProductValue = parseInt(finishedProduct.value);

  let countresult =
    2040 - freeValue - finishedProductValue + rawmaterialValue + andersaValue;
  let historyElement = document.getElementById("history");
  let timestamp = new Date().toLocaleDateString();
  let calculation = `${timestamp}: ${freeValue} + ${rawmaterialValue} - ${finishedProductValue} + ${andersaValue} = ${countresult}`;
  let calculationElement = document.createElement("p");
  calculationElement.textContent = calculation;
  historyElement.appendChild(calculationElement);

  document.getElementById("result").innerHTML = countresult;

  return countresult;
}

function sendEmail() {
  // Pobierz wartości z inputów i dodaj je do treści wiadomości
  var freeValue = document.getElementById("free").value;
  var rawmaterialValue = document.getElementById("rawmaterial").value;
  var andersaValue = document.getElementById("andersa").value;
  var finishedProductValue = document.getElementById("finished_product").value;

  // Oblicz wynik
  var result = countresult();

  // Tworzenie treści wiadomości z wynikiem obliczeń
  var messageBody =
    "Wolne miejsca: " +
    freeValue +
    "\nPalety na bufor / II hala / rampa: " +
    rawmaterialValue +
    "\nPalety na Andersa: " +
    andersaValue +
    "\nPalety wyrobu gotowego: " +
    finishedProductValue +
    "\nSuma palet na Magazynie: " +
    result;

  // Utwórz link do wysłania maila
  var mailToLink =
    "mailto:adres@odbiorcy.pl?subject=Stan Paletowy&body=" +
    encodeURIComponent(messageBody);

  // Utwórz element <a> i ustaw odpowiednie atrybuty href i target
  var link = document.createElement("a");
  link.href = mailToLink;
  link.target = "_self";

  // Dodaj element <a> do dokumentu i kliknij go
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
