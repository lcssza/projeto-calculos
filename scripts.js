let numero1 = prompt('Digite o número um')
let numero2 = prompt('Digite o número dois')

alert('A soma dos dois números é: ' + (Number(numero1) + (Number(numero2))))
alert('A subtração dos dois números é: ' + (Number(numero1) - (Number(numero2))))
alert('A multiplicação dos dois números é: ' + (Number(numero1) * (Number(numero2))))
alert('A divisão dos dois números é: ' + (Number(numero1) / (Number(numero2))))
alert('O resto da divisão dos dois números é: ' + (Number(numero1) % (Number(numero2))))

var soma = (Number(numero1) + (Number(numero2)))
var resto = soma % 2;

if (resto == 0) {
    alert(soma + " é par");
} else {
    alert(soma + " é impar");
}

if(numero1 == numero2) {
    alert('Os números  inseridos são iguais')
}else{
    alert('Os números inseridos são diferentes')
}