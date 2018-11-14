window.onload = function sort1(){
    var input;
    var arr=[];
    while(input!="-1"){
        input=Number(prompt("请输入您想排序的数字"));
        //补充代码
        // arr[arr.length] = input;arr.length长度已经改变
        // arr.length+=1;
        arr.length++;
        arr[arr.length-1] = input;
        if(input ==-1){
            arr.length-=1;
            break;
        }
     }
    //补充代码
    arr.sort(function(a,b){return b-a}); //补充代码
    document.write(arr);
}