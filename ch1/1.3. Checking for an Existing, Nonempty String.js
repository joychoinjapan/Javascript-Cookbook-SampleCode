/**
 * Created by baobaochu on 2017/07/25.
 */

//typeof gogo ==="string" 保证是否是字符串
var gogo="";
if(typeof gogo ==="string"&& gogo.length>0){
    console.log("true");
}else {
    console.log("false");
}

//测试是否为空字符串
var strFromFormElement="";
if(strFromFormElement.length===0){
    console.log("是空字符串");
}

//以下情况是等价的
//if(counter==100)
//if (parseInt(counter)===100)
