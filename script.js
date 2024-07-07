// script.js
const textToConvert = document.getElementById('textToConvert');
const convertBtn = document.getElementById('convertBtn');

convertBtn.addEventListener('click', () => {
    const text = textToConvert.value.trim();

    if (!text) {
        alert('Please enter text to convert into speech.');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
});
