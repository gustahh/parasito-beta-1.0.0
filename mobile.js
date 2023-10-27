function pesquisa() {
  var btnpesquisa = document.querySelector('.pesquisa-mobile');
  var display_itens = document.querySelector('#display-items');


  if (btnpesquisa.style.display === "none") {
    btnpesquisa.style.display = "block";
    display_itens.style.margin = "-55px 0px";
  } else {
    btnpesquisa.style.display = "none";
    display_itens.style.margin = "63px 0px";
  }
}
function filtro() {
  var btnfiltro = document.querySelector('.filtro-mobile');
  var display_itens = document.querySelector('#display-items');


  if (btnfiltro.style.display === "none") {
    btnfiltro.style.display = "block";
    display_itens.style.margin = "-55px 0px";
  } else {
    btnfiltro.style.display = "none";
    display_itens.style.margin = "63px 0px";
  }
}