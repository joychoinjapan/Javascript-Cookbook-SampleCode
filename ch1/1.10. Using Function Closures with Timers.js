/**
 * Created by baobaochu on 2017/07/26.
 */
intervalId=setInterval(
    function () {
        x+=5;
        var left=x+"px";
        document.getElementById("redbox").style.left=left;
    },100
);