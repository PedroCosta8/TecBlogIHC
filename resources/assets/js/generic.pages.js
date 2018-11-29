

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

// PARA MOSTRAR O MENU DE NAVEGACAO QUANDO PASSAR O MOUVE E CLICAR
document.getElementById('hamburger-button').addEventListener('mouseover', navigatorMenuShow);
document.getElementById('hamburger-button').addEventListener('click', navigatorMenuShow);

function navigatorMenuShow()
{
  const navigatorMenuList = document.getElementById('navigator-menu-list');
  const hamburgerButton = this;

  // PRIMEIRO SPAN
  const spanOne = this.firstChild.nextSibling;
  // SEGUNDO SPAN
  const spanTwo = spanOne.nextElementSibling;
  // TERCEIRO SPAN
  const spanThree = spanTwo.nextElementSibling;

  // FAZENDO O X
  spanOne.style.margin = '0';
  spanOne.style.position = 'absolute';
  spanOne.style.transform = 'rotate(-45deg)';

  spanTwo.style.margin = '0';
  spanTwo.style.opacity = '0';

  spanThree.style.margin = '0';
  spanThree.style.position = 'absolute';
  spanThree.style.transform = 'rotate(45deg)';



  navigatorMenuList.style.transition = '0.5s';
  navigatorMenuList.style.transform = 'translateX(0)';
}

// PARA OCULTAR O MENU DE NAVEGACAO
document.body.addEventListener('click', function(event){
  // FAZER COM QUE O MENU NAO FECHA QUANDO CLICAR NO "HAMBURGER"
  if(event.target == document.getElementById('hamburger-button')) return false;

  const hamburgerButton = document.getElementById('hamburger-button');
  // PRIMEIRO SPAN
  const spanOne = hamburgerButton.firstChild.nextSibling;
  // SEGUNDO SPAN
  const spanTwo = spanOne.nextElementSibling;
  // TERCEIRO SPAN
  const spanThree = spanTwo.nextElementSibling;

  // REMOVENDO O X
  spanOne.style.margin = '2px 0';
  spanOne.style.position = 'relative';
  spanOne.style.transform = 'rotate(0)';

  spanTwo.style.margin = '2px 0';
  spanTwo.style.opacity = '1';

  spanThree.style.margin = '2px 0';
  spanThree.style.position = 'relative';
  spanThree.style.transform = 'rotate(0)';


  // OCULTANDO O MENU
  const navigatorMenuList = document.getElementById('navigator-menu-list');

  navigatorMenuList.style.transition = '0.5s';
  navigatorMenuList.style.transform = 'translateX(-1000px)';

});
