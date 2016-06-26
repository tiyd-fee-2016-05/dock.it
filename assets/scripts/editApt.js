//populate page with info
appointments = JSON.parse(localStorage.getItem('appointments'));
var x = JSON.parse(localStorage.getItem('id'));
$(".textBoxTitle").val(appointments[x].description);
$(".textBoxStreet").val(appointments[x].street);
$(".textBoxCityState").val(appointments[x].location);
$(".textBoxDate").val(appointments[x].date);
$(".textBoxTime").val(appointments[x].time);
console.log(appointments);
console.log(x);

$(document).ready(function(){
  appointments = JSON.parse(localStorage.getItem('appointments'));

  // if (x > -1) {
  //   appointments.splice(x, 1);  //inspired by http://stackoverflow.com/questions/5767325/remove-a-particular-element-from-an-array-in-javascript
  // }

  // localStorage.setItem('appointments', JSON.stringify(appointments));
  console.log(appointments);

})
$(".saveButton").click(function(e){
    // e.preventDefault(e);
    // e.preventDefault();
    appointments = JSON.parse(localStorage.getItem('appointments'));
    appointments.splice(x, 1);
    var dateJson = $(".textBoxDate").val()
    var timeJson = $(".textBoxTime").val()
    var descriptionJson = $(".textBoxTitle").val()
    var streetJson = $(".textBoxStreet").val()
    var locationJson = $(".textBoxCityState").val()

    var editApt = {
      date: dateJson,
      time: timeJson,
      description: descriptionJson,
      street: streetJson,
      location: locationJson
    }
  //inspired by http://stackoverflow.com/questions/5767325/remove-a-particular-element-from-an-array-in-javascript
    //this was inspired by stackoverflow here https://stackoverflow.com/questions/12162786/adding-new-objects-to-localstorage
    // once again stackoverflow is BAE
    console.log(appointments)
    var oldAppointments = appointments || [];
    oldAppointments.push(editApt);
    localStorage.setItem('appointments', JSON.stringify(oldAppointments));
    console.log(editApt)
    console.log(oldAppointments);
  })
// var backCount = 0
// $(".v").click(function(e){
//   //e.preventDefault(e);
//   backCount ++;
//   console.log(backCount);
//   if (backCount === 1){
//     e.preventDefault(e);
//     console.log(backCount);
//     alert("This will delete this appointment!!!");
//     // count ++
//   }
//   else if (x > -1 && backCount > 1) {
//     appointments.splice(x, 1);  //inspired by http://stackoverflow.com/questions/5767325/remove-a-particular-element-from-an-array-in-javascript
//     backCount = 0;
//     localStorage.setItem('appointments', JSON.stringify(appointments));
//     console.log(appointments);
//   }
// })
var count = 0
$(".deleteButton").click(function(e){
  // e.preventDefault(e);
  count ++;
  console.log(count);
  if (count === 1){
    e.preventDefault(e);
    console.log(count);
    alert("This will delete this appointment!!!");
    // count ++
  }
  else if (x > -1 && count > 1) {
    appointments.splice(x, 1);  //inspired by http://stackoverflow.com/questions/5767325/remove-a-particular-element-from-an-array-in-javascript
    count = 0;
    localStorage.setItem('appointments', JSON.stringify(appointments));
    console.log(appointments);
  }
})
