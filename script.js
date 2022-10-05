

var currentDay = document.querySelector('#currentDay');
var container = document.querySelector('.container');

// Plain JS version of formatting and showing dates
// var date = new Date()
// var months = ["January", "February", "March", "April", 
// "May", "June", "July", "August", "September", "October", "November", "December"];
// let month = months[date.getMonth()];
// var dateStr = date.getDate() + ' ' + month + ' ' + date.getFullYear() 

// Moment show date
var curTime = moment()
//curTime.hour('11');
//curTime.minute('00');
// var mDateStr = mDate.format("D MMMM YYYY");


// console.log('     full date', date)
// console.log('formatted date', dateStr)
// console.log('   moment date', mDateStr)

// Set the day's date
currentDay.innerHTML = curTime.format('dddd, MMMM Do');
console.log('current date', currentDay.innerHTML);

// Set the day's table

// var setTime = moment();
// setTime.hour('09');
// setTime.minute('00');
// console.log('test time', setTime.format('HH:mm'))

// var newTime = moment().hour('11').minute('23')

// console.log('new time', newTime.format('HH:mm'))

for (var setTime = moment().hour('09').minute('00'); 
  setTime <= moment().hour('17').minute('00'); 
  setTime.add(1, 'h')) {


    console.log(setTime.format('HH:mm'))
    console.log('just the hour:', setTime.hour());
/*
  // Set am/pm value
var ampm = 'am'
if (setTime >= 12) {
  ampm = 'pm'; 
} 
*/

// set past present and future
var className = '';
if (setTime.hour() < curTime.hour()) {
  
  console.log(setTime + '<' + curTime)
  className = 'past';
} else if (setTime.hour() == curTime.hour()){
  className = 'present';
} 
else {
  className = 'future'
}

  

// var str = 'current time' + curTime + ' = 15:00';
// var str = 'current "setTime = ' + curTime + ':00"';


var row = '<div class="row">' + 
        '<div class="col-1 hour">' +
        setTime.format('ha') + 
        '</div>' +
        '<div class= "col-10 description ' + className + '">' +
          'description' +
        '</div>' +
        ' <div class="col-1 saveBtn">' +
          '<i class="fa-solid fa-lock"></i>' +
        '</div>' +
      '</div>';

container.innerHTML = container.innerHTML + row
}






