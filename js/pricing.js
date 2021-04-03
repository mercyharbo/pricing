const monthly = [19.99, 24.99, 39.99];

function forMonthly() {
  const prices = document.querySelectorAll(".amount");
  prices.forEach(function(price, index) {
    price.innerHTML = monthly[index];
  });
}

forMonthly(); //called it global here first so that monthly is displayed on load due to position of the switch

let priceSwitch = document.querySelector(".slider");
priceSwitch.addEventListener("click", pricingToggle);

const annually = [199.99, 249.99, 399.99];

function forAnnually() {
  const prices = document.querySelectorAll(".amount");
  prices.forEach(function(price, index) {
    price.innerHTML = annually[index];
  });
}

let toggle = 0;

function pricingToggle() {
  toggle += 1; // so this literally add 0 to 1?
  //console.log(toggle);
  if (toggle === 0) {
    forMonthly();
  }

  if (toggle === 1) {
    toggle = 0
    toggle -= 1;
    forAnnually();
  }
}
