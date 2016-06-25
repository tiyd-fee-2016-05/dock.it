appointments = JSON.parse(localStorage.getItem('appointments'));
var sortedAppointments = appointments.sort(function(a,b){
  appointments = JSON.parse(localStorage.getItem('appointments'));
  keyA= new Date (a.date);    // inspired by bae at stackoverflow
  keyB= new Date (b.date);    //http://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value
  return keyA-keyB;
});
localStorage.setItem('appointments', JSON.stringify(sortedAppointments))
// console.log(appointments.date[i]);
 console.log(sortedAppointments)
var idNumber = 0
$(document).ready(function(){
  appointments = JSON.parse(localStorage.getItem('appointments'));
  // console.log(JSON.parse(localStorage.getItem('appointments').date));


  for(var i= 0; i < appointments.length ; i++)
  $(".content").append(
    '<a href="viewApt.html"><div class="weather" id="' + i + '"><p class="time">' + appointments[i].time + '</p></div>' +
    '<div class="appointment" id="'+ i +'"><div class="aptContent" id="'+ i +'"><p class="aptTitle">' + appointments[i].description +'</p><p class="location">' + appointments[i].street + ' ' + appointments[i].location + '</p></div></div></a>'
  );
  // for(var z= 0; z < appointments.length ; z++)
  // console.log(appointments[z].time);
  $(".appointment").click(function(){
    idNumber = $(this).attr('id');
    localStorage.setItem('id', idNumber);
    console.log(idNumber);


  });
  console.log(appointments);
  console.log("hello");
});
$(".searchBox").keydown(function(){
  $(".searchBox").css("text-align" , "left");
  if ($(".searchBox").val() === "") {
    $(".searchBox").css("text-align", "right");
    $(".content").html("");
    for(var i= 0; i < appointments.length ; i++)
    $(".content").append(
      '<div class="weather" id="' + i + '"><p class="time">' + appointments[i].time + '</p></div>' +
      '<div class="appointment" id="'+ i +'"><div class="aptContent" id="'+ i +'"><p class="aptTitle">' + appointments[i].description +'</p><p class="location">' + appointments[i].street + ' ' + appointments[i].location + '</p></div></div>'
    );
  }
});
// for (var x = 0; x <= 4; x++)
//
// console.log(x);

$(".search").submit(function(e){
  e.preventDefault();
    console.log($(".searchBox").val());
     console.log($(".aptTitle").val());
    // var index = 0
    // for (var x = 0; x < 4; x++)
    // var index = index[x];
    var compare = JSON.parse(localStorage.getItem('appointments'))
    for (var x = 0; x < compare.length; x++)
    // console.log(idNumber);

    // console.log(compare);
    // console.log(x);
    // console.log(document.getElementById(x.stringify()));
  if ($(".searchBox").val() === compare[x].description){
    console.log(compare[x]);
    $(".content").html("")
    $(".content").append(
      '<div class="weather" id="' + x + '"><p class="time">' + compare[x].time + '</p></div>' +
      '<div class="appointment" id="'+ x +'"><div class="aptContent" id="'+ x +'"><p class="aptTitle">' + compare[x].description +'</p><p class="location">' + compare[x].street + ' ' + compare[x].location + '</p></div></div>'
    );


    console.log("This works");
  }
})
