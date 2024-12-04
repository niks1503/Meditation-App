// Function to display GIF in fullscreen with a timer
function showGifFullscreen(gifSrc, title) {
  // Create a fullscreen container dynamically
  const fullscreenContainer = document.createElement("div");
  fullscreenContainer.classList.add("fullscreen-container");
  fullscreenContainer.style.position = "fixed";
  fullscreenContainer.style.top = 0;
  fullscreenContainer.style.left = 0;
  fullscreenContainer.style.width = "100%";
  fullscreenContainer.style.height = "100%";
  fullscreenContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  fullscreenContainer.style.display = "flex";
  fullscreenContainer.style.flexDirection = "column";
  fullscreenContainer.style.justifyContent = "center";
  fullscreenContainer.style.alignItems = "center";
  fullscreenContainer.style.zIndex = 1000;

  // Add GIF
  const gifElement = document.createElement("img");
  gifElement.src = gifSrc;
  gifElement.alt = title;
  gifElement.style.maxWidth = "80%";
  gifElement.style.maxHeight = "80%";
  gifElement.style.borderRadius = "10px";
  gifElement.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.8)";

  // Add title
  const titleElement = document.createElement("p");
  titleElement.textContent = title;
  titleElement.style.color = "white";
  titleElement.style.fontSize = "2rem";
  titleElement.style.marginTop = "20px";

  // Add a close button
  const closeButton = document.createElement("button");
  closeButton.textContent = "×";
  closeButton.style.position = "absolute";
  closeButton.style.top = "20px";
  closeButton.style.right = "20px";
  closeButton.style.backgroundColor = "transparent";
  closeButton.style.color = "white";
  closeButton.style.border = "none";
  closeButton.style.fontSize = "2rem";
  closeButton.style.cursor = "pointer";

  // Timer
  const timerDisplay = document.createElement("p");
  timerDisplay.textContent = "00:30";
  timerDisplay.style.color = "white";
  timerDisplay.style.fontSize = "1.5rem";
  timerDisplay.style.marginTop = "10px";

  // Append elements to fullscreen container
  fullscreenContainer.appendChild(closeButton);
  fullscreenContainer.appendChild(gifElement);
  fullscreenContainer.appendChild(titleElement);
  fullscreenContainer.appendChild(timerDisplay);

  // Add container to body
  document.body.appendChild(fullscreenContainer);

  // Timer logic
  let timeRemaining = 30; // 30 seconds
  const timer = setInterval(() => {
    timeRemaining--;
    const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
    const seconds = String(timeRemaining % 60).padStart(2, "0");
    timerDisplay.textContent = `${minutes}:${seconds}`;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      document.body.removeChild(fullscreenContainer); // Close fullscreen on timer end
    }
  }, 1000);

  // Close button logic
  closeButton.addEventListener("click", () => {
    clearInterval(timer);
    document.body.removeChild(fullscreenContainer);
  });
}

// Add click event listener to all image boxes
document.querySelectorAll(".h-96 img").forEach((image) => {
  image.addEventListener("click", () => {
    const gifSrc = image.getAttribute("data-gif");
    const title = image.getAttribute("data-title");
    showGifFullscreen(gifSrc, title);
  });
});
