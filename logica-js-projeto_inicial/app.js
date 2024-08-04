alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 10;
let numeroSecreto = parseInt (Math.random()* numeroMaximo + 1);
console.log (numeroSecreto);
let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}, bora jogar?`);
let chute;
let tentativas = 1;
while (chute != numeroSecreto) {
        chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
        // se chute for igual ao número secreto
    if (chute == numeroSecreto) { 
            break;
    } else 
        if (chute > numeroSecreto) {
                alert(` Que pena ${nome}, o nosso número secreto é menor que ${chute}. Vamos tentar novamente? `);
    } else {
            alert(` Que pena ${nome}, o nosso número secreto é maior que ${chute}. Vamos tentar novamente? `);
    }
    //tentativas = tentativas + 1;
    tentativas++
}
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`Isso aí ${nome}, descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!!! Parabéns!!!`);




//if (tentativas > 1){
//alert(`Isso aí ${nome}, descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!!! Parabéns!!!`);
//} else {
//    alert(`Isso aí ${nome}, descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!!! Parabéns!!!`);
//}
// passar uma mensagem para a pessoa - vamos escrever em inglês
//precisamos que o código se lembre da informação, para ser um jogo justo, para isso usamos as variáveis.
//como fazer essa pergunta aqui dentro?
//let chute = prompt ('Escolha um número entre 1 e 30'); deixa de existir quando queremos que  chute seja em looping até ter a resposata certa.
//será que o jogo já está funcionando? Sempre teste os erros, simule caminhos para ver o que pode estar errado.
// existe um comando para comparação, de condição
// se o número for igual ao número secreto 
//while para looping enquanto não acertar.
// != significa diferença
// o uso deste acoplamento ${} auxilia na hora da dinamização do código
// o app é muito intuitivo e te mostra os erros quando você está programando de forma clara
// cadê o console.log que é o lugar secreto para verificar, apertamos com o botão esquerdo na tela do navegador e procura pelo console.
// agora vamos pensar na condição e mostrar a pessoa o que ela está vendo
//caso o número não seja o correto, precisamos usar um código diferente
//vamos dar dicas para o nosso usuário
//para manter o looping ate que acertemos o valor, podemos usar a ag WHILE que significa enquanto em inglês. Essa tag tem uma estrutura muito parecida com o if.
// adicionar o número de tentativas enão vamos colocar uma variável de tentativas
//para atribuir mais 1: ++
// break pode ser usado mas para dar certo, temos que tirar a parte do acerto do while
//operador ternário
//para fazer números aleatórios parseInt -para tirar os números decimais (Math.random() - cria números de 0 a 9* 100 + 1- para criar o número 100);