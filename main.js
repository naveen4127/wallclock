var card = document.getElementById('card');
var clock = document.getElementById('clock');
var message = document.getElementById('message');
var sound = new Audio('tap.mp3'); 

card.addEventListener('mouseover', function() {
    clock.style.backgroundColor = "rosybrown";
    message.innerHTML = "You are IN🙂";
});

card.addEventListener('mouseout', function() {
    clock.style.backgroundColor = "red";
    message.innerHTML = "You are OUT🙃";
});

card.addEventListener('click', function() {
    clock.style.backgroundColor = "green";
    message.innerHTML = "You Clicked👍";
});

function updateClock() {
    var date = new Date();
    var hours = date.getHours().toString().padStart(2, '0');
    var mins = date.getMinutes().toString().padStart(2, '0');
    var secs = date.getSeconds().toString().padStart(2, '0');
    clock.innerHTML = hours + ":" + mins + ":" + secs;

    sound.currentTime = 0;
    sound.play();
}

setInterval(updateClock, 1000);
updateClock();
