function somar(n1, n2) {

    if (isNaN(n1) || isNaN(n2)) {
        return alert("um dos numeros digitados invalidado")
    }

    else {
        return (n1 + n2)
    }
}

let n1 = Number(prompt("Digite o primeiro numero"))

let n2 = Number(prompt("Digite o segundo numero"))

alert(somar(n1, n2))

// // //

function subtrair(n3, n4) {

    if (isNaN(n3) || isNaN(n4)) {
        return alert("um dos numeros digitados invalidado")
    }

    else {
        return (n3 - n4)
    }
}

let n3 = Number(prompt("Digite o primeiro numero"))

let n4 = Number(prompt("Digite o segundo numero"))

alert(subtrair(n3, n4))

// // //

function multiplicar(n5, n6) {

    if (isNaN(n5) || isNaN(n6)) {
        return alert("um dos numeros digitados invalidado ou igual a 0")
    }

    else {
        return (n5 * n6)
    }
}

let n5 = Number(prompt("Digite o primeiro numero"))

let n6 = Number(prompt("Digite o segundo numero"))

alert(multiplicar(n5, n6))

// // //

function dividir(n7, n8) {

    if (isNaN(n7) || isNaN(n8)) {
        return alert("um dos numeros digitados invalidado")
    }

    else {
        return (n7 / n8)
    }
}

let n7 = Number(prompt("Digite o primeiro numero"))

let n8 = Number(prompt("Digite o segundo numero"))

alert(dividir(n7, n8))

// // //