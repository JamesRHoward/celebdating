
$(document).ready(function() {
  $("form#profile").submit(function(event) {
    // useless, maybe later
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var favcolor = $("input#favcolor").val();
    // important ones
    var sign = $("input#sign").val();
    var pref = $("select#pref").val();

    if (pref === 'male') {
      if {sign === virgo || cancer} {
        $(#brad).show();
      }
      else if {sign === aries || taurus} {
        $(#george).show();
      }
      else if {sign === capricorn || sagittarius} {
        $(#taylor).show();
      }
      else if {sign === gemini || scorpio} {
        $(#steve).show();
      }
      else if {sign === libra || leo} {
        $(#louis).show();
      }
      else if {sign === auquarius || pisces} {
        $(#sean).show();
      }
    }

    else if (pref === 'female') {
      if {sign === virgo || cancer} {
        $(#angelina).show();
      }
      else if {sign === aries || taurus} {
        $(#scarlett).show();
      }
      else if {sign === capricorn || sagittarius} {
        $(#jennifer).show();
      }
      else if {sign === gemini || scorpio} {
        $(#whoopi).show();
      }
      else if {sign === libra || leo} {
        $(#rosie).show();
      }
      else if {sign === auquarius || pisces} {
        $(#daisy).show();
      }
    }




var brad = {virgo, cancer}


    $("#rate").text(quote);
    $("#quote").show()

    event.preventDefault();
  });
});
