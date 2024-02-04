
//Generating Random no. Math.random()

console.log(Math.random() + ' - This is a Random No. Using Math.rendom()')

console.log('-----------------------------------------');

//Generating Random no. between 1 to 10 Using Math.floor() also in Math.random()

console.log( Math.floor(Math.random() * 10 + 1) + ' - This is a Random No. between 1 to 10 Using Math.floor() also in Math.random()')

console.log('-----------------------------------------');
//or
var number = 100 ;
console.log( Math.floor(Math.random() * number + 1) + ' - This is a Random No. between 1 to 100 Using Math.floor() also in Math.random()')

console.log('-----------------------------------------');
console.log('-----------------------------------------');

var startnumber = 10 ;
var endnumbar = 100;
var diffrence = endnumbar - startnumber ;
console.log( Math.floor(Math.random() * diffrence + startnumber+1) + ' - This is a Random No. between 10 to 100 Using Math.floor() and some calculation also in Math.random()')