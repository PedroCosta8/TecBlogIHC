// PEGAR A LARGURA DA TELA
const WIDTH = window.screen.width;


// FAZER COM QUE A LUPA MOSTRE O INPUT DE PESQUISA
document.getElementById('icon-search').addEventListener('click', function(){
	// O INPUT/IRMAO
	let inputSearch = this.previousElementSibling;
	let statusOpacity = inputSearch.style.getPropertyValue("opacity");


	// FAZER A PESQUISA DE HOUVER TEXTO DO INPUT E ESTIVER VISIVEL
	if(statusOpacity != 0 && inputSearch.value != ''){
		alert('Pesquisou!');
		inputSearch.value = '';
		return false;
	}

	// FUNCIONAR APENAS COM TELAS MENOS QUE 414px DE WIDTH
	if(WIDTH > 414) return false;

	if(statusOpacity == 0){
		inputSearch.style.opacity = '1';
		inputSearch.style.transition = 'all 1s';
		inputSearch.style.width = '70%';
	}else{
		inputSearch.style.width = '0%';
		inputSearch.style.opacity = '0';
		inputSearch.style.transition = 'all 1s';
	}
});