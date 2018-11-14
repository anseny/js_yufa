window.onload = function sort2(){
    var input;
    var arr=[];
    while(input!="-1"){
        input=Number(prompt("请输入您想排序的数字"));
        arr.push(input);
        if(input==-1){
            arr.length-=1;
            break;
        }
    }
    arr.sort(function(a,b){return b-a}); //补充代码
    document.write(arr);
}