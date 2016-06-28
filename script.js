/**
 * Created by xiexin on 16/6/26.
 */
var con = document.getElementById('con');
var con1 = document.getElementById('con1');
var con2 = document.getElementById('con2');
con2.innerHTML = con1.innerHTML;
function scrollUp() {
    if(con.scrollTop >= con1.offsetHeight){
        con.scrollTop = 0;
    }
    else {
        con.scrollTop++;
    }
}
var time = 50;
var myScroll = setInterval('scrollUp()',time);