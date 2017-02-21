$(function() {
  $("select").children("option:first-child").hide();



  $("form").submit(function(event) {
    var prayerInput = parseInt($("select#prayer").val());
    var taxesInput = parseInt($("select#taxes").val());
    var marriageInput = parseInt($("select#marriage").val());
    var abortionInput = parseInt($("select#abortion").val());
    var immigrationInput = parseInt($("select#immigration").val());

    var userAverage = (prayerInput + taxesInput + marriageInput + abortionInput + immigrationInput) / 5;

    $("#output").show();

    if (userAverage < 2.3) {
      $("#result").text("Liberal");
    } else if (userAverage < 3.7) {
      $("#result").text("Moderate");
    } else {
      $("#result").text("Conservative");
    }


    event.preventDefault();
  });
});
