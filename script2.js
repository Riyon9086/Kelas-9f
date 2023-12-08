const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
  });

  button.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1.0)';
  });
  
  button.addEventListener('click', function() {
    this.style.transform = 'scale(0.9)';
  });
});
window.addEventListener('mousemove', function() {
  var audioElement = document.getElementById('myAudio');
  audioElement.play();
  // Hapus event listener setelah audio dimulai
  this.removeEventListener('mousemove', arguments.callee, true);
}, true);
window.onload = function() {
  const text1 = 'Selamat datang di Beranda!';
  const text2 = 'Kelas 9F Spero';
  const welcomeText1 = document.getElementById('welcome-text1');
  const welcomeText2 = document.getElementById('welcome-text2');
  let i = 0;
  let j = 0;

  // Fungsi untuk menampilkan teks satu per satu
  function typeWriter(text, welcomeText, k) {
    if (k < text.length) {
      welcomeText.innerHTML += text.charAt(k);
      k++;
      setTimeout(() =>
   typeWriter(text, welcomeText, k), 100); // Kecepatan mengetik
    }
  }

  // Mulai animasi mengetik setelah penundaan 2 detik
  setTimeout(() => typeWriter(text1, welcomeText1, i), 2000);
  setTimeout(() => typeWriter(text2, welcomeText2, j), 2000);

  // Tampilkan tombol setelah penundaan 4 detik
  setTimeout(function() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
      button.classList.remove('hidden');
      button.classList.add('fade-in');
    });
  }, 4000); // Menunda 4 detik
};
