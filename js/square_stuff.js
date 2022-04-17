var canvas = document.getElementById("square_canvas");
console.log("canvas: " +canvas)
var ctx = canvas.getContext("2d");

let rectWidth = 50;
let recHeight = 50;
let recX = 5;
let recY = 5;

let timerVar;
function startTimer() { 
    timerVar = setInterval(drawSquare, 1) 
}
let numOfTimes = 0;
function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = "2";
    ctx.fillRect(recX, recY, rectWidth, recHeight);
    ctx.fill();

    ctx.font = "30px Arial";
    ctx.fillText(numOfTimes, 0, canvas.height);
    numOfTimes += 1;
}

//for later: only one work, make multible work at once
document.addEventListener('keydown', function(event) {
    //a
    if(event.keyCode == 65) { 
        recX -= 10;
    }
    //w
    if(event.keyCode == 87) { 
        recY -= 10;
    }
    //s
    if(event.keyCode == 83) { 
        recY += 10;
    }
    //d
    if(event.keyCode == 68) { 
        recX += 10;
    }
});