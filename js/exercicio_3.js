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


