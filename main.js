function startclassifier(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Azf1LJp5D/model.json",ModelReady)}
    
    function ModelReady(){
    classifier.classify(gotResults)}

    function gotResults(){
        if(error){
            console.log(error)
                }
                else{
                    console.log(results)
            random_number_r=Math.floor(Math.random()*255) +1;
            random_number_g=Math.floor(Math.random()*255) +1;
            random_number_b=Math.floor(Math.random()*255) +1;
            
            document.getElementById("change").innerHTML="Animal Voice-"+ results[0].label
            document.getElementById("Accura").innerHTML="Accuracy"+ (results[0].confidence*100).toFixed(2) + "%"
            document.getElementById("change").style.color="rgb("+random_number_r + ","+random_number_g+","+random_number_b+")";
            document.getElementById("Accura").style.color="rgb("+random_number_r + ","+random_number_g+","+random_number_b+")";
            
            img1=document.getElementById("background")
            img2=document.getElementById("dog")
            img3=document.getElementById("cat")
            img4=document.getElementById("lion")
            img5=document.getElementById("cow")
            
            if(result[0].label=="Barking"){
            img1.src="back.jpg"
            img2.src="dog.gif"
            img3.src="cat.jpg"
            img4.src="lion.jpg"
            img5.src="cow.jpg"
            }
            else if(result[0].label=="Meowing"){
                img1.src="back.jpg"
                img2.src="dog.png"
                img3.src="cat.gif"
                img4.src="lion.jpg"
                img5.src="cow.jpg"
                }
                else if(result[0].label=="Roaring"){
                    img1.src="back.jpg"
                    img2.src="dog.png"
                    img3.src="cat.jpg"
                    img4.src="lion.gif"
                    img5.src="cow.jpg"
                    }
                    else if(result[0].label=="Mooing"){
                        img1.src="back.jpg"
                        img2.src="dog.png"
                        img3.src="cat.jpg"
                        img4.src="lion.jpg"
                        img5.src="cow.gif"
                        }

                    else{
                        img1.src="back.gif"
                        img2.src="dog.png"
                        img3.src="cat.jpg"
                        img4.src="lion.jpg"
                        img5.src="cow.jpg"
                        }
            }
            }
    
    