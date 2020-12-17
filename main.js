var SpeechRecognition = window.webkitSpeechRecognition;

var recog = new SpeechRecognition();

function start(){
    document.getElementById("text-area_1").innerHTML="";
    recog.start();
}

recog.onresult = function(event){
    var Content = event.results[0][0].transcript;
    document.getElementById("text-area_1").innerHTML=Content;
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("text-area_1");
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis); 
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
})
camera = document.getElementById("camera");