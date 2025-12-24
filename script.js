document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const videoOriginal = document.getElementById('videoOriginal');
  const videoTransformee = document.getElementById('videoTransformee');
  const btn = document.getElementById('btnTransform');
  const presetSelect = document.getElementById('presetSelect');

  let originalVideoURL = null;

  // Importer un fichier vidéo
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;

    if (originalVideoURL) {
      URL.revokeObjectURL(originalVideoURL);
    }

    originalVideoURL = URL.createObjectURL(file);
    videoOriginal.src = originalVideoURL;
    videoOriginal.style.display = 'block';
    videoTransformee.style.display = 'none';
  });

  // Bouton pour transformer la vidéo
  btn.addEventListener('click', async () => {
    if (!videoOriginal.src) {
      alert("Veuillez importer une vidéo d'abord !");
      return;
    }

    const preset = presetSelect.value;
    btn.disabled = true;
    btn.textContent = `Transformation (${preset}) en cours...`;

    // Simulation du traitement IA (exemple : 3 secondes)
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Simulation de vidéo transformée
    // Dans un vrai projet, remplacer cette URL par la vidéo traitée via API/backend
    videoTransformee.src = originalVideoURL; // ici on garde la même vidéo
    videoTransformee.style.display = 'block';

    btn.textContent = `Transformation (${preset}) terminée !`;
    btn.disabled = false;
  });
});
