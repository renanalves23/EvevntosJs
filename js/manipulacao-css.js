
/* 
document.getElementById("botao_cor").onclick = () => {
  document.getElementById("botao_cor").style['background-color'] = "purple";
  //mover para direita
        //document.getElementById("botao_cor").style['margin-left'] += '30px';
            //ou
  document.getElementById("botao_cor").style.transform = 'translateX(100px)';
};
 */
//SIMPLIFICANDO

var botao = document.getElementById("botao_cor");
      botao.onclick = () => {
         botao.style['background-color'] = "purple";
  //mover para direita
        //document.getElementById("botao_cor").style['margin-left'] += '30px';
            //ou
          botao.style.transform = 'translateX(100px)';
};
