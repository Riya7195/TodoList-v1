//jshint esversion:6
function getDate(){
  var today = new Date();
var options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
};
var day = today.toLocaleString('en-Us', options);
return day;
}
function getDay(){
  var today = new Date();
var options = {
  weekday: 'long',
};
var day = today.toLocaleString('en-Us', options);
return day;
}
module.exports ={
   getDate: getDate,
   getDay: getDay
 };
