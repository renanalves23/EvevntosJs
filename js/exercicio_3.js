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

 


