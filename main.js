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

// +++++FUNCTIONS++++++++++++++++
// This function is called every 600ms
function update() {
    if (tickNum === 4) {
        tickNum = 0
        counterNum = tickNum + 1
    }
    tickNum += 1
    playMetronone()
    playSnareDrum()



    console.log(tickNum)




    counterArea.innerText = tickNum



}

function playMetronone() {
    let playMe = document.getElementById('metronome-checkbox')
    if (playMe.checked) {
        if (tickNum < 4) {
            tick.play()
        }
        // Play the 'tock' sound
        if (tickNum === 4) {
            tock.play();
        }
    }
}

function playSnareDrum() {
    let playMe = document.getElementById('snaredrum-checkbox')
    if (playMe.checked) {
        snare.play();
    }
}

// soundSelector function decides which items are check in the options section and passes them to the beat/metronome area.

// gather boxes into something
let playSound = document.querySelectorAll('input[name=soundPlay]')
console.log(playSound)

let snareSound = snare.play()

function soundSelector() {



}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}


// +++++App Calling +++++
// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);