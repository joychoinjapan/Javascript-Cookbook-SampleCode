/**
 * Created by baobaochu on 2017/07/26.
 */
//replace 正则表达式
var searchString = "Now is the time, this is the tame";
var re=/t\w{2}e/g;
var replacement=searchString.replace(re,"place");
console.log(replacement);