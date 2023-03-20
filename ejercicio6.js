var n = 3;

function parImpar(n){

    if(n%2 == 0){
        return "par";
    }else{
        return "impar";
    }
}

var res = parImpar(n);

console.log(res);