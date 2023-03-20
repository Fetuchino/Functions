var a = 4;
var b = 2;

function division(a, b){

    if(b == 0){
        return "indefinido";
    }else{
        return a/b;
    }
}

var res = division(a, b);

console.log(res);