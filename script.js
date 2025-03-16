document.addEventListener("DOMContentLoaded", function() {
  const rainContainer = document.querySelector(".rain");

  for (let i = 0; i < 50; i++) {
      let rainDrop = document.createElement("span");
      rainDrop.innerText = "0 1".charAt(Math.floor(Math.random() * 2));
      rainDrop.className = "rain-drop";
      rainDrop.style.left = Math.random() * 100 + "vw";
      rainDrop.style.animationDuration = (Math.random() * 3 + 2) + "s";
      rainContainer.appendChild(rainDrop);
  }
});
