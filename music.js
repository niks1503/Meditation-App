document.addEventListener("DOMContentLoaded", () => {
  let Songs = {
    "calm music": {
      src1: "images/calm-documentary-piano.jpg",
      src2: "Music/calm-documentary-piano-music-267242.mp3",
    },
    "piano music": {
      src1: "images/piano-music.jpg",
      src2: "Music/piano-music-267041.mp3",
    },
    "guitar music": {
      src1: "images/inspirational-cinema.jpg",
      src2: "Music/inspirational-cinematic-calm-piano-254541.mp3",
    },
    "forest music": {
      src1: "images/midnight-forest.jpg",
      src2: "Music/midnight-forest-184304.mp3",
    },
    "rain music": {
      src1: "images/sleepy-rain.jpg",
      src2: "Music/sleepy-rain-116521.mp3",
    },
  };

  let music_dropdown = document.querySelector("#music_dropdown");
  let init_music_page = document.querySelector("#initial_music_page");
  let filtered_music_card_container = document.getElementById(
    "filtered_music_card_container"
  );

  music_dropdown.addEventListener("change", () => {
    let selectedMusic = music_dropdown.value.trim().toLowerCase();

    // Show "All Music" page if selected
    if (selectedMusic === "all_music") {
      init_music_page.style.display = "flex"; // Show all music cards
      filtered_music_card_container.innerHTML = ""; // Clear filtered cards
    } else {
      init_music_page.style.display = "none"; // Hide all music cards
      filtered_music_card_container.innerHTML = ""; // Clear the container

      Object.keys(Songs)
        .filter((key) => key.toLowerCase().includes(selectedMusic))
        .forEach((key) => {
          createMusicCard(Songs[key], key);
        });
    }
  });

  function createMusicCard(song, title) {
    // Create music card
    let music_card = document.createElement("div");
    music_card.classList.add("music_card");
    music_card.innerHTML = `
      <div class="relative m-5 h-80">
        <div class="h-full">
          <img
            src="${song.src1}"
            alt="${title}"
            width="300"
            height="400"
            class="rounded-md h-full"
          />
        </div>
        <div class="absolute bottom-0">
          <audio controls>
            <source src="${song.src2}" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    `;
    filtered_music_card_container.appendChild(music_card);
  }
});
