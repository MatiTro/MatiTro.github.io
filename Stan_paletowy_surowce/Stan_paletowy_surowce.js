let free = document.getElementById("free");
let rawmaterial = document.getElementById("rawmaterial");
let andersa = document.getElementById("andersa");
let finishedProduct = document.getElementById("finished_product");
let count = document.getElementById("btn1");
let yesterdayElement = document.querySelector(".yesterday");
yesterdayElement.classList.add("delivery_yesterday");

function countresult() {
  let freeValue = parseInt(free.value);
  let rawmaterialValue = parseInt(rawmaterial.value);
  let andersaValue = parseInt(andersa.value);
  let finishedProductValue = parseInt(finishedProduct.value);

  if (
    isNaN(freeValue) ||
    isNaN(rawmaterialValue) ||
    isNaN(andersaValue) ||
    isNaN(finishedProductValue)
  ) {
    $(".alert").addClass("show");
    $(".alert").removeClass("hide");
    $(".alert").addClass("showAlert");

    $(".close-btn").click(function () {
      $(".alert").removeClass("show");
      $(".alert").addClass("hide");
    });

    setTimeout(function () {
      $(".alert").removeClass("show");
      $(".alert").addClass("hide");
    }, 5000000);

    return;
  }

  let countresult =
    2040 - freeValue - finishedProductValue + rawmaterialValue + andersaValue;

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

// Znajdź przycisk "Oblicz" na stronie i dodaj obsługę zdarzenia kliknięcia
let calculateButton = document.getElementById("btn2");
calculateButton.addEventListener("click", resultspentpallets);

function resultspentpallets() {
  // Pobierz wartości z pól wejściowych
  let yesterdayValue = parseInt(document.getElementById("yesterday").value);
  let deliveryYesterdayValue = parseInt(
    document.getElementById("delivery_yesterday").value
  );

  // Oblicz wynik
  let result_spentPallets =
    yesterdayValue + deliveryYesterdayValue - countresult();

  // Ustaw wynik w elemencie "result_spent"
  let resultElement = document.getElementById("result_spent");
  resultElement.innerHTML = result_spentPallets;
}

const inputElements = document.querySelectorAll("input[type=number]");

for (let i = 0; i < inputElements.length; i++) {
  inputElements[i].addEventListener("keydown", function (event) {
    if (event.key === "-") {
      event.preventDefault();
    }
  });
}
