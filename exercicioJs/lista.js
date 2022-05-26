/////////// QUESTÃO 1 /////////////
function cumprimentar (nome) {
    return ("Olá " + nome + "!")
}
console.log(cumprimentar("Thamyres")); 


/////////// QUESTÃO 2 /////////////
function converterIdadeEmAnosParaDias (idade){
    return (idade * 365)
}
console.log(converterIdadeEmAnosParaDias(20));


/////////// QUESTÃO 3 /////////////
//// ht - horas trabalhadas 
//// sh - valor por hora 
function salario(ht, vh){
    return(ht * vh)
}
console.log("Salário igual à " + salario(80, 14.5));


/////////// QUESTÃO 4 /////////////
function nomeDoMes(numMes){
    if (numMes == 1){
        return "Janeiro";
    } else if (numMes == 2){
        return "Fevereiro"; 
    } else if (numMes == 3){
        return "Março"; 
    }else if (numMes == 4){
        return "Abril"; 
    }else if (numMes == 5){
        return "Maio"; 
    }else if (numMes == 6){
        return "Junho"; 
    }else if (numMes == 7){
        return "Julho"; 
    }else if (numMes == 8){
        return "Agosto"; 
    }else if (numMes == 9){
        return "Setembro"; 
    }else if (numMes == 10){
        return "Outubro"; 
    }else if (numMes == 11){
        return "Novembro"; 
    }else if (numMes == 12){
        return "Dezembro"; 
    }
    else{
        return null;
    }
}
console.log(nomeDoMes(14));


/////////// QUESTÃO 5 /////////////
function maiorOuIgual(n1, n2) {
    if(n1 > n2){
        return true;
    } else {
        return false;
    }
}
console.log(maiorOuIgual(2, 2));


/////////// QUESTÃO 6 /////////////
function inverso(valor) {

    if (valor == false){
        return true;
    } else if (valor == true){
        return false;
    } else if (valor == Number){
        return -valor;
    }else{
        return null;
    }
}
console.log(inverso(2));


/////////// QUESTÃO 7 ///////////// 
function estaEntre(num, min, max, inclusivo = false) {
    if(inclusivo) 
    return num >= min && num <= max
    return num > min && num < max
}
console.log(estaEntre(10,100,50))


/////////// QUESTÃO 8 ///////////// 
function multiplicar(num1, num2) {
    let resultado = 0

    for(let i = 0; i < num2; i++){
        resultado += num1
        return resultado
    }
} 
console.log(multiplicar(5,5));


/////////// QUESTÃO 9 ///////////// 

function repetir(elemento, quantRepeticao) {
    let resultado = []
    for (let i = 0; i < quantRepeticao; i++)
    resultado.push(elemento)
    return resultado;

}
console.log(repetir("codigo", 3));


/////////// QUESTÃO 9 ///////////// 

/////////// QUESTÃO 10 ///////////// 
function rece



