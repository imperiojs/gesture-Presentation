var panDiv = document.getElementById('pan-box');
var swipeDiv = document.getElementById('swipe-box');
var rotateDiv = document.getElementById('rotate-box');
var pinchDiv = document.getElementById('pinch-box');
var tapDiv = document.getElementById('tap-box');

imperio.emitRoomSetup();

imperio.gesture('swipe', swipeDiv);

imperio.gesture('pan', panDiv);

imperio.gesture('pinch', pinchDiv);

imperio.gesture('rotate', rotateDiv);

// imperio.gesture('press', panDiv);
// imperio.gesture('pressUp', panDiv);

imperio.gesture('tap', tapDiv);

imperio.emitAcceleration.gravity();
imperio.emitGyroscope.start();
