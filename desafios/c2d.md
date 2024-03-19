# Desafios do capítulo 2

## Desafio 1
Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

```Javascript
let diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}
```

## Desafio 2
Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

```Javascript
let numero = prompt('Digite um número inteiro');
if (numero > 0) {
    alert('O número é positivo.');
} else {
    alert('O número é negativo');
}
```

## Desafio 3
Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

```Javascript
let pontuacao = 120;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}
```

## Desafio 4
Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

```Javascript
let saldo = 560;
alert(`O saldo da conta é de R$${saldo}`);
```

## Desafio 5
Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

```Javascript
let nome = prompt('Qual é o seu nome?');
alert(`Boas vindas, ${nome}!`);
```