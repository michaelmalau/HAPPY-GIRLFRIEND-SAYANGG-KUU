// DAFTAR EMOJI BONEKA, LOVE, DAN BINTANG
const emojis = ['🧸', '💖', '⭐', '💕', '✨', '💓', '💗', '🐶', '💘', '🌸'];

function createFloatingEmoji() {
  const emojiEl = document.createElement('div');
  emojiEl.classList.add('floating-emoji');
  
  // Pilih emoji acak
  emojiEl.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  
  // Posisi horizontal acak di layar
  emojiEl.style.left = Math.random() * 100 + 'vw';
  
  // Ukuran acak
  const size = Math.random() * 20 + 15;
  emojiEl.style.fontSize = size + 'px';
  
  // Durasi animasi jatuh acak (antara 3 - 7 detik)
  const duration = Math.random() * 4 + 3;
  emojiEl.style.animationDuration = duration + 's';
  
  document.body.appendChild(emojiEl);
  
  // Hapus elemen setelah selesai animasi jatuh
  setTimeout(() => {
    emojiEl.remove();
  }, duration * 1000);
}

// Menjalankan pembuat emoji setiap 300ms
setInterval(createFloatingEmoji, 300);