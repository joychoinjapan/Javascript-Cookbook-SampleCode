/**
 * Created by baobaochu on 2017/07/26.
 */
//You want to accept an input string with first and last name, and swap the names so the last name is first.
var name="Abe Lincoln";
var re=/^(\w+)\s(\w+)$/;
var newname=name.replace(re,"$2 $1");
console.log(newname)