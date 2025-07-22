// Create an array to store your dessert options
// Each item is an object that describes the dessert
let dessertOption = [
  { name: "Chocolate cake", price: 8.00, inStock: true },
  { name: "Ice-cream", price: 2.50, inStock: true },
  { name: "Cheescake", price: 6.00, inStock: false },
  {name: "Brownie", price: 4.00, inStock: false}
]

// Use getElementById to connect JS to the HTML elements with id="menu-buttons" and id="order-summary"
const buttonMenu = document.getElementById("menu-button");
const orderSummary = document.getElementById("order-summary");

// Loop through each dessert in the array using forEach
// This will let us do something (create a button) for every dessert
dessertOption.forEach((dessert) => {
  // Inside the loop, create a button using document.createElement("button")
  const button = document.createElement("button")

  // Set the button’s text to show the dessert name
  button.textContent = dessert.name;

  // Add a click event to the button using addEventListener
  // his means when the button is clicked, a function will run
  button.addEventListener("click", () => {
    
// STEP 7: Inside the function, check if the dessert is in stock using if/else
// If inStock is true, show “You selected: [Dessert] ($[Price])”
// If inStock is false, show “Sorry, [Dessert] is sold out.”
    if (dessert.inStock) {
      orderSummary.textContent = `You selected: ${dessert.name} ($${dessert.price.toFixed(2)})` 
    } else {
      orderSummary.textContent =  `Sorry, ${dessert.name} is sold out`
    }
  });

  // Add the button to the div with appendChild
  buttonMenu.appendChild(button);
})