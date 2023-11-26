// have an array containing random strategies
let stratArray = ["Strat 1", "Strat 2", "Strat 3"];
let strat = stratArray[Math.floor(Math.random() * stratArray.length)];

// have the randomize button
const randomizeBtn = document.getElementById("randomizeBtn");

// have a function to use on the button press
function populateText() {
  document.getElementById("stratDisplayText").textContent = strat;
}

randomizeBtn.addEventListener("click", populateText);
// read button press / event listener?

// choose one strat at random out of array and populate an empty container with string on button press
