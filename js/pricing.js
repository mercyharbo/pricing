/*let priceSwitch = document.querySelector(".slider");
let buttonBg = document.querySelector(".bg-color");


priceSwitch.addEventListener("click", pricingToggle);

function pricingToggle() {
    let newPrice1 = document.querySelector(".price-heading1").innerHTML = "&dollar; 199.99";
    let newPrice2 = document.querySelector(".price-heading2").innerHTML = "&dollar; 249.99";
    let newPrice3 = document.querySelector(".price-heading3").innerHTML = "&dollar; 399.99";
}
*/

let monthly = [19.99, 24.99, 39.99];
let yearly = [199.99, 249.99, 399.99];
let prices = document.querySelector(".dollar");
let switchBtn = document.querySelector(".slider");
let tempPrice;

switchBtn.addEventListener("click", priceChange);

function priceChange() {
  for (i = 0; i < prices.length; i++) {
    if (switchBtn === checked) {
      tempPrice = yearly[i];
    } else { 
      tempPrice = monthly[i];
    }
    prices[i].innerHTML = tempPrice;
  }
}
