function setup(){

    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting object";

}

img="";

status="";

function modelLoaded(){

    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);

}

function gotResult(error,results){

    if(error){

        console.log(error);

    }

    console.log(results);
    
}

function preload(){

    img=loadImage('img.jpg');

}

function draw(){

    image(img,0,0,640,420);
    fill("#FF0000");
    text("bed",80,190);
    noFill();
    stroke("#FF0000");
    rect(30,200,400,350);

    fill("#FF0000");
    text("window",420,120);
    noFill();
    stroke("#FF0000");

    rect(400,90,270,320);
    
}