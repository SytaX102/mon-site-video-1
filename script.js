const videoInput = document.getElementById("video-input");
const video = document.getElementById("video-preview");

videoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  video.src = URL.createObjectURL(file);
  video.style.display = "block";
  video.load();
});
