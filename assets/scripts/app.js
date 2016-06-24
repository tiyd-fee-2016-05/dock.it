$(document).ready(function(){
  var appointments = JSON.parse(localStorage.getItem('appointments'))
  $(".content").append(
    '<div class="weather"><p class="time">' + appointments[0].time + '</p></div>' +
    '<div class="appointment"><div class="aptContent"><p class="aptTitle">' + appointments[0].description +'</p><p class="location">' + appointments[0].street + ' ' + appointments[0].location + '</p></div></div>'
  );
  $(".content").append(
    '<div class="weather"><p class="time">' + appointments[1].time + '</p></div>' +
    '<div class="appointment"><div class="aptContent"><p class="aptTitle">' + appointments[1].description +'</p><p class="location">' + appointments[1].street + ' ' + appointments[1].location + '</p></div></div>'
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
    console.log($(".aptTitle").val());
  if ($(".searchBox").val() === $(".aptTitle").text()){
    // console.log($(".searchBox").val());
    // console.log($(".aptTitle").val());
    console.log("This works");
  }
})
