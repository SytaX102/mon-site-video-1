document.getElementById('video-input').addEventListener('change', (event) => {
  const file = event.target.files[0];
  const videoPreview = document.getElementById('video-preview');

  if (file) {
    const videoURL = URL.createObjectURL(file);
    videoPreview.src = videoURL;
    videoPreview.style.display = 'block';
  }
});
