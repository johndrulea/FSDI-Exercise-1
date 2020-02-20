var numbers = [1,2,3,4,5,6,7,8,9];
var sum = 0;

for( var i=0; i<numbers.length; i++){
    sum += numbers[i];
}

var average = sum/numbers.length;


for( var i=0; i<=numbers.length; i++){
    sum += numbers[i];
alert("Hello " + i);
}

alert("Alert!  The average is:  " + average);