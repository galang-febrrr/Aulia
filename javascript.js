// ==========================================
// 1. GLOBAL WINDOW FUNCTION UNTUK WELCOME SCREEN
// ==========================================
window.masukPortfolio = function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.visibility = 'hidden';
            window.cekScrollEfek();
        }, 500);
    }
}

// ==========================================
// 2. FUNGSI UNTUK DETEKSI ANIMASI MUNCUL SAAT SCROLL
// ==========================================
window.cekScrollEfek = function() {
    const elemenAnimasi = document.querySelectorAll('.animate-scroll');
    const tinggiLayar = window.innerHeight * 0.92;

    elemenAnimasi.forEach(elemen => {
        const jarakTop = elemen.getBoundingClientRect().top;
        if (jarakTop < tinggiLayar) {
            elemen.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', window.cekScrollEfek);
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = '1';
});

