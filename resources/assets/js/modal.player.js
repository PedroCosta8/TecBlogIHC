/*
  ESSE ARQUIVO FAZ COM QUE SEJA CARREGADO VIDEO DINAMICAMENTE DENTRO DO MODAL
*/


// PEGANDO OS ELEMENTOS COM A CLASSE ESPECIFICADA
let elements = document.getElementsByClassName('initPlayVideo');
let elementClose = document.getElementById('modalPlayerClose');

// ADICIONANDO O EVENTO PARA CADA ELEMENTO
for(let i = 0; i < elements.length; i++){
  elements[i].addEventListener('click', showModal, false);
}


// ADICIONANDO A FUNCAO DE FECHAR O VIDEO
elementClose.addEventListener('click', function(){

  const modalPlayer = document.getElementById('modalPlayer');
  let modalPlayerCenter;
  //LIBERANDO SCROLL
  document.body.style.overflowY = 'scroll';

  // OCULTAR O MODAL
  modalPlayer.style.top = '-1500px';
  

  // PROCURAR O FILHO QUE CONTEM A CLASSE ESPECIFICA
  for(let i = 0; i < modalPlayer.childNodes.length; i++){
    if(modalPlayer.childNodes[i].className == 'modalPlayerCenter'){
      modalPlayerCenter = modalPlayer.childNodes[i];
    }
  }

  // PAUSANDO O VIDEO E REMOVER PARA NAO CONTINUAR O CARREGAMENTO
  if(modalPlayerCenter != undefined){
    // PAUSANDO
    modalPlayerCenter.childNodes[1].pause();
    
    setTimeout(function(){
      // ACESSANDO A TAG SOURCE E REMOVENDO O SRC link
      modalPlayerCenter.childNodes[1].firstChild.nextSibling.setAttribute('src', '');
      // FORCANDO UM LOAD NA TAG video PARA PERCEBER O source COM src VAZIO
      modalPlayerCenter.childNodes[1].load();
    }, 300);
  }
});



// EXIBIR O MODAL COM O VIDEO ESPECIFICADO NO data-video
function showModal(event)
{
  event.preventDefault();
  //BLOQUEANDO SCROLL
  document.body.style.overflowY = 'hidden';

  // NOME DO VIDEO COM A EXTENSAO
  const videoName = this.getAttribute('data-video');

  // NOME DA IMAGEM PARA ADICIONAR NA TAG video
  const videoImageNome = this.getAttribute('data-video-img');

  // EXTESAO DO VIDEO
  //const extensionVideo = videoName.split('.').pop('-1');
  const extensionVideo = this.getAttribute('data-video-ext');

  // PEGANDO A TAG ESPECIFICA
  const modalPlayer = document.getElementById('modalPlayer');


  let modalPlayerCenter;
  // PROCURAR O FILHO QUE CONTEM A CLASSE ESPECIFICA
  for(let i = 0; i < modalPlayer.childNodes.length; i++){
    if(modalPlayer.childNodes[i].className == 'modalPlayerCenter'){
      modalPlayerCenter = modalPlayer.childNodes[i];
    }
  }

  // FILHO DO modalPlayerCenter
  const modalPlayerCenterChild = modalPlayerCenter.childNodes;

  const tagVideo = modalPlayerCenterChild[1];
  const tagSource = tagVideo.firstChild.nextSibling;

  // ALTERANDO IMAGEM DO VIDEO (A IAMGEM QUE FICA NA TAG video)
  tagVideo.setAttribute('poster', videoImageNome);

  // MONTANDO A TAG PARA ADICIONAR NA TAG VIDEO
  tagSource.setAttribute('src', videoName);
  tagSource.setAttribute('type', 'video/' + extensionVideo);

  // FORCANDO LOAD
  tagVideo.load();

  // ABRINDO MODAL
  modalPlayer.style.top = '0';
}
