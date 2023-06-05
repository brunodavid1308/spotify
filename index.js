const r = document.querySelector(':root');
var mouseDown = false;

const progressBarElement = document.querySelector('.volume-control__bar-wrapper');

progressBarElement.addEventListener('click', function (event) {
    const x = event.clientX - progressBarElement.getBoundingClientRect().left;
    const clickedValue = x * 100 / progressBarElement.getBoundingClientRect().width;
    progressBarElement.style.setProperty('--progress-bar-transform', clickedValue + '%');
});

progressBarElement.addEventListener('mousemove', function (event) {
    if(!mouseDown) return;
    const x = event.clientX - progressBarElement.getBoundingClientRect().left;
    const clickedValue = x * 100 / progressBarElement.getBoundingClientRect().width;
    progressBarElement.style.setProperty('--progress-bar-transform', clickedValue + '%');
});

progressBarElement.addEventListener('mousedown', function (event) {
    mouseDown = true;
});

progressBarElement.addEventListener('mouseup', function (event) {
    mouseDown = false;
});