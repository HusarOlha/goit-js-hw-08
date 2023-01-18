import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    localStorage.setItem('CURRENT_TIME', JSON.stringify(currentTime.seconds));
  }),
  1000
);

const lastTime = JSON.parse(localStorage.getItem('CURRENT_TIME'));

if (lastTime) {
  player.setCurrentTime(lastTime);
}
