// Setup sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const hihat = new Audio('sounds/hi-hat.mp3')
const snare = new Audio('sounds/snare-drum.mp3')
const kick = new Audio('sounds/kick-drum.mp3')

// Internal counter
let counterArea = document.getElementById('counter-area');

//internal tick clock
let tickNum = 0;
let counterNum = 1

// set drum-count beats for instruments
let metroBeat = document.getElementById('metro-count')
let snareBeat = document.getElementById('snare-count')
let hihatBeat = document.getElementById('hihat-count')
let kickBeat = document.getElementById('kick-count')

// +++++FUNCTIONS++++++++++++++++
// This function is called every 600ms
function update() {
    console.log(kickBeat.value)
    if (tickNum === 4) {
        tickNum = 0
        counterNum = tickNum + 1
    }
    tickNum += 1
    checkSetBeat()
    playMetronone()
    playSnareDrum()
    playHiHat()
    playKick()

    console.log(tickNum)




    counterArea.innerText = tickNum



}

function playMetronone() {
    let playMe = document.getElementById('metronome-checkbox')
    if (playMe.checked) {
        if (tickNum < 4) {
            tick.load();
            tick.play()
        }
        // Play the 'tock' sound
        if (tickNum === 4) {
            tock.load();
            tock.play();
        }
    }
}

function playSnareDrum() {
    let playMe = document.getElementById('snaredrum-checkbox')
    // let onBeat = document.getElementById('kickdrum-beat')
    // onbeat.addEventListener('change', function ())
    if (playMe.checked) {
        if (Number(snareBeat.value) === tickNum) {
            snare.load()
            snare.play();
        }
    }
}

function playHiHat() {
    let playMe = document.getElementById('hihat-checkbox')
    if (playMe.checked) {
        if (Number(hihatBeat.value) === tickNum) {
            hihat.load();
            hihat.play();
        }
    }
}

function playKick() {
    let playMe = document.getElementById('kickdrum-checkbox')
    if (playMe.checked) {
        if (Number(kickBeat.value) === tickNum) {
            kick.load();
            kick.play();
        }
    }
}

// checkSetBeat function plays the sound on beat choosen in real time without need for an enter selection.
function checkSetBeat() {
    metroBeat = document.getElementById('metro-count')
    snareBeat = document.getElementById('snare-count')
    hihatBeat = document.getElementById('hihat-count')
    kickBeat = document.getElementById('kick-count')
    // let Beat = document.getElementById('-count')


}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}


// +++++App Calling +++++
// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);