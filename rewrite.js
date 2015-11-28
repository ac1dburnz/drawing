//taken from https://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var radius = 2;
var dragging = false;
var alert;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius * 2;

function disengage() {
    "use strict";
    dragging = false;
    context.beginPath();
}

function putPoint(event) {
    "use strict";
    if (dragging) {
        context.lineTo(event.clientX, event.clientY);
        context.stroke();
        context.beginPath();
        context.arc(event.clientX, event.clientY, radius, 0, 2 * Math.PI);
        context.fill();
        context.beginPath();
        context.moveTo(event.clientX, event.clientY);
    }
}

function engage() {
    "use strict";
    dragging = true;
    putPoint();
}


canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mousemove", putPoint);
canvas.addEventListener("mouseup", disengage);

alert("click and drag to draw on drawing board ");
