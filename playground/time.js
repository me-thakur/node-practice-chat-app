var moment = require('moment');

var date = moment();
// date.add(1, 'year').subtract(11, 'months');
// console.log(date.format('YYYY-Do-MMM'));

// console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp)

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
