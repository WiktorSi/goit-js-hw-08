import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const player = new Player('vimeo-player', {
    id: "vimeo-player",
});

const currentTime = function () {
    duration: 61.857
    percent: 0.049
    seconds: 3.034
};

player.on("timeupdate", throttle(currentTime => {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds));
}, 1000 ) );

const time = [localStorage.getItem("videoplayer-current-time")];

player.setCurrentTime(time[0])
    .then(function (seconds) {})
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});