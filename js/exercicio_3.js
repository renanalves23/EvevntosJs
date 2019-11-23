//EXERCICIO 1
/* 
1) Use a função para converter de Celsius para Fahrenheit feita no exercício 2. 
Só que desta vez, a temperatura em Celsius deve ser digitada pelo usuário no campo apropriado e 
o cálculo deve ser feito quando o botão "Calcular" for pressionado.

* Para pegar o valor do input de temperatura use .value em vez de .innerHTML
 */


function celToFar(cel) {
  let far = (cel * 9 / 5) + 32;
  return far;
  };

const botao_conv = document.getElementById("converter");
// var valor_input = document.getElementById('temp_celsius').value;

const btn_conv = botao_conv.onclick = () => {
  const celcius = parseFloat(document.getElementById('temp_celsius').value);
        let fahrenheit = celToFar(celcius); //função invocada
        document.getElementById("temp_fahr").innerHTML = "<strong>" + fahrenheit + "</strong>"
  };

  //EXERCICIO 2

/*   2) Solte dentro do elemento abaixo uma lista de todos os anos em que houve a Copa do Mundo de Futebol,
   desde 1930 até 2018. Lembre-se que a copa do mundo ocorre de 4 em 4 anos.
 */

//  const listaCopa = document.getElementById('anos_copa');
//zerar o textoo antes de colocar
document.getElementById('anos_copa').innerHTML = "";
//loop
    for(var i = 1930; i < 2018; i+=4){
      //document.getElementById('anos_copa').innerHTML += i; //nao esquecer do <li>
      document.getElementById('anos_copa').innerHTML += `<li> ${i} </li> `; //nao esquecer do <li>

 };

/*  3) Informe nos campos abaixo duas notas e o total de faltas do aluno e depois solte o resultado no local apropriado. 
 Sendo que:

    O aluno para ser aprovado precisa ter, no mínimo 70% de presença (o total de aulas é 20)
    
    O aluno para ser aprovado precisa ter média maior ou igual a 6.5
    
    Caso o aluno não seja aprovado, o programa precisa dizer se foi por motivo de média insuficiente,
 por faltas ou pelos dois motivos.
 */

 

//botao
const botaoCalcular = document.getElementById('calcular');

const btn_calc = botaoCalcular.onclick = () =>{
  //ao clicar no botao, vai pegar o valor passado nas notas
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  
  const media_notas = (nota1 + nota2) / 2;

  const num_faltas = parseFloat(document.getElementById('n_faltas').value);
  const presenca = (20 - num_faltas) / 20; //espera-se minimo de 0.7 para ser aprovado


var situacao;

    if(media_notas >= 6.5 && presenca >= 0.7) {
      //aprovado por ambos
      situacao = 'Aprovado plenamente!';
    }else if(media_notas < 6.5 && presenca <0.7) {
      //reprovado ambos 
      situação = 'Reprovado por faltas e por média!';
   }else if(media_notas < 6.5) {
      situacao = 'Reprovado pela nota'
   }else if(presenca < 0.7){
     situacao = 'Reprovado  por faltas'
   }
   document.getElementById('result').innerHTML = situacao;
 };

// const num_faltas = document.getElementById('n_faltas').value;
// document.getElementById('result').innerHTML = `Média igual a ${media}. Aprovado!`;

// id nota1   nota2   n_faltas  button id calcular
//resultado id result


