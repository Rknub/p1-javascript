let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
ctx.fillStyle = 'Yellow';
document.body.appendChild(canvas);

let x = 50;
let y = 50;
let dx = 0;
let dy = 0;
let radius = 20;

// variabelen cirkel 2:
let x2 = 100;
let y2 = 100;
let snelheid = 50; // snelheid van sprongen vd bal
let radius2 = 20; // radius van cirkel 2

// functie om de bal te laten bewegen
function StartBewegen() {
    dx = 2;
    dy = 2;
}

document.getElementById('startbutton').addEventListener('click', StartBewegen)

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') { 
        x2 -= snelheid; // x2 = x2 - snelheid
        if (x2+radius2 < 0) { x2 = canvas.width - radius2; }
     } else if (event.key === 'ArrowRight') {
        x2 += snelheid;
        if (x2-radius2 > canvas.width) { x2 = radius2; }
     }
     if (event.key === 'ArrowUp') {
        y2 -= snelheid;
        if (y2+radius2 < 0) { y2 = radius2; }
     } else if (event.key === 'ArrowDown') {
        y2 += snelheid;
        if (y2 > canvas.height-radius2) { y2 = canvas.height-radius2; }
     }

}
);

function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
}

function drawCircle2() {
    ctx.beginPath();
    ctx.arc(x2, y2, radius2, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

function collision() {
    // testen of de x en x2 elkaar raken en de y en y2 elkaar raken
    if (x == x2 && y == y2) {alert ("game over");}
}

function update() {
    ctx.clearRect (0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "Red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawCircle();
    drawCircle2();
    collision();

    x += dx;
    y += dy;

    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }

    requestAnimationFrame(update);
}
update();