
(function() {

  'use strict';

  /**
  * Creates a Wlcm.
  * @param object settings
  */
  function Wlcm(options) {
 
    // container for wlcm
 let welcome = document.getElementById("welcome");

 // create wlcm object
 welcome.wlcm({
 "words": [
     "Enthusiastic",
     "Motivated",
     "Flexible",
     "Curious",
     "Learner",
     "Attention to detail",
     "Independent",
     "Team Player"
 ],
 "min_speed": 1, 
 "max_speed": 3
});

  }

  HTMLElement.prototype.wlcm = Wlcm;

})();
