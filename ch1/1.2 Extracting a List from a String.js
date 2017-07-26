/**
 * Created by baobaochu on 2017/07/25.
 */
//Before:
//This is a list of items: cherries, limes, oranges, apples.
// After:['cherries','limes','oranges','apples']


var sentence="This is a list of items: cherries, limes, oranges, apples.";
var start=sentence.indexOf(":");
var end=sentence.indexOf(".",start+1);
console.log(end);
var listStr=sentence.substring(start+1,end);
console.log(listStr);
var fruits=listStr.split(",");
console.log(fruits);

//The trim() method removes whitespace from both ends of a string.
fruits.forEach(function (element, index, array) {
    array[index]=element.trim();
});

console.log(fruits);


//method chaining
var start=sentence.indexOf(":");
var end=sentence.indexOf(".",start+1);
var fruits=sentence.substring(start+1,end).split(",");
console.log(fruits)
