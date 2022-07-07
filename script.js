let start = document.querySelector('#start');
let pause = document.querySelector('#pause'); 
let reset = document.querySelector('#reset');
let work_minute = document.querySelector('#minute');
let work_second = document.querySelector('#second');
let break_minute = document.querySelector('#break__minute'); 
let break_second = document.querySelector('#break__second');

// audio
let audio = document.getElementById("myAudio"); 
// audio
let startTimer;
start.addEventListener('click', function(){
    if (startTimer == undefined) {
        startTimer = setInterval(timer, 1000);
    } 
});

pause.addEventListener('click', () => {
    clearInterval(startTimer);
    startTimer = undefined;
})
// 
 let audiop = 0;
// 
function timer() {
    if (work_second.innerText != 0) {
        work_second.innerText--;
    } else if (work_second.innerText == 0 && work_minute.innerText != 0) {
        work_minute.innerText -= 1;
        work_second.innerText = 59;
    }
    // break timer
    if (work_minute.innerText == 0 && work_second.innerText == 0) {
       
        // if (audiop == 0) {
        //     audio.play();
        //     audiop = 1;
        // }
        
        if (break_second.innerText != 0) {
        break_second.innerText--;
    } else if (break_second.innerText == 0 && break_minute.innerText != 0) {
        break_minute.innerText -= 1;
        break_second.innerText = 59;
        } 
    }
    if (work_second.innerText == 0 && work_minute.innerText == 0 && break_minute.innerText == 0 && break_second.innerText == 0) {
        // if (audiop == 1) {
        //     audio.play();
        //     audiop = 0;
        // }
        work_minute.innerHTML = 25;
        work_second.innerHTML = '00';
        break_minute.innerHTML = 05;
        break_second.innerHTML = '00';
    }
    reset.addEventListener('click', () => {
    work_minute.innerHTML = 25;
    work_second.innerHTML = '00';
    break_minute.innerHTML = 05;
    break_second.innerHTML = '00';
    clearInterval(startTimer);
    startTimer = undefined;
})
}
// audio
// if (work_minute == 0 && work_second == 0) {
//     audio.play();
// }





