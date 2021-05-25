video ="";
status="";
function preload(){
video=createVideo("video.mp4");
};
function setup(){
Canvas=createCanvas(550 ,470);
Canvas.position(530 ,240);
video.hide();
};
function draw(){
image(video,0,0,550,470);

};
function Start(){
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status = Detecting objects"
};
function modelLoaded(){
console.log("Model is loaded!");
status=true;
video.loop();
video.speed(1);
video.volume(4);
};