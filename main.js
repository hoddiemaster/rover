canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";
rover_image = "rover.png";
rover_x = 10;
rover_Y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_Y, rover_width, rover_height);
}

window.addEventListener("keydown", mykeyDown);

function mykeyDown(e) {
    keypress = e.keyCode;
    if (keypress == '38') {
        up();
    }

    if (keypress == '39') {
        right();
    }

    if (keypress == '40') {
        down();
    }
    if (keypress == '37') {
        left();
    }
}

function up() {
    if (rover_Y >= 0) {
        rover_Y = rover_Y - 10;
        uploadBackground();
        uploadrover();
    }
}
function down() {
    if (rover_Y <= 500) {
        rover_Y = rover_Y + 10;
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadrover();
    }
}