var nota = 86;

function calificacion(nota){
    if(100 > nota >= 90){
        return "A";
    }else if(90 > nota >= 80){
        return "B";
    }else if(80 > nota >= 70){
        return "C";
    }else if(70 > nota >= 60){
        return "D";
    }else if(60 > nota){
        return "F";
    }else{
        return "Calificación no valida"
    }
}

var res = calificacion(nota);

console.log(res);