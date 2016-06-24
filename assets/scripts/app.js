$(document).ready(function(){
  var appointments = JSON.parse(localStorage.getItem('appointments'))
  for(var i= 0; i < appointments.length ; i++)
  $(".content").append(
    '<div class="weather"><p class="time">' + appointments[i].time + '</p></div>' +
    '<div class="appointment"><div class="aptContent"><p class="aptTitle">' + appointments[i].description +'</p><p class="location">' + appointments[i].street + ' ' + appointments[i].location + '</p></div></div>'
  );

  console.log(appointments);
  console.log("hello");
});
$(".searchBox").keydown(function(){
  $(".searchBox").css("text-align" , "left");
  if ($(".searchBox").val() === "") {
    $(".searchBox").css("text-align", "right");
  }
});
$(".search").submit(function(e){
  e.preventDefault();
    console.log($(".searchBox").val());
    // console.log($(".aptTitle").val());
  if ($(".searchBox").val() === $(".aptTitle").text()){
    // console.log($(".searchBox").val());
    // console.log($(".aptTitle").val());
    console.log("This works");
  }
})
