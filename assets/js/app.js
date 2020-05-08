/**
 * Pauses Landing Page Theme Music
 */
let audio = $("#themeMusic")[0];
$("#music").click(function(){
  if (audio.paused == false) {
    audio.pause();
  } else {
    audio.play();
  }
});

/**
 * Loads Settings Page, hides Game Page
 */

function loadSettingsPage() {
  $("#gamePage").hide();
  $("#settingsPage").show();
}

/**
 * Loads Game Page and hides Settings Page
 */

function loadGamePage() {
    $("#settingsPage").hide();
    $("#gamePage").show();
}

/**
* Click button to display Landing Page
*/
$("#home").click(function() {
  loadLandingPage();
});
  
 /**
  * Click button to display the Settings Page
  */
$("#settings").click(function() {
    loadSettingsPage();
  });

  /**
   * Info modal, open and close. If other modal is open, close it.
   */
  $("#siteInfo").click(function() {
    $("#infoModal").addClass("active");
    $("#emailModal").removeClass("active");
  });

  $("#close").click(function(){
    $("#infoModal").removeClass("active");
  });

  /**
   * Email modal, open and close. If other modal is open, close it.
   */
  $("#email").click(function() {
    $("#emailModal").addClass("active");
    $("#infoModal").removeClass("active");
  });

  $("#close").click(function(){
    $("#emailModal").removeClass("active");
  });
