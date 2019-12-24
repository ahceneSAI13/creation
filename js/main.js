// Synthese vocale
var synth;
var utt;
var pitchValue = 1;
var rateValue = 1;
var currentVoiceLang = "fr-FR";
var currentPitchValue = 1;
var currentRateValue = 1;
var listePersonnes;
var nomPersonne;
var choixPersonne;

function initSynthese() {
    try {
        synth = window.speechSynthesis;
        utt = new SpeechSynthesisUtterance();  
    } catch (e) {
        alert(e);
    }
}
function parle(texte) {
    try {
        utt.pitch = currentPitchValue;
        utt.rate = currentRateValue;
        synth.getVoices().forEach(function (voice) {
            if (voice.lang === currentVoiceLang) {
                utt.voice = voice;
            }
        });

        initSynthese();
        utt.text = texte;
        synth.speak(utt);
    } catch (e) {
    }
}

function resumeInfinity() {
    window.speechSynthesis.resume();
    timeoutResumeInfinity = setTimeout(resumeInfinity, 1000);
}
                
                
             