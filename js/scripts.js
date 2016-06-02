
$(document).ready(function() {
  $("#profile").submit(function(event) {
    event.preventDefault();
    debugger;
    // useless, maybe later
    // var name = $("input#name").val();
    // var age = parseInt($("input#age").val());
    var gender = $("#gender").val();
    // var favcolor = $("input#favcolor").val();
    // important ones
    var sign = $("#sign").val();
    // var pref = $("select#pref").val();

    // if (pref === 'male') {
      if (sign === 'virgo' || sign === 'cancer') {
        $('#brad').show();
      }
      else if (sign === 'airies' || sign === 'taurus') {
        $('#george').show();
      }
      else if (sign === 'capricorn' || sign === 'sagittarius') {
        $('#taylor').show();
      }
      else if (sign === 'gemini' || sign === 'scorpio') {
        $('#steve').show();
      }
      else if (sign === 'libra' || sign === 'leo') {
        $('#louis').show();
      }
      else if (sign === 'auquarius' || sign === 'pisces') {
        $('#sean').show();
      }
    // }
    //
    // if (gender === 'male') {
    //   $('#brad').show();
    // }
    // else if (gender === 'female') {
    //   $('#george').show();
    // }
    else {
      console.log("wrong");
    }

    // else if (pref === 'female') {
      // if {sign === 'virgo' || 'cancer'} {
      //   $(#angelina).show();
      // }
      // else if {sign === 'aries' || 'taurus'} {
      //   $(#scarlett).show();
      // }
      // else if {sign === 'capricorn' || 'sagittarius'} {
      //   $(#jennifer).show();
      // }
      // else if {sign === 'gemini' || 'scorpio'} {
      //   $(#whoopi).show();
      // }
      // else if {sign === 'libra' || 'leo'} {
      //   $(#rosie).show();
      // }
      // else if {sign === 'auquarius' || 'pisces'} {
      //   $(#daisy).show();


  });
});
