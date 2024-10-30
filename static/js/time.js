
const clock = document.querySelector('.clock');

const changeTime = () => {
    const time = new Date();

    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const secondsAngle = time.getSeconds() * 6;
    const minsAngle = time.getMinutes() * 6 + secondsAngle / 60;
    const hourAngle = ((time.getHours() % 12) / 12) * 360  + minsAngle / 12;

    let startPosition = minsAngle;
    let endPosition = hourAngle - minsAngle;

    if (minsAngle > hourAngle) {
        startPosition = minsAngle - 360;
        endPosition = hourAngle - startPosition;
    }
    
    clock.style.setProperty("--start", startPosition + "deg");
    clock.style.setProperty("--end", endPosition + "deg");

    const hourDeg = (hour % 12) * 30 + minute * 0.5;
    const minuteDeg = minute * 6;
    const secondDeg = second * 6;

    clock.style.setProperty('--hourDeg', `${hourDeg}deg`);
    clock.style.setProperty('--minuteDeg', `${minuteDeg}deg`);
    clock.style.setProperty('--secDeg', `${secondDeg}deg`);
};

changeTime();

setInterval(changeTime, 1000);

