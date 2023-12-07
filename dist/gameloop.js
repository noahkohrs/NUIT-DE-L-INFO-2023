"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var player = { x: 50, y: 50, width: 50, height: 50, speed: 5 };
//let cloud = new Cloud(ctx);
var numberOfInhabitant = 0;
var globalHealth = 100;
var globalMoney = 1000;
var averageTemperature = 0;
var date = 1965;
function drawPlayer() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}
function drawDate() {
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.strokeRect(450, 10, 200, 50);
    ctx.fillText(date.toString(), 500, 50);
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function updateDate(event) {
    switch (event.key) {
        case "ArrowLeft":
            date += 10;
            break;
        default:
            break;
    }
}
function updateGame() {
    clearCanvas();
    drawPlayer();
    drawDate();
    //if (cloud.isCloudVisible) cloud.drawCloud();
    requestAnimationFrame(updateGame);
}
function movePlayer(event) {
    switch (event.key) {
        case "ArrowLeft":
            player.x -= player.speed;
            break;
        case "ArrowRight":
            player.x += player.speed;
            break;
        case "ArrowUp":
            player.y -= player.speed;
            break;
        case "ArrowDown":
            player.y += player.speed;
            break;
    }
}
document.addEventListener("keydown", updateDate);
document.addEventListener("keydown", movePlayer);
//document.addEventListener("click", cloud.toggleCloudVisibility);
updateGame();
