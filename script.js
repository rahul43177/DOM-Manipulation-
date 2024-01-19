// Get references to the buttons and the count element
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const resetButton = document.getElementById('reset');
const countElement = document.getElementById('count');

// Initialize the count value
let count = 0;

// Function to update the count element with the current count value
function updateCount() {
  countElement.textContent = count;
}

// Event listeners for the buttons
decreaseButton.addEventListener('click', () => {
  count--;
  updateCount();
});

increaseButton.addEventListener('click', () => {
  count++;
  updateCount();
});

resetButton.addEventListener('click', () => {
  count = 0;
  updateCount();
});

// Initial count update
updateCount();
