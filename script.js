document.getElementById('video-input').addEventListener('change', (event) => {
  const file = event.target.files[0];
  const videoPreview = document.getElementById('video-preview');

  if (file) {
    const videoURL = URL.createObjectURL(file);
    videoPreview.src = videoURL;
    videoPreview.style.display = 'block';
  }
});

// Appliquer les pré-réglages aux curseurs
document.querySelectorAll('.preset').forEach(button => {
  button.addEventListener('click', (event) => {
    const sharpness = event.target.dataset.sharpness;
    const contrast = event.target.dataset.contrast;
    const brightness = event.target.dataset.brightness;
    const saturation = event.target.dataset.saturation;

    document.getElementById('sharpness').value = sharpness;
    document.getElementById('contrast').value = contrast;
    document.getElementById('brightness').value = brightness;
    document.getElementById('saturation').value = saturation;
  });
});

// Transformer la vidéo avec les pré-réglages
document.getElementById('processButton').addEventListener('click', () => {
  const videoPreview = document.getElementById('video-preview');
  const progressElement = document.getElementById('progress');
  const sharpness = document.getElementById('sharpness').value;
  const contrast = document.getElementById('contrast').value;
  const brightness = document.getElementById('brightness').value;
  const saturation = document.getElementById('saturation').value;

  if (!videoPreview.src) {
    alert("Veuillez d'abord importer une vidéo.");
    return;
  }

  // Simuler la transformation avec les préréglages
  progressElement.innerText = 'Transformation en cours...';
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressElement.innerText = `Progression : ${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      progressElement.innerText = 'Transformation terminée';

      // Ici, on pourrait appliquer les préréglages à la vidéo.
      // Pour simplifier, on laisse la vidéo telle quelle.
    }
  }, 500); // Simule la progression toutes les 0.5 secondes
});
