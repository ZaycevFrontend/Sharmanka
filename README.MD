# HTML5 audio player

## Methods
* play() - starts playing the audio track.
* pause() - pauses the audio track.
* load(string) - load audio track by url.
* preload(string) - starts preload audio track by url if preload state not false.
* volume(number) - set volume value (0 to 1).
* mute() - toggle volume value to 0 or previous value.
* seek(number) - set the moment on audio track (s|ms?).
* loop(boolean) - set a looping of audio track.
* setTrack(string) - set track by url.
* removeEvent(string, function) - remove function on selected event.
```js
const someFunction = () => {
  console.log(`Current time: ${Sharmanka.currentTime}`);
  if (Sharmanka.currentTime >= Sharmanka.duration) {
    console.log('Track ended');
    Sharmanka.removeEvent('timeupdate', someFunction);
  }
 }
Sharmanka.onTick(someFunction);
```

## Events
* onPlay - fires when audio track begins playing.
* onPause - fires when audio track was paused.
* onStart - fires when audio track begins playing by start.
* onEnd - fires when audio track was ending.
* onLoad - fires when audio track was loaded.
* onTick - fires when audio track change current time.
* onBuffer - fires when audio track was buffered.
* onLoadError - fires when load audio track was crushed.
* onError - fires when playing audio track was crushed.

## States  
* isPlay - return boolean for audio track playing.
* muted - return boolean for mute.
* loop - return boolean for loop.
* preloadAllow - return false when preload not allowed or integer (0-100%) when preload allowed. Integer mean when should 
start preload (in current audio track for preload next audio track).
