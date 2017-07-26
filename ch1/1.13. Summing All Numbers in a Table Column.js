/**
 * Created by baobaochu on 2017/07/26.
 */
var sum=0;
var cells=document.querySelectorAll("td:nth-of-type(2)");
for(var i=0;i<cells.length;i++){
    sum+=parseFloat(cells[i].firstChild.data);
}