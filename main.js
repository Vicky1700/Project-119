function setup() {
    canvas=createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;


}

function preload(){
   classifier=ml5.imageClassifier('DoddleNet');
}

function draw(){
    //Set stroke weight to 12
    strokeWeight(13);
    //Set stroke color to purple
    stroke(0);
    //if mouse is pressed, draw line previous and current mouse positions
    if(mouseIsPressed){
        listen(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas(){
    classifier.classsify(canvas, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    console.log(results);
    document.getElementById('your sketch').innerHTML='Your sketch:'+results[0].darwn_sketch;
}
