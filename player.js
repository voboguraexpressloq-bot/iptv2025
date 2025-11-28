function play(url) {
  document.getElementById('player').style.display = 'block';
  const video = document.getElementById('video');
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
  } else {
    video.src = url;
  }
  video.play();
}
function closePlayer() {
  document.getElementById('player').style.display = 'none';
  document.getElementById('video').pause();
}
