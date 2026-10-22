function calcularMedia (a,b,c){
    return (a+b+c)/3
}

function verificarAprovacao (resultado){
    if(resultado >= 7){
        alert("Parabéns, você foi aprovado!");
    }
    else if(resultado >= 5 && resultado < 7){
        alert("Você está de recuperação!");
    }
    else { 
        alert("Você está reprovado!");
    }
}

alert("Digite suas 3 notas e direi a média e se você está aprovado ou não");
let n1 = Number(prompt("Digite a primeira nota"));   
let n2 = Number(prompt("Digite a segunda nota"));
let n3 = Number(prompt("Digite a terceira nota"));

let resultado = calcularMedia(n1, n2, n3);
alert(calcularMedia(n1, n2, n3).toFixed(1));
verificarAprovacao(resultado);