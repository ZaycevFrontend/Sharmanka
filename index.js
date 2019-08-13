"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

var Sharmanka = {
    node: null,
    preloadNode: null,
    onPlay: function onPlay(event) {
        try {
            if (_instanceof(event, Function)) this.node.addEventListener('onplay', function () {
                return event();
            });
        } catch (e) {
            throw new Error(e);
        }
    },
    onPause: function onPause(event) {
        try {
            if (_instanceof(event, Function)) this.node.addEventListener('onpause', function () {
                return event();
            });
        } catch (e) {
            throw new Error(e);
        }
    },
    onStart: function onStart(event) {
        try {
            if (_instanceof(event, Function)) this.node.addEventListener('onplay', function () {
                if (this.node.currentTime === 0) event();
            });
        } catch (e) {
            throw new Error(e);
        }
    },
    onEnd: function onEnd(event) {
        try {
            if (_instanceof(event, Function)) this.node.addEventListener('ended', function () {
                return event();
            });
        } catch (e) {
            throw new Error(e);
        }
    },
    onLoad: function onLoad(event) {
        try {
            if (_instanceof(event, Function)) this.node.addEventListener('loadedmetadata', function () {
                return event();
            });
        } catch (e) {
            throw new Error(e);
        }
    },
    onTick: function onTick(event) {
        try {
            if (_instanceof(event, Function)) this.node.addEventListener('timeupdate', function () {
                return event();
            });
        } catch (e) {
            throw new Error('Cant ');
        }
    },
    onBuffer: function onBuffer(event) {
        try {
            if (_instanceof(event, Function)) this.node.addEventListener('progress', function () {
                return event();
            });
        } catch (e) {
            throw new Error(e);
        }
    },
    onLoadError: function onLoadError(event) {
        try {
            if (_instanceof(event, Function)) this.node.addEventListener('error', function (e) {
                return event(e);
            });
        } catch (e) {
            throw new Error(e);
        }
    },
    onError: function onError(event) {
        try {
            if (_instanceof(event, Function)) this.node.addEventListener('abort', function (e) {
                return event(e);
            });
        } catch (e) {
            throw new Error(e);
        }
    },
    isPlay: function isPlay() {
        try {
            return !this.node.paused;
        } catch (e) {
            throw new Error(e);
        }
    },
    play: function play(event) {
        try {
            if (_instanceof(event, Function)) event();
            this.node.play();
        } catch (e) {
            throw new Error(e);
        }
    },
    pause: function pause(event) {
        try {
            if (_instanceof(event, Function)) event();
            this.node.pause();
        } catch (e) {
            throw new Error(e);
        }
    },
    preload: function preload(event) {
        try {
            if (_instanceof(event, Function) && !!this.preloadAllow) event();
        } catch (e) {
            throw new Error(e);
        }
    },
    volume: function volume(value) {
        try {
            if (typeof value === 'number' && value >= 0 && value <= 1) return this.node.volume = value;
            if (typeof value !== 'number') throw new Error('Volume value should be a number');
            if (typeof value === 'number' && value < 0 && value > 1) throw new Error('Volume value should be a positive number between 0 and 1');
        } catch (e) {
            throw new Error(e);
        }
    },
    mute: function mute() {
        try {
            this.node.muted = !this.node.muted;
        } catch (e) {
            throw new Error(e);
        }
    },
    seek: function seek(value) {
        try {
            this.node.currentTime = value;
            this.currentTime = value.toFixed();
        } catch (e) {
            throw new Error(e);
        }
    },
    setTrack: function setTrack(value) {
        try {
            if (typeof value === 'string' && value.length > 0) return this.node.src = value;
            if (typeof value !== "string" || value.length === 0) throw new Error('URL for track should be string by 1 character');
        } catch (e) {
            throw new Error(e);
        }
    },
    togglePlay: function togglePlay() {
        try {
            return this.node.paused ? this.node.play() : this.node.pause();
        } catch (e) {
            throw new Error(e);
        }
    },
    duration: 0,
    currentTime: 0,
    buffered: 0,
    preloadAllow: false,
    init: function () {
        this.node = document.createElement('audio');
        this.preloadNode = document.createElement('audio');
        this.node.addEventListener('loadedmetadata', function() {
            Sharmanka.duration = parseInt(Sharmanka.node.duration.toFixed(0));
        });
        this.node.addEventListener('progress', function() {
            Sharmanka.buffered = parseInt(Sharmanka.node.buffered.end(Sharmanka.node.buffered.length-1).toFixed(0));
        });
        this.node.addEventListener('timeupdate', function() {
            Sharmanka.currentTime = parseInt(Sharmanka.node.currentTime.toFixed(0));
        });
    }
};

var _default = Sharmanka;
exports.default = _default;