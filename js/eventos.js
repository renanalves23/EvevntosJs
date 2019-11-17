

document.getElementById("click-me").onclick = () => {
  alert('Voce clicou em mim')
};

document.getElementById("hover-me").onmouseover = () => {
  alert('Passou sobre mim')
};

document.getElementById("leave-me").onmouseleave = () => {
  alert('Nao se vá')
}


document.onkeydown = () => {
  alert('Apertou a tecla: ' + event.keyCode);
};