let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '392',
    width: '662',
    videoId: 'ma67yOdMQfs',
    events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    }
  });
}