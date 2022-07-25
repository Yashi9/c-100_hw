var SpeechRecognition = window.webkitSpeechRecognition ; 
var recognition = new SpeechRecognition();
var content ;

function start()
{
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript
    console.log(content);
    if(content=="selfie")
    {
        console.log("selfie");
        speak();
    }

}
function speak()
{
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your selfie in 10 seconds ";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
    {
        img_id = "result1"
        take_snapshot();
        speak_data = "Taking your selfie in 10 seconds ";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function()
    {
        img_id = "result2"
        take_snapshot();
        speak_data = "Taking your selfie in 15 seconds ";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function()
    {
        img_id = "result3"
        take_snapshot();
        speak_data = "Taking your selfie in 20 seconds ";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);
}

function take_snapshot()
{
    console.log()
    Webcam.snap(function(data_uri)
    {
        if(img_id == "result1")
        {
            document.getElementById("result1").innerHTML='<img id = "result1" src = "'+data_uri+'">'   
        }
        if(img_id == "result2")
        {
            document.getElementById("result2").innerHTML='<img id = "result1" src = "'+data_uri+'">'   
        }
        if(img_id == "result3")
        {
            document.getElementById("result3").innerHTML='<img id = "result1" src = "'+data_uri+'">'   
        }
    });
}
camera = document.getElementById("camera");
webcam.set({
    width : 360,
    height:250,
    image_format : 'png',
    png_quality:90
});

