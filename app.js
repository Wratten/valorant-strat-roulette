// have an array containing random strategies
let stratArray = ["Strat 1", "Strat 2", "Strat 3"];

// have the randomize button
const randomizeBtn = document.getElementById("randomizeBtn");

// have a function to use on the button press
function populateText() {
  //randomizing strat
  let strat = stratArray[Math.floor(Math.random() * stratArray.length)];
  //getting and updating the text field in html with the randomized strat
  document.getElementById("stratDisplayText").textContent = strat;
}

// call function on button press
randomizeBtn.addEventListener("click", populateText);
