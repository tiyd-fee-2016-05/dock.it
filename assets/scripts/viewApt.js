
  $(document).ready(function(){
    $.ajax({
      dataType: 'json',
      url: "http://api.wunderground.com/api/35c9d364b4732721/forecast10day/q/CA/San_Francisco.json",
      method: "GET",
    }).done(function(json){

          var x = JSON.parse(localStorage.getItem('id'))

          var today = new Date();
          var dd = today.getDate();
          // var mm = today.getMonth()+1; //January is 0!
          if(dd<10) {
          dd='0'+dd
        }
        //  if(mm<10) {
        //    mm='0'+mm
        // }
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
        '<div class="forcast"><p class="forcastDetails">' + json.forecast.simpleforecast.forecastday[index].high.fahrenheit + 'F' + '</p></div>'
      );
      console.log(json);
      }
      else {

        $(".aptContent").append(
          '<p class="dateTime">' + appointments[x].date + ' at <span class="time">' + appointments[x].time +
          '<p class="aptLocation">' + appointments[x].location + '</p>' + '<img class="map" src="http://i.imgur.com/OIotcym.png"/>' +
          '<div class="forcast"><p class="forcastDetails" style= "font-size: 1em">' + "Too far in the future" + '</p></div>'
        );

      }
    });
  });


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
