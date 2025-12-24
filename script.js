const btn = document.getElementById('btnTransform');
const videoOriginal = document.getElementById('videoOriginal');
const videoTransformee = document.getElementById('videoTransformee');

btn.addEventListener('click', async () => {
  btn.disabled = true;
  btn.textContent = "Transformation en cours...";

  // Simulation d'un traitement IA (ex: appel API)
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Remplace la source vidéo par la vidéo transformée
  videoTransformee.querySelector('source').src = 'video_amelioree.mp4';
  videoTransformee.load();
  videoTransformee.style.display = 'block';

  btn.textContent = "Transformation terminée !";
});
