
 

 //FORLOOP

 var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

for(let i = 0; i < alunos.length; i++){
 // console.log(alunos[i])
}


//FOR IN

var carro = {
  'Ano': 2018,
  'Modelo': 'Fox',
  'Cilindradas': '1.8',
  'Combustível': 'Gasolina'
};

for (let prop in carro) {
  console.log(`${prop} : ${carro[prop]}`)
}


//EXEMPLO DA AULA ANTERIOR PARA FAZER LOOP

  const elementos = document.getElementsByClassName("exemplo") //array com 3 elementos

  for(j = 0; j < elementos.length; j++){
    elementos[j].style.color = "orange";
    elementos[j].style['font-weight'] = "bold";
  }

  const elementos2 = document.getElementsByTagName("p") 

  for(j = 0; j < elementos2.length; j++){
    elementos2[j].style.color = "orange";
    elementos2[j].style['font-weight'] = "bold";
  };

  




