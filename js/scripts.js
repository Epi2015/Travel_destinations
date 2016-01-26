function Place(country,city) {
  this.country = country;
  this.city = city;
  this.details = [];
}

Place.prototype.countryCity = function() {
  return this.country + " " + this.city;
}

function Details(hotel, landmark, season) {
  this.hotel = hotel;
  this.landmark = landmark;
  this.season = season;
}

Details.prototype.fullDetails = function() {
  return this.hotel + ", " + this.landmark + ", " + this.season;
}

// function resetFields() {
//     $("input#new-country").val("");
//     $("input#new-city").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-state").val("");
// }

$(document).ready(function() {
//   $("#add-address").click(function() {
//   $("#new-details").append('<div class="new-address">' +
//                                '<div class="form-group">' +
//                                  '<label for="new-street">Street</label>' +
//                                  '<input type="text" class="form-control new-street">' +
//                                '</div>' +
//                                '<div class="form-group">' +
//                                  '<label for="new-city">City</label>' +
//                                  '<input type="text" class="form-control new-city">' +
//                                '</div>' +
//                                '<div class="form-group">' +
//                                  '<label for="new-state">State</label>' +
//                                  '<input type="text" class="form-control new-state">' +
//                                '</div>' +
//                              '</div>');
// });

  $("form#new-destination").submit(function(event) {
    event.preventDefault();

    var inputtedCountry = $("input#new-country").val();
    var inputtedCity = $("input#new-city").val();
    var newPlace = new Place(inputtedCountry, inputtedCity);

    $(".new-detail").each(function() {
     var inputtedHotel = $(this).find("input.new-hotel").val();
     var inputtedLandmark = $(this).find("input.new-landmark").val();
     var inputtedSeason = $(this).find("input.new-season").val();
     var newDetails = new Details(inputtedHotel, inputtedLandmark, inputtedSeason);
     newPlace.details.push(newDetails);
   });

  //   $(".new-address").each(function() {
  //    var inputtedStreet = $(this).find("input.new-street").val();
  //    var inputtedCity = $(this).find("input.new-city").val();
  //    var inputtedState = $(this).find("input.new-state").val();
  //    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
  //    newPlace.details.push(newDetails)
  //  });



    $("ul#places").append("<li><span class='Place'>" + newPlace.countryCity() + "</span></li>");

    $("input#new-country").val("");
    $("input#new-city").val("");

    $(".Place").last().click(function() {
      $("#show-place").show();
      $("#places h2").text(newPlace.countryCity());
      $(".Country").text(newPlace.country);
      $(".City").text(newPlace.city);
      $("ul#detail").text("");
      newPlace.details.forEach(function(x) {
        $("ul#detail").append("<li>" + x.fullDetails() + "</li>");
      });
    });

    // resetFields();

  });
});
