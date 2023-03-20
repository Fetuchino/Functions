var a = 4;
var b = 15;

function maximo (a, b){

    if(a>b){
        return a;
    }else if(b>a){
        return b;
    }else{
        return "igual";
    }
}

var res = maximo (a, b);

console.log(res);