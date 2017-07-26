/**
 * Created by baobaochu on 2017/07/25.
 */
//literal: string (String), floating-point number (Number), or boolean (Boolean)

//primitive:String, Number, Boolean, null, and undefined
var str1="this is a simple string";
console.log(str1.length+" "+str1);


var str1=String("this is a simple string111");
var num1=Number(1.45);
var bool1=Boolean(true);

console.log(str1,num1,bool1);



var str1 = "this is a simple string"; // the quoted string is the literal
var num1 = 1.45; // the value of 1.45 is the literal
var answer = true; // the values of true and false are boolean literals

var str1 = String("this is a simple string"); // primitive string
var num1 = Number(1.45); // primitive number
var bool1 = Boolean(true); // primitive boolean

var str2 = new String("this is a simple string"); // String object instance
var num2 = new Number(1.45); // Number object instance
var bool2 = new Boolean(true); // primitive boolean

var str1 = String("string");
var num1 = Number(1.45);
var bool1 = Boolean(true);

if (str1 === "string") { console.log('equal');
}
if (num1 === 1.45) { console.log('equal');
}
if (bool1 === true) { console.log('equal');
}
var str2 = new String("string");
var num2 = new Number(1.45);
var bool2 = new Boolean(true);
if (str2 === "string") { console.log('equal');
}else{
    console.log('not equal');
}
if (num2 === 1.45) { console.log('equal');
}else{
    console.log('not equal');
}
if (bool2 === true) { console.log('equal');
}else{
    console.log('not equal');
}
