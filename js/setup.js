document.getElementById('set-Button').addEventListener('click', function() {
    document.getElementById('home-Screen').style.display = 'none';
    document.getElementById('setup-container').style.display = 'block';
});

document.getElementById('backBtn').addEventListener('click', function() {
    document.getElementById('setup-container').style.display = 'none';
    document.getElementById('home-Screen').style.display = 'block';
});

document.getElementById('volumeSlider').addEventListener('input', function() {
    var volume = document.getElementById('volumeSlider').value;
    document.getElementById('volumeValue').textContent = volume;
    if (window.bgMusic) {
        window.bgMusic.volume = volume / 100;
    }
});

document.getElementById('fontSizeSlider').addEventListener('input', function() {
    var fontSize = document.getElementById('fontSizeSlider').value;
    document.getElementById('fontSizeValue').textContent = fontSize;
    document.documentElement.style.setProperty('--chat-font-size', fontSize + 'px');
});