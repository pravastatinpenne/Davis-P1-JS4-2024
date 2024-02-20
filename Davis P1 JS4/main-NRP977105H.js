const lightbulb = document.getElementById('lightbulb');
const lightswitch = document.getElementById('lightswitch');
const status = document.getElementById('statusOfSwitch');

let isLightOn = false;

lightswitch.addEventListener('click', function() {
    if(isLightOn) {
        lightbulb.src = "lightOff.png";
        lightswitch.src = "switchOff.png";
        status.textContent = "TURN THE LIGHT ON";
    }else {
        lightbulb.src = "lightOn.png";
        lightswitch.src = "switchON.png";
        status.textContent = "You DID IT!, Now Turn off the Lights.";
    }
    isLightOn = !isLightOn;
}

);