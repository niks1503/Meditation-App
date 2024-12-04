document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.querySelector("#greeting_title");
  if (greeting) {
    const hours = new Date().getHours();
    const greetingMessages = {
      morning: "Good Morning!",
      afternoon: "Good Afternoon!",
      evening: "Good Evening!",
    };

    greeting.textContent =
      hours < 12
        ? greetingMessages.morning
        : hours < 18
        ? greetingMessages.afternoon
        : greetingMessages.evening;
  }

  const buttons = document.querySelectorAll("#button1, #button2");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.id.slice(-1); // Get the number at the end of the button ID
      const divBelow = document.querySelector(`#div_below${targetId}`);
      if (divBelow) {
        // Toggle the display property
        divBelow.style.display =
          divBelow.style.display === "inline-block" ? "none" : "inline-block";
      }
    });
  });
});
