function tuofeng(str){
    var arr = str.split("-");
    var a = [arr[0]];
    for(var i = 1;i<arr.length;i++){
        a[i] = arr[i].charAt(0).toUpperCase()+arr[i].substr(1);
    }
    var b = a.join("");
    return b;
}
document.write(tuofeng("color-red"));