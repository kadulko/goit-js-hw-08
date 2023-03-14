import Player from '@vimeo/player';
import storage from './storage';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

if (storage.load(LOCALSTORAGE_KEY)) {
  player.setCurrentTime(storage.load(LOCALSTORAGE_KEY));
}

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onTimeUpdate = function (data) {
  console.log(data.seconds);
  storage.save(LOCALSTORAGE_KEY, data.seconds);

  // data is an object containing properties specific to that event
};

player.on(
  'timeupdate',
  throttle(data => storage.save(LOCALSTORAGE_KEY, data.seconds), 1000)
);
