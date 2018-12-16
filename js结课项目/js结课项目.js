function getId(id){
    return typeof(id)==="string"? document.getElementById(id):id;
}
var index = 0,
    timer = null,
    pics = getId("banner").getElementsByTagName("div"),
    len = pics.length,
    prev = getId("prev"),
    back = getId("back"),
    spans = getId("circle").getElementsByTagName("span");
window.onload = function main(){
    getId("header").onmouseover = function(){
        if(timer) clearInterval(timer);
    }
    getId("header").onmouseout =function(){
        timer = setInterval(function(){
            index++;
           if(index>=len){
               index = 0;
           } 
           changeImage();
        },3000)
    }
        for(var d = 0;d<len;d++){
            spans[d].id = d;
            spans[d].onclick = function(){
                index = parseInt(this.id);
                changeImage();
            }
        }
        getId("header").onmouseout();
        prev.onclick = function(){
            index++;
            if(index>=len){
                index = 0;

            }
            changeImage();
        }
        back.onclick = function(){
            index--;
            if(index<0){
                index = len-1;

            }
            changeImage();
        }
}
    function changeImage(){
        for(var i = 0;i<len;i++){
            pics[i].style.display = "none";
            spans[i].className = "";
        }
        pics[index].style.display = "block";
        spans[index].className= "active";
    }
