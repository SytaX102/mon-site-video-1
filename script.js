const videoInput = document.getElementById("video-input");
const video = document.getElementById("video-preview");
const progress = document.getElementById("progress");

// Sliders
const sharpness = document.getElementById("sharpness");
const contrast = document.getElementById("contrast");
const brightness = document.getElementById("brightness");
const saturation = document.getElementById("saturation");
const quality = document.getElementById("quality");
const fps = document.getElementById("fps");
const qualityValue = document.getElementById("qualityValue");
const fpsValue = document.getElementById("fpsValue");

// Import vidéo
videoInput.addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;

  video.src = URL.createObjectURL(file);
  video.style.display = "block";
  video.load();
});

// Affichage valeurs
quality.addEventListener("input", () => {
  qualityValue.textContent = quality.value + "p";
});

fps.addEventListener("input", () => {
  fpsValue.textContent = fps.value + " FPS";
});

// Préréglages
document.querySelectorAll(".preset").forEach(btn => {
  btn.addEventListener("click", () => {
    sharpness.value = btn.dataset.sharpness;
    contrast.value = btn.dataset.contrast;
    brightness.value = btn.dataset.brightness;
    saturation.value = btn.dataset.saturation;
  });
});

// TRANSFORMATION
document.getElementById("processButton").addEventListener("click", () => {
  if (!video.src) {
    alert("Importe une vidéo d'abord");
    return;
  }

  progress.textContent = "Transformation en cours...";
  let p = 0;

  const timer = setInterval(() => {
    p += 10;
    progress.textContent = `Progression : ${p}%`;

    if (p >= 100) {
      clearInterval(timer);

      // FILTRES VISUELS
      video.style.filter = `
        brightness(${brightness.value}%)
        contrast(${contrast.value}%)
        saturate(${saturation.value}%)
      `;

      // UPSCALE VISUEL
      video.style.transform = `scale(${quality.value / 1080})`;

      // SIMULATION FPS (motion smooth)
      video.playbackRate = fps.value / 60;

      // Netteté simulée
      video.style.boxShadow = `0 0 ${sharpness.value / 8}px rgba(0,0,0,0.7)`;

      progress.textContent = `Terminé ✅ | ${quality.value}p @ ${fps.value} FPS`;
    }
  }, 150);
});
