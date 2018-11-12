window.onload = function intz(){
    var a = prompt("请输入出生年份"),
        b = prompt("请输入出生月份"),
        c = prompt("请输入出生日期"),
        mon = [],
        x = parseInt(a),
        y = parseInt(b),
        z = parseInt(c),
        sum = 0;
    if(a%100==0&&a%400==0){
        mon = [31,28,31,30,31,30,31,31,30,31,30,31];
    }else{
        mon = [31,29,31,30,31,30,31,31,30,31,30,31];
    }
    for(var i=0;i<y-1;i++){
        sum+=mon[i];
    }
    var sumz = sum+z;
    document.write("您的生日在"+x+"年是第"+sumz+"天");
}