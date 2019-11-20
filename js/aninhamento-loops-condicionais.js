/* Digamos que um formulário receba duas informações sobre uma pessoa: a idade e se ela é ou não sócia de um clube. 
Baseado nestas informações, temos que apresentar o preço de um evento para este perfil. 

Temos 4 faixas de preço:

Sócios: Grátis
Não sócios menores de 18 anos: R$ 6,00
Não sócios maiores de 18 maiores de 18 anos: R$ 12,00
Maiores de 65 anos: Grátis


Vamos primeiro abrir um condicional para testar se é sócio ou a idade é superior a 65 anos, 
se o teste retornar positivo, o ingresso é grátis. Senão, chegamos à situação de não sócios menores de 65 anos. 
Mas dentro desta condição ainda temos preços diferentes para maiores e menores de 18 anos, portanto 
teremos que aninhar um condicional. */

const socio = false;
const idade = 66;

//Vamos primeiro abrir um condicional para testar se é sócio ou a idade é superior a 65 anos

if(socio == true || idade >= 65) {
  console.log('O ingresso é grátis');
}else if (idade >= 18) { 
  //Senão, chegamos à situação de não sócios menores de 65 anos.
          //maiores de 18
  console.log("O ingresso custa: R$ 12,00")
 }else{
    console.log('O ingresso custa: R$ 6,00')
 }


/* 
 Aninhamento de Loops
Muitas vezes é comum ter que usar loops aninhados. Quando queremos percorrer os elementos de um array ou de um objeto,
usamos um loop. Mas caso algum elemento deste array/objeto seja também um array ou objeto,
 teremos que aninhar outro loop para percorrer seus elementos.

Como exemplo, temos uma lista de funcionários. Cada funcionário é um objeto com algumas propriedades. 
Uma destas propriedades é a lista de filhos. Para criar uma lista de filhos de funcionários, 
precisamos aninhar dois loops:

 */




 var funcionarios = [
        
  {
      'nome': 'Carlos Henrique da Silva',
      'idade': 45,
      'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
      
  },

  {
      'nome': 'Maria Helena Pereira',
      'idade': 32,
      'filhos': ['João Pedro Pereira de Souza']
      
  },

  {
      'nome': 'José Feliciano Maia',
      'idade': 39,
      'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
      
  }

];

const list_elements = document.getElementById("filhos"); // é um ul que será acrescentada li depois
//list_elements.innerHTML = "";


for(let i = 0; i < funcionarios.length; i++) {
  //cria variavel para receber os filhos dos funcionários
  var lista_filhos = funcionarios[i].filhos;
  console.log(lista_filhos) //retornou array
    //loop para percorrer o array lista_filhos recem criado
    for(let j = 0; j < lista_filhos.length; j++){
      //adentrar a ul que foi colocada na variavel list_elements
      list_elements.innerHTML += `<li> ${lista_filhos[j]} </li>`
      list_elements.innerHTML += `<li> ${lista_filhos[j]} Filho de: ${funcionarios[i].nome} </li>`

     // list_elements.innerHTML += '<li>' + lista_filhos[j] + '</li>';
      //list_elements.innerHTML += '<li>' + lista_filhos[j] + '-- Filho de: ' + funcionarios[i].nome + '</li>';
    }

}


/* 

for(let i = 0; i < funcionarios.length; i++){

  if(funcionarios[i].filhos){ //colocar esse if evita que quando algum funcionário nao tiver filho, nao dê erro.
//somente entra no loop se tiver filho
    let lista_filhos = funcionarios[i].filhos;
    
    //console.log(lista_filhos)
 
    
     
     for(let j = 0; j < lista_filhos.length; j++){
         list_elements.innerHTML += '<li>' + lista_filhos[j] + ' - Filho(a) de ' + funcionarios[i].nome + '</li>';
   }

  }
  
}
 */