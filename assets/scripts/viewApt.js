// line 5: variable x is assigned the value of JSON having converted the value of the key 'id' from localStorage back into an object (Hmm - This doen't make sense to me.)
//line 6: variable cityState is assigned the value of the location key in localStorage?
//line 7: variable split is assigned the value of cityState, (which is what we named location in localStorage and is actually 'city,state')Split those two words at the comma, so we'll have city and state separate from each other.
//line 9: When the page has finished loading, make an ajax request to wunderground, and give it the state first (index position 1) and then the city next (index position 0), because that's how wunderground need us to send it.
var x = JSON.parse(localStorage.getItem('id'));
var cityState = appointments[x].location;
var split = cityState.split(",");
console.log(split);
  $(document).ready(function(){
    $.ajax({
      dataType: 'json',
      url: "http://api.wunderground.com/api/35c9d364b4732721/forecast10day/q/" + split[1] + "/" + split[0] + ".json", //CA/San_Francisco.json",
      method: "GET",
    }).done(function(json){
//line 17: Assign variable today the value of a new date object (the number of milliseconds since 1 January, 1970)  line 18: Assign variable dd the value of the day of the month (which is what getDate gives you)for today
//line 20: if dd is January - September (one-digit months) stick a zero in front of it, (so Wunderground will read the date correctly)
          var today = new Date();
          var dd = today.getDate();
          // var mm = today.getMonth()+1; //January is 0!
          if(dd<10) {
          dd='0'+dd
        }
        //  if(mm<10) {
        //    mm='0'+mm
        // }

        //line 33: assign today the value of what day of the month it is
        //line 34: assign future the date value from appointments in localStorage
        //line 35: assign futureCompare the value of future, (a date) sliced at the 3rd index position, which, including the slash would be the 1st digit of the month and sliced right before the 5th index position, which would grab the second digit of the month
        //line 37: assign futureNumber the integer value version of futureCompare (the month)
        //line 39: assign index the value of futureNumber minus today
        //line 40: to the class aptHeder, add in the html a paragraph tag with the class of aptName and insert as text the value saved in localStorage for description.
        today = dd
        future= appointments[x].date;
        futureCompare = future.slice(3,5);
        console.log(futureCompare);
        futureNumber = parseInt(futureCompare);
        console.log(futureNumber);
        index= futureNumber-today
        $(".aptHeader").append(
          '<p class="aptName">' + appointments[x].description + '</p>'
          )
        console.log(index + "yes?");
      if (index >=0){

      $(".aptContent").append(
        '<p class="dateTime">' + appointments[x].date + ' at <span class="time">' + appointments[x].time +
        '<p class="aptLocation">' + appointments[x].location + '</p>' + '<img class="map" src="http://i.imgur.com/OIotcym.png"/>' +
        '<div class="forcast"><img class="icon" src="' + json.forecast.simpleforecast.forecastday[index].icon_url + '"/>' +
        '<p class="forcastDetails">' + json.forecast.simpleforecast.forecastday[index].high.fahrenheit + '&#176F and ' + json.forecast.simpleforecast.forecastday[index].conditions + '</p></div>'
      );
      console.log(json);
      }
      else {

        $(".aptContent").append(
          '<p class="dateTime">' + appointments[x].date + ' at <span class="time">' + appointments[x].time +
          '<p class="aptLocation">' + appointments[x].location + '</p>' + '<img class="map" src="http://i.imgur.com/OIotcym.png"/>' +
          '<div class="forcast"><p class="forcastDetails">' + "Too far in the future" + '</p></div>'
        );

      }
    });
  });

        // Aaron's comments: This function was made because wunderground decided to shit the bed. This makes it function idependently of the API call. Foresight is not my strong suit.
 //
 //            $(document).ready(function(){
 //
 //            var x = JSON.parse(localStorage.getItem('id'))
 //
 //            var today = new Date();
 //            var dd = today.getDate();
 //            // var mm = today.getMonth()+1; //January is 0!
 //            if(dd<10) {
 //            dd='0'+dd
 //          }
 //          //  if(mm<10) {
 //          //    mm='0'+mm
 //          // }
 //          today = dd
 //          future= appointments[x].date;
 //          futureCompare = future.slice(3,5);
 //          console.log(futureCompare);
 //          futureNumber = parseInt(futureCompare);
 //          console.log(futureNumber);
 //          index= futureNumber-today
 //          $(".aptHeader").append(
 //            '<p class="aptName">' + appointments[x].description + '</p>'
 //            )
 //          console.log(index + "yes?");
 //        if (index >=0){
 //
 //        $(".aptContent").append(
 //          '<p class="dateTime">' + appointments[x].date + ' at <span class="time">' + appointments[x].time +
 //          '<p class="aptLocation">' + appointments[x].location + '</p>' + '<img class="map" src="http://i.imgur.com/OIotcym.png"/>' +
 //          '<div class="forcast"><p class="forcastDetails">' + '&#176F' + '</p></div>'
 //        );
 //        // console.log(json);
 //        }
 //        else {
 //
 //          $(".aptContent").append(
 //            '<p class="dateTime">' + appointments[x].date + ' at <span class="time">' + appointments[x].time +
 //            '<p class="aptLocation">' + appointments[x].location + '</p>' + '<img class="map" src="http://i.imgur.com/OIotcym.png"/>' +
 //            '<div class="forcast"><p class="forcastDetails" style= "font-size: 1em">' + "Too far in the future" + '</p></div>'
 //          );
 //
 //        }
 // });

    // console.log(appointments)
    // appointments = JSON.parse(localStorage.getItem('appointments'))

    // $(".aptContent").append(
    //   '<p class="dateTime">' + appointments[x].date + ' at <span class="time">' + appointments[x].time +
    //   '<p class="aptLocation">' + appointments[x].location + '</p>' + '<img class="map" src="http://i.imgur.com/OIotcym.png"/>' +
    //   '<div class="forcast"><p class="forcastDetails">' + json.forecast.simpleforecast.forecastday[index].high.fahrenheit + 'F' + '</p></div>'
    // )
    // console.log(idNumber);
  // });
  // $.ajax({
  //   dataType: 'json',
  //   url: "http://api.wunderground.com/api/35c9d364b4732721/forecast/q/CA/San_Francisco.json",
  //   method: "GET",
  // }).done(function(json){
  //   console.log(json)
  // });
