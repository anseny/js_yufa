window.onload = function intz(){
    var year1 = prompt("请输入出生年份"),
        month1 = prompt("请输入出生月份"),
        day1 = prompt("请输入出生日期");
        birthday(year1,month1,day1);    
}
function birthday(x,y,z){
    var sum = 0;
    var a = parseInt(x),
        b = parseInt(y),
        c = parseInt(z);
if(a%100==0&&a%400==0){    
    if(b==1){
        sum = c;
    }else if(b == 2){
        sum = 31+c;
    }else if(b == 3){
        sum = 31+28+c;
    }else if(b == 4){
        sum = 31+28+31+c;
    }else if(b == 5){
        sum = 31+28+31+30+c;
    }else if(b == 6){
        sum=31+28+31+30+31+c;
    }else if(b == 7){
        sum=31+28+31+30+31+30+c;
    }else if(b == 8){
        sum=31+28+31+30+31+30+31+c;
    }else if(b == 9){
        sum=31+28+31+30+31+30+31+31+c;
    }else if(b == 10){
        sum=31+28+31+30+31+30+31+31+30+c;
    }else if(b == 11){
        sum=31+28+31+30+31+30+31+31+30+31+c;
    }else if(b == 12){
        sum=31+28+31+30+31+30+31+31+30+31+30+c;
    }
}else{
    if(b==1){
        sum = c;
    }else if(b == 2){
        sum = 31+c;
    }else if(b == 3){
        sum = 31+29+c;
    }else if(b == 4){
        sum = 31+29+31+c;
    }else if(b == 5){
        sum = 31+29+31+30+c;
    }else if(b == 6){
        sum=31+29+31+30+31+c;
    }else if(b == 7){
        sum=31+29+31+30+31+30+c;
    }else if(b == 8){
        sum=31+29+31+30+31+30+31+c;
    }else if(b == 9){
        sum=31+29+31+30+31+30+31+31+c;
    }else if(b == 10){
        sum=31+29+31+30+31+30+31+31+30+c;
    }else if(b == 11){
        sum=31+29+31+30+31+30+31+31+30+31+c;
    }else if(b == 12){
        sum=31+29+31+30+31+30+31+31+30+31+30+c;
    }

}    
 return document.write("您的生日在"+a+"年是第"+sum+"天");;
}

