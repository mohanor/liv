const hamburger = document.getElementById('icon-hamburger');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

hamburger.addEventListener('click', () => {
    modal.style.display = "block";
});

close.addEventListener('click', () => {
    modal.style.display = "none";
});