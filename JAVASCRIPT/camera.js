let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let video = document.querySelector("#video");
let snap = document.querySelector("#snap");
let getButton = document.querySelector("#getButton");
let main = document.querySelector("#main");
let x0y0 = document.querySelector(".x0y0");
var xCordinate = 0;
var yCordinate = 0;
var endxCordinate = 1;
var endyCordinate = 1;
var newxCordinate = 0;
var newyCordinate = 0;
var newendxCordinate = 1;
var newendyCordinate = 1;


if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.play();
    });
}

// this is my snap button on take photo

function repeating() {
    context.drawImage(video, 0, 0, 640, 480);

}

// setInterval(repeating, 0);

snap.addEventListener('click', function () {
    context.drawImage(video, 0, 0, 640, 480);
    // console.log(x0y0);

});

getButton.addEventListener('click', function () {
    var imgData = context.getImageData(xCordinate, yCordinate, endxCordinate, endyCordinate);
    red = imgData.data[0];
    green = imgData.data[1];
    blue = imgData.data[2];
    alpha = imgData.data[3];

    // console.log(red + " " + green + " " + blue + " " + alpha)
    // document.writeIn(red + " " + green + " " + blue + " " + alpha)
    // main.innerHTML = red + "." + green + "." + blue + "." + alpha;
    x0y0.innerHTML = red + "." + green + "." + blue + "." + alpha;

});
const 



