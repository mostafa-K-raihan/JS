window.addEventListener('keydown', (e) => {
    const char = e.key.toUpperCase();
    const audio = document.querySelector(`audio[data-key="${char}"]`);
    const key = document.querySelector(`.key[data-key=${char}]`);
    
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});
function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));