const heartElement = document.querySelector('.heart');
const nameElement = document.querySelector('.name');

// Fungsi untuk menambahkan animasi dinamis pada hati dan nama saat diklik
heartElement.addEventListener('click', function() {
    // Efek warna dan bayangan hati saat diklik
    heartElement.style.backgroundColor = heartElement.style.backgroundColor === 'red' ? '#ff5e5e' : 'red';
    heartElement.style.boxShadow = '0 0 50px rgba(255, 0, 0, 1), 0 0 100px rgba(255, 0, 0, 1)';
    
    // Animasi bouncing saat hati diklik
    heartElement.style.animation = 'bounce 0.7s ease-out';
    heartElement.style.transform = 'scale(1.5) rotate(360deg)';
    heartElement.style.transition = 'transform 0.7s ease, box-shadow 0.7s ease';

    // Kembali ke posisi semula setelah animasi selesai
    setTimeout(() => {
        heartElement.style.transform = 'rotate(-45deg)';
        heartElement.style.boxShadow = '0 0 30px rgba(255, 0, 0, 0.6), 0 0 50px rgba(255, 0, 0, 0.8)';
        heartElement.style.animation = 'heartbeat 1s infinite, colorPulse 4s infinite alternate, pendulum 2s infinite ease-in-out';
    }, 700);

    // Menampilkan nama dengan animasi yang lebih dinamis
    nameElement.classList.add('visible');
    nameElement.style.opacity = '1';
    nameElement.style.transform = 'translateY(0) scale(1.2)';
    nameElement.style.transition = 'transform 1.5s ease, opacity 1.5s ease';

    // Menambahkan efek blink pada nama setelah nama muncul
    setTimeout(() => {
        setInterval(() => {
            nameElement.style.opacity = nameElement.style.opacity === '1' ? '0.7' : '1';
        }, 800); // Blink setiap 800ms
    }, 1500);
});

// Animasi bouncing pada hati
const bounceAnimation = document.createElement('style');
bounceAnimation.type = 'text/css';
bounceAnimation.innerHTML = `
@keyframes bounce {
    0% { transform: scale(1) rotate(-45deg); }
    30% { transform: scale(1.3) rotate(-45deg); }
    100% { transform: scale(1) rotate(-45deg); }
}`;
document.head.appendChild(bounceAnimation);
