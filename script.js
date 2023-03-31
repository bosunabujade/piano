const pianoKeys = document.querySelectorAll('.key');

function playSound(newURl) {
    console.log(newURl);
    new Audio(newURl).play();

}

pianoKeys.forEach((pianoKeys, i ) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1)

    const newURl = '24-piano-keys/key' + number +
    '.mp3';
    pianoKeys.addEventListener('click', () => playSound(newURl));
})