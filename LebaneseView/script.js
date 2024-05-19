
var cityNum=12;

document.addEventListener("DOMContentLoaded",function(){
    var links= new Array(cityNum);
    for(i=1;i<=cityNum;i++) links[i-1]=document.getElementById("linkButton"+i);
    links[1-1].href="https://www.booking.com/Share-QOPQPa";
    links[2-1].href="https://www.booking.com/Share-6wd4NQt";
    links[3-1].href="https://www.booking.com/Share-5LJEE4c";
    links[4-1].href="https://www.booking.com/Share-KDibCC";
    links[5-1].href="https://www.booking.com/Share-yyyXPJ";
    links[6-1].href="https://www.booking.com/Share-aqocSYF";
    links[7-1].href="https://www.booking.com/Share-vAYlmy";
    links[8-1].href="https://www.booking.com/Share-fZagZg";
    links[9-1].href="https://www.booking.com/Share-xpDTS5";
    links[10-1].href="https://www.booking.com/Share-AbB7dJb";
    links[11-1].href="https://www.booking.com/Share-7RhG1j";
    links[12-1].href="https://www.booking.com/Share-7zcTpI";

    var arab=document.getElementsByClassName("Arab");
    var eng=document.getElementsByClassName("Eng");
    for(var i=0;i<arab.length;i++) arab[i].style.display="block";
    for(var i=0;i<eng.length;i++) eng[i].style.display="none";

    scrollToTop();
});


function resetAllBut(place){
    for(var i=0; i<=cityNum; i++){
        if(i==place) {
            document.getElementById("info"+i).style.display="block";
            continue;
        }
        if(i==0){
            document.getElementById("info-defualt").style.display="none";
            continue;
        }
        document.getElementById("info"+i).style.display="none";
    }
}

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function langSwitch(lang){
    var arab=document.getElementsByClassName("Arab");
    var eng=document.getElementsByClassName("Eng");
    if((lang=="Eng" && eng[0].style.display=="none") || (lang=="Arab" && arab[0].style.display=="none")){
        document.getElementById("header").style.animation="expand 3s 1 forwards ease";
        var qoute=document.getElementsByClassName("qoute");
        for(var i=0;i<qoute.length;i++) qoute[i].style.animation="qoute-disappear 1s 3s 1 forwards ease";
        setTimeout(function(){
            switch(lang){
                case "Eng":
                    for(var i=0;i<arab.length;i++) arab[i].style.display="none";
                    for(var i=0;i<eng.length;i++) eng[i].style.display="block";
                    break;
                case "Arab":
                default:
                    for(var i=0;i<eng.length;i++) eng[i].style.display="none";
                    for(var i=0;i<arab.length;i++) arab[i].style.display="block";
                    break;
            }
            for(var i=0;i<qoute.length;i++) qoute[i].style.animation="qoute-appear 1s 1 forwards ease";
            document.getElementById("header").style.animation="shrink 3s 2s 1 forwards ease";
        },5000);
    }
}
