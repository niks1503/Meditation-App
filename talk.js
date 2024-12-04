// Positive Quotes Array
const quotes = [
  "You are capable of amazing things.",
  "Believe in yourself and all that you are.",
  "Every day is a second chance.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Be the change that you wish to see in the world.",
  "Happiness is not by chance, but by choice.",
  "The best way to predict the future is to create it.",
  "You are stronger than you think.",
  "Keep going; everything you need will come to you at the perfect time.",
  "Believe you can, and you're halfway there.",
];

// Play a random positive quote
function speakQuote() {
  if ("speechSynthesis" in window) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const utterance = new SpeechSynthesisUtterance(randomQuote);

    // Optional: Customize voice, pitch, and rate
    utterance.pitch = 1; // Range: 0-2
    utterance.rate = 1; // Range: 0.1-10
    utterance.volume = 1; // Range: 0-1

    // Speak the quote
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Sorry, your browser does not support speech synthesis.");
  }
}

// Add event listener to the speaker button
document.getElementById("play-quote").addEventListener("click", speakQuote);
