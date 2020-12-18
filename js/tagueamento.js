// criacao dos eventos gerais presentes em todas as paginas
var event_menu_contato = document.querySelector('.menu-lista-link.menu-lista-contato')
var event_menu_pdf = document.querySelector('.menu-lista-link.menu-lista-download')

event_menu_contato.addEventListener("click", function() {
  window.ga("send", "event", "menu", "entre_em_contato", "link_externo");
  console.log("evento_menu_contato_clicado")
}, false);

event_menu_pdf.addEventListener("click", function() {
  window.ga("send", "event", "menu", "download_pdf", "download_pdf");
  console.log("evento_menu_pdf_clicado")
}, false);

// criacao de eventos especificos para a pagina analise.html
if (location.pathname == "/case-dp6/analise.html") {
	var event_cards = document.querySelectorAll('.card.card-montadoras')
	
	// funcao que adiciona um eventListener ao array de card-text's recuperado pelo .querySelectorAll
	function addEvent(item, index){
		item.addEventListener("click", function() {
			window.ga("send", "event", "analise", "ver_mais", item.querySelector('.card-title').innerText); //innerText recupera o valor do texto do card e adiciona ao evento
			console.log(item.querySelector('.card-title').innerText)
			}, false);
	}
	// execucao da criacao dos eventos
	event_cards.forEach(addEvent)
}

// criacao de eventos especificos para a pagina analise.html
if (location.pathname == "/case-dp6/sobre.html") {
	
	// Evento do butao de submit criado dentro do main.js apos a chamada da classe de visualizacao da light box
	
	// Evento do campo dos formularios
	var event_nome = document.getElementById("nome")
	var event_telefone = document.getElementById("telefone")
	var event_email = document.getElementById("email")
	var event_aceito = document.getElementById("aceito")
	var event_array = [event_nome, event_telefone, event_email, event_aceito]
	
	
	// funcao que adiciona um eventListener ao array dos items do formulario recuperado pelo ID
	function addEvent(item, index){
		item.addEventListener("change", function() {
			window.ga("send", "event", "contato", item.id, "preencheu"); //.id recupera o valor do id de cada item e adiciona ao evento
			console.log(item.id)
			}, false);
	}
	// execucao da criacao dos eventos
	event_array.forEach(addEvent)
	
}