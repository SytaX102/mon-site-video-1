// On attend que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnTransform');
  const videoOriginal = document.getElementById('videoOriginal');
  const videoTransformee = document.getElementById('videoTransformee');

  if (!btn) {
    console.error("Bouton non trouvé !");
    return;
  }

  btn.addEventListener('click', async () => {
    btn.disabled = true;
    btn.textContent = "Transformation en cours...";

    // Simulation d'un traitement IA
    await new Promise(resolve => setTimeout(resolve, 3000));

    // On remplace la vidéo par la transformée
    videoTransformee.querySelector('source').src = 'video_amelioree.mp4';
    videoTransformee.load();
    videoTransformee.style.display = 'block';

    btn.textContent = "Transformation terminée !";
  });
});
