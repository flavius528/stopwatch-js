document.addEventListener('DOMContentLoaded', () => {
    let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    let clock = document.querySelector('#clock');
    let time = null;

    document.querySelector('#start-mode').addEventListener('click', () => {
        if (time !== null) {
            clearInterval(time);
        }

        time = setInterval(displayTime, 10);
    });

    document.querySelector('#stop-mode').addEventListener('click', () => {
        clearInterval(time);
    });

    document.querySelector('#reset-mode').addEventListener('click', () => {
        clearInterval(time);
        [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
        clock.innerHTML = '00:00:00:000';
    });

    function displayTime() {
        miliseconds += 10;

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;

        if (miliseconds === 1000) {
            miliseconds = 0;
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;

                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }

        clock.innerHTML = `${h}:${m}:${s}:${ms}`;
    }
});