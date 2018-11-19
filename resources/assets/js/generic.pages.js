

// FAZENDO COM QUE O BOTAO DE moveUp APARECA QUANDO O SCROLLY CHEGAR EM UM DETERMINADO PONTO
window.addEventListener('scroll', function(){
  const moveUpIcon = document.getElementById('moveUpIcon');

  // PEGANDO O TAMANHO DA JANELA (ESSA É UMA MANEIRA MAIS CONFIAVEL, DEVIDO A INCOMPATIBILIDADE DOS NAVEGADORES)
  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  const result = parseInt(scrollHeight - window.pageYOffset);

  if(result < 1116){
    moveUpIcon.style.bottom = '20px';
  }else if(result > 1409){
    moveUpIcon.style.bottom = '-100px';
  }
});

// ACAO PARA SUBIR AO CLICAR NO BATAO moveUpIcon
document.getElementById('moveUpIcon').addEventListener('click', function(){
  scrollTop(10)
});

function scrollTop(duration)
{
  setTimeout(function(){
    window.scrollTo(0, (window.pageYOffset - 10));
    if(window.pageYOffset == 0) return true;
    scrollTop();
  }, duration);
}



