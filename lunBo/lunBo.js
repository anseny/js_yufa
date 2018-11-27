function byId(id){
    return typeof(id)==="string"? document.getElementById(id):id;
}
var main = byId("main"),
    index = 0,
    timer = null,
    pics = byId("banner").getElementsByTagName("div"),
    spans = byId("dots").getElementsByTagName("span"),
    prev = byId("l"),
    next = byId("r");
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
    prev.onclick = function(){
        index--;
        if(index<0) index=pics.length-1;
        changeImg();
}
    next.onclick = function(){
        index++;
        if(index>=pics.length) index = 0;
        changeImg();
    }
    for(var d = 0;d<=spans.length;d++){
            spans[d].id = d;
            spans[d].onclick = function(){
                index = this.id;
                changeImg();
                //index= d;作用域改变
                //changeImg();
            }
        }
    //console.log(spans[index]);

}
function changeImg(){
    for(var i = 0;i<pics.length;i++){
        pics[i].style.display = "none";
        spans[i].className = "";
    }
    pics[index].style.display = "block";
    spans[index].className = "active";
}
