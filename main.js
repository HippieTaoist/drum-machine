// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3')

//internal tick clock
let tickNum = 0;

// This function is called every 600ms
function update() {
    if (tickNum < 4){
        tick.play();
        tickNum += 1
    }
    // Play the 'tick' sound
    if (tickNum===4){
        tock.play()
        tickNum =0
    }


}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
