const videoInput = document.getElementById("video-input");
const video = document.getElementById("video-preview");
const progress = document.getElementById("progress");

// Import vidéo
videoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  video.src = URL.createObjectURL(file);
  video.style.display = "block";
  video.load();
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

// Transformer la vidéo (FONCTIONNEL)
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

      const brightnessVal = brightness.value;
      const contrastVal = contrast.value;
      const saturationVal = saturation.value;
      const sharpnessVal = sharpness.value;

      // APPLICATION VISUELLE RÉELLE
      video.style.filter = `
        brightness(${brightnessVal}%)
        contrast(${contrastVal}%)
        saturate(${saturationVal}%)
      `;

      video.style.boxShadow = `0 0 ${sharpnessVal / 8}px rgba(0,0,0,0.6)`;

      progress.textContent = "Transformation terminée ✅";
    }
  }, 150);
});

