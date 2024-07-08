document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');
  let isPlaying = false;

  function toggleMusic() {
    if (isPlaying) {
      audio.pause();
      musicToggle.textContent = '🔇';
    } else {
      audio.play();
      musicToggle.textContent = '🔊';
    }
    isPlaying = !isPlaying;
  }

  musicToggle.addEventListener('click', toggleMusic);

  // Mulai memutar musik saat halaman dimuat
  audio
    .play()
    .then(() => {
      isPlaying = true;
      musicToggle.textContent = '🔊';
    })
    .catch((error) => {
      console.log('Autoplay was prevented. Please click the button to start the music.');
    });
});
