var edad = 35;

function clasificar(edad){

    if(edad < 13){
        return "niño";
    }else if(13 <= edad < 18){
        return "adolescente";
    }else if(18 <= edad <= 64){
        return "adulto";
    }else{
        return "mayor";
    }
}

var res = clasificar(edad);

console.log(res);