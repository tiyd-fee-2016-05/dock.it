$(".saveAptButton").click(function(e){
  // e.preventDefault();
  var dateJson = $(".textBoxDate").val()
  var timeJson = $(".textBoxTime").val()
  var descriptionJson = $(".textBoxTitle").val()
  var streetJson = $(".textBoxStreet").val()
  var locationJson = $(".textBoxCityState").val()

  var newApt = {
    date: dateJson,
    time: timeJson,
    description: descriptionJson,
    street: streetJson,
    location: locationJson
  }
  //this was inspired by stackoverflow here https://stackoverflow.com/questions/12162786/adding-new-objects-to-localstorage
  // once again stackoverflow is BAE
  var oldAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
  oldAppointments.push(newApt);
  localStorage.setItem('appointments', JSON.stringify(oldAppointments));
  console.log(newApt);


})



// var dateJson = $(".textBoxDate").val()
// var timeJson = $(".textBoxTime").val()
// var descriptionJson = $(".textBoxTitle").val()
// var streetJson = $(".textBoxStreet").val()
// var locationJson = $(".textBoxCityState").val()
//
// var newApt = {
//   date: dateJson,
//   time: timeJson,
//   description: descriptionJson,
//   street: streetJson,
//   location: locationJson
// }
// localStorage.setItem('appointments', JSON.stringify([{date: "7/05/15", time: "1:00", description: "Lunch with MB", street: "2612 Main st", location: "Pittsboro, NC"},{date:"6/30/15", time: "2:00", description: "Meet w/ Misty", street: "1212 Main St", location: "Durham, NC"}]))
