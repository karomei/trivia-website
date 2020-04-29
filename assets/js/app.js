/**
 * Loads Landing Page
 */

function loadLandingPage() {
    $("#settingsPage").hide();
    $("#landingPage").show();
}

/**
 * Loads Settings Page, hides Landing Page
 */

 function loadSettingsPage() {
     $("#landingPage").hide();
     $("#settingsPage").show();
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
   * Info modal
   */
  $("#siteInfo").click(function() {
    $(".modal").addClass("active");
  });

  $("#close").click(function(){
    $(".modal").removeClass("active");
  });