// Importer la vidéo
document.getElementById('video-input').addEventListener('change', (event) => {
  const file = event.target.files[0];
  const video = document.getElementById('video-preview');

  if (file) {
    video.src = URL.createObjectURL(file);
    video.style.display = 'block';
    video.load();
  }
});

// Préréglages
document.querySelectorAll('.preset').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('sharpness').value = button.dataset.sharpness;
    document.getElementById('contrast').value = button.dataset.contrast;
    document.getElementById('brightness').value = button.dataset.brightness;
    document.getElementById('saturation').value = button.dataset.saturation;
  });
});

// BOUTON TRANSFORMER — VERSION QUI MARCHE
document.getElementById('processButton').addEventListener('click', () => {
  const video = document.getElementById('video-preview');
  const progress = document.getElementById('progress');

  if (!video.src) {
    alert("Importe une vidéo d'abord !");
    return;
  }

  const sharpness = document.getElementById('sharpness').value;
  const contrast = document.getElementById('contrast').value;
  const brightness = document.getElementById('brightness').value;
  const saturation = document.getElementById('saturation').value;

  progress.textContent = "Transformation en cours...";

  // Simulation de progression
  let percent = 0;
  const timer = setInterval(() => {
    percent += 10;
    progress.textContent = `Progression : ${percent}%`;

    if (percent >= 100) {
      clearInterval(timer);

      // APPLICATION DES FILTRES VISUELS
      video.style.filter = `
        brightness(${brightness}%)
        contrast(${contrast}%)
        saturate(${saturation}%)
      `;

      // Simulation de netteté (hack visuel)
      video.style.boxShadow = `0 0 ${sharpness / 10}px rgba(0,0,0,0.5)`;

      progress.textContent = "Transformation terminée ✅";
    }
  }, 200);
});
