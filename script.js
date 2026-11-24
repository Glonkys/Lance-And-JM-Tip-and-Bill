const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const people = document.getElementById("people");
const result = document.getElementById("result");
const button = document.getElementById("calculateBtn");

function calculateBill() {

  const billAmount = Number(bill.value);
  const tipPercent = Number(tip.value);
  const numPeople = Number(people.value);

  if (
    Number.isNaN(billAmount)||
    Number.isNaN(tipPercent)||
    Number.isNaN(numPeople)|| 
    bill.value === "" ||
    tip.value === "" ||
    people.value === "" ||
    numPeople <= 0
  ){
    result.textContent = "Invalid Input";
    return;
  }

  const tipAmount = billAmount * (tipPercent / 100);
  const totalBill = billAmount + tipAmount;
  const perPerson = totalBill / numPeople;

  result.textContent = "₱" + perPerson.toFixed(2);
}


button.addEventListener("click", calculateBill);

bill.addEventListener("change", calculateBill);
tip.addEventListener("change", calculateBill);
people.addEventListener("change", calculateBill);


