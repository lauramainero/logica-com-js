alert('Bem-vindo ao jogo do Número Secreto! :-D');
let numeroMax = 100;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
let numeroChute;
let tentativas = 1;

while (numeroChute != numeroSecreto) {
    numeroChute = prompt(`Escolha um número entre 1 e ${numeroMax}`);

    if (numeroChute == numeroSecreto) {
        break
    } else {
        if (numeroChute > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroChute}! :-|`);
        } else {
            alert(`O número secreto é maior que ${numeroChute}! :-|`);
        }
    }

    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} :-)`);