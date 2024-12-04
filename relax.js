// Selectors
const timerModal = document.getElementById("timer-modal");
const closeTimerButton = document.getElementById("close-timer");
const timerCount = document.getElementById("timer-count");
const beginButtons = document.querySelectorAll("button.bg-pink-300");

let countdown;

// Function to show the timer modal
function showTimer(seconds = 10) {
  timerModal.classList.remove("hidden");
  timerModal.classList.add("flex");
  timerModal.classList.remove("hidden");
  startTimer(seconds);
}

// Function to hide the timer modal
function closeTimer() {
  timerModal.classList.add("hidden");
  timerModal.classList.remove("flex");
  clearInterval(countdown); // Stop the countdown
}

// Function to start the timer
function startTimer(seconds) {
  let timeLeft = seconds;
  timerCount.textContent = timeLeft;

  countdown = setInterval(() => {
    timeLeft--;
    timerCount.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      closeTimer(); // Auto-close modal when timer ends
    }
  }, 1000);
}

// Event Listeners
beginButtons.forEach((button) => {
  button.addEventListener("click", () => showTimer(10)); // Start with 10 seconds
});

closeTimerButton.addEventListener("click", closeTimer);
