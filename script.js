const button = document.getElementById('annoyButton');
const sound = document.getElementById('annoySound');

button.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        createAnnoyingPopup();
    }
    sound.play();
});

// Funcție pentru a crea popup-uri deranjante
function createAnnoyingPopup() {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerText = "FUTUTE ÎN PIZDA MĂTI!";
    document.body.appendChild(popup);

    // Poziționează popup-ul la o coordonată aleatoare
    popup.style.top = Math.random() * window.innerHeight + 'px';
    popup.style.left = Math.random() * window.innerWidth + 'px';
    popup.style.display = 'block';

    // Fă popup-ul să dispară după 2 secunde
    setTimeout(() => {
        document.body.removeChild(popup);
    }, 2000);
}

// Funcție pentru a crea reclame deranjante
function createAnnoyingAd() {
    const ad = document.createElement('div');
    ad.className = 'ad';
    ad.innerText = "CLIC CA SĂ CUMPĂR!";
    document.body.appendChild(ad);

    // Poziționează reclama la o coordonată aleatoare
    ad.style.top = Math.random() * window.innerHeight + 'px';
    ad.style.left = Math.random() * window.innerWidth + 'px';
    ad.style.display = 'block';

    // Fă reclama să dispară după 3 secunde
    setTimeout(() => {
        document.body.removeChild(ad);
    }, 3000);
}

// Crează reclame deranjante la fiecare 500ms
setInterval(createAnnoyingAd, 500);

// Schimbă fundalul în mod constant
setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
}, 500);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Mărește fontul aleatoriu la fiecare 100ms
setInterval(() => {
    const randomSize = Math.floor(Math.random() * 50) + 20; // Dimensiuni între 20px și 70px
    document.body.style.fontSize = randomSize + 'px';
}, 100);