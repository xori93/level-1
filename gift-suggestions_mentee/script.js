const giftIdeas = {
  Mom: ["Gold Earrings", "Laptop", "MacBook"],
  Friend: ["Mini Drone", "Apple Watch", "E-Reader"],
  Child: ["Smart Speaker", "Gift Card", "AirPods"]
}

const dropdown = document.getElementById("person-select");
const suggestBtn = document.getElementById("suggest-btn");
const result = document.getElementById("gift-result");

suggestBtn.addEventListener("click", function () {
  const selected = dropdown.value;
  result.innerHTML = ""

  if (giftIdeas[selected]) {
    giftIdeas[selected].forEach( function (gift) {
      const p = document.createElement("p");
      p.textContent = gift;
      result.appendChild(p)
    });
  } else {
    // const p = document.createElement("p");
    result.textContent = "No gift ideas available"
    // result.appendChild(p)
  }
})