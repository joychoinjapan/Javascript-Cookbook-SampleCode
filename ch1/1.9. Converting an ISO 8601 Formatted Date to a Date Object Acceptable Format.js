/**
 * Created by baobaochu on 2017/07/26.
 */
var dtstr= "2014-3-04T19:35:32Z";
dtstr=dtstr.replace(/\D/g," ");
console.log(dtstr);
var dtcomps=dtstr.split(" ");
console.log(dtcomps);
dtcomps[1]--;
console.log(dtcomps);
var convdt=new Date(Date.UTC.apply(null,dtcomps));
console.log(convdt.toString());