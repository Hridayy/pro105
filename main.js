function startclassifier(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Azf1LJp5D/model.json",ModelReady)}
    
    function ModelReady(){
    classifier.classify(gotResults)}

    function gotResults(){

    }
    