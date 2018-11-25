function byId(id){
    return typeof(id)==="string"? document.getElementById(id):id;
}
var main = byId("main"),
index = 0,
timer = null,
pics = byId("banner").getElementsByTagName("div");  
window.onload = function slideImg(){ 
    main.onmouseover = function(){
        if(timer){
            clearInterval(timer);
        }
    }
    main.onmouseout = function(){
        timer = setInterval(function(){
            index++;
            if(index>=pics.length){
                index=0;
            }
            changeImg();
        },3000) 
    }
    main.onmouseout();
}
function changeImg(){
    for(var i = 0;i<pics.length;i++){
        pics[i].style.display = "none";
    }
    pics[index].style.display = "block";
}