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
