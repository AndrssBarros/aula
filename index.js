
//Leia um valor e imprima os resultados: “É maior que 
//10” ou “Não é maior que 10” ou ainda “É igual a 10”
n = 12;
if (n>10){
console.log("Maior que 10");
}else{console.log("Menor que 10");}

//Some dois valores lidos e imprima o resultado
n = 1;
m = 5;
console.log(m+n);

//Leia 2 valores e a operação a ser realizada (+, -, * ou /) 
//e imprima o resultado (use um switch)
m = 8; n = 5;
var operacao = prompt("escolha uma operação"," ");
switch (operacao) {
case ('+'):
alert(m+n);
break; 
case ('-'):
alert(m-n);
break; 
case ('*'):
alert(m*n);        
break;
default:
alert("Escolha uma operação!");
break;
}

//Leia um nome e um valor n e imprima o nome n vezes usando o laço for
