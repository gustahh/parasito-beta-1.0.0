function pesquisa() {
  var btnpesquisa = document.querySelector('.pesquisa-mobile');
  var display_itens = document.querySelector('#display-items');
  var opcoes = document.querySelector('.opcoes');

  if (btnpesquisa.style.display === "none") {
    btnpesquisa.style.display = "block";
    display_itens.style.margin = "-55px 0px";
    opcoes.style.transform = "translateY(-63px)";
  } else {
    btnpesquisa.style.display = "none";
    display_itens.style.margin = "63px 0px";
    opcoes.style.transform = "translateY(63px)";
  }
}
function filtro() {
  var menu = document.querySelector('.menu-lateral');

  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
let touchArea = document.querySelector('.boxAncora');
let touchArea2 = document.querySelector('.infoBox');
let exibirParasita = document.querySelector('#exibirParasita');
let exibirDoenca = document.querySelector('#exibirDoenca');

let mouseX, initialX = 0;
let mouseY, initialY = 0;
let isSwiped = false;
let hasExecuted = false;

let events = {
  mouse: {
    down: 'mousedown',
    move: 'mousemove',
    up: 'mouseup'
  },
  touch: {
    down: 'touchstart',
    move: 'touchmove',
    up: 'touchend'
  },
};

let deviceType = "";

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

console.log(isTouchDevice());

let rectLeft = touchArea.getBoundingClientRect().left;
let rectTop = touchArea.getBoundingClientRect().top;

const getXY = (e) => {
  mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
  mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY - rectTop);
};

isTouchDevice();

touchArea.addEventListener(events[deviceType].down, (event) => {
  isSwiped = true;
  hasExecuted = false;  // Redefine para permitir que o bloco de código seja executado novamente
  getXY(event);
  initialX = mouseX;
  initialY = mouseY;
});

touchArea2.addEventListener(events[deviceType].down, (event) => {
  isSwiped = true;
  hasExecuted = false;  // Redefine para permitir que o bloco de código seja executado novamente
  getXY(event);
  initialX = mouseX;
  initialY = mouseY;
});

touchArea.addEventListener(events[deviceType].move, (event) => {
  if (!isTouchDevice()) {
    event.preventDefault();
  }
  if (isSwiped && !hasExecuted) {
    getXY(event);
    let diffX = mouseX - initialX;
    let diffY = mouseY - initialY;
    if (Math.abs(diffY) > Math.abs(diffX)) {

      if (diffY < 0) {
        //console.log(diffY > 0 ? "Cima" : "Baixo");
        exibirParasita.style.height = '100%';
        exibirParasita.style.margin = '0px 0px';
        exibirDoenca.style.height = '100%';
        exibirDoenca.style.margin = '0px 0px';
      } else {
        exibirParasita.style.height = '90%';
        exibirParasita.style.margin = '75px 0px';
        exibirDoenca.style.height = '90%';
        exibirDoenca.style.margin = '75px 0px';
      };
    } else {
      //console.log(diffY > 0 ? "Esquerda" : "Direita");
    }
    hasExecuted = true;
  }
});
swipe = 0;
touchArea2.addEventListener(events[deviceType].move, (event) => {
  if (!isTouchDevice()) {
    event.preventDefault();
  }
  if (isSwiped && !hasExecuted) {
    getXY(event);
    let diffX = mouseX - initialX;
    let diffY = mouseY - initialY;
    if (Math.abs(diffY) > Math.abs(diffX)) {
      if (diffY < 0) {
        //console.log(diffY > 0 ? "Cima" : "Baixo");
        exibirParasita.style.height = '100%';
        exibirParasita.style.margin = '0px 0px';
      } else {
        exibirParasita.style.height = '90%';
        exibirParasita.style.margin = '75px 0px';
      };
    } else {
      //console.log(diffY > 0 ? "Esquerda" : "Direita");
      if (diffY > 0) {
        console.log('Esquerda');
        swipe--;
        console.log(swipe);

      } else {
        console.log('Direita');
        if (swipe < 5) {
          swipe++;
        }
        console.log(swipe);

      }
    }
    hasExecuted = true;
    /* menu */

    var menu = document.querySelector('.menuParasita');
    var boxCard = document.querySelector('.boxCard');

    /* lis */
    var liResumo = document.querySelector('[data-index="resumo"]');
    var liResumoSelec = document.querySelector('[data-index="resumo"]#selecionado');
    var liDescricao = document.querySelector('[data-index="descricao"]');
    var liDescricaoSelec = document.querySelector('[data-index="descricao"]#selecionado');
    var liCiclo = document.querySelector('[data-index="ciclo"]');
    var liCicloSelec = document.querySelector('[data-index="ciclo"]#selecionado');
    var liReproducao = document.querySelector('[data-index="reproducao"]');
    var liReproducaoSelec = document.querySelector('[data-index="reproducao"]#selecionado');
    var liHospedeiros = document.querySelector('[data-index="hospedeiros"]');
    var liHospedeirosSelec = document.querySelector('[data-index="hospedeiros"]#selecionado');
    var liDoencas = document.querySelector('[data-index="doencas"]');
    var liDoencasSelec = document.querySelector('[data-index="doencas"]#selecionado');


    var ulParasita = document.querySelector('.ulParasita')
    var liParasitas = document.querySelectorAll('.liParasita');
    var dadosParasita = document.querySelector('.dadosParasita');
    /* indicador */
    var indicador = document.querySelector('.indicador');
    /* texto */
    var nomeCientifico = document.querySelector('#nomeCientifico');
    var nomePopular = document.querySelector('#nomePopular');
    var descricao = document.querySelector('#descricao');
    var hospedeiro = document.querySelector('#hospedeiro');
    var ciclo = document.querySelector('#ciclo');
    var reproducao = document.querySelector('#reproducao');
    var doencas = document.querySelector('.ulDoencaNome');

    /*verifica se resumo esta ativo */
    if (liDoencasSelec) {
    }
    if (swipe === 0) {
      liParasitas.forEach(function(liParasita) {
        liParasita.removeAttribute('id');
      });
      liResumo.setAttribute('id', 'selecionado');
      menu.style.height = '12%';
      menu.style.margin = '0px 0px';
      indicador.style.width = '24%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 0px';
      descricao.style.display = 'none';
      ciclo.style.display = 'none';
      reproducao.style.display = 'none';
      boxCard.style.display = 'none';
      doencas.style.display = 'none';
    } else if (swipe === 1) {
      liParasitas.forEach(function(liParasita) {
        liParasita.removeAttribute('id');
      });
      liDescricao.setAttribute('id', 'selecionado');
      menu.style.height = '12%';
      menu.style.margin = '0px 0px';
      indicador.style.width = '27%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 82px';
      descricao.style.display = 'block';
      ciclo.style.display = 'none';
      reproducao.style.display = 'none';
      boxCard.style.display = 'none';
      doencas.style.display = 'none';
    } else if (swipe === 2) {
      liParasitas.forEach(function(liParasita) {
        liParasita.removeAttribute('id');
      });
      liCiclo.setAttribute('id', 'selecionado');
      menu.style.height = '12%';
      menu.style.margin = '0px 0px';
      indicador.style.width = '17%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 175px';
      descricao.style.display = 'none';
      ciclo.style.display = 'block';
      reproducao.style.display = 'none';
      boxCard.style.display = 'none';
      doencas.style.display = 'none';
    } else if (swipe === 3) {
      liParasitas.forEach(function(liParasita) {
        liParasita.removeAttribute('id');
      });
      liReproducao.setAttribute('id', 'selecionado');
      menu.style.height = '12%';
      menu.style.margin = '0px -100px';
      indicador.style.width = '30%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 238px';
      descricao.style.display = 'none';
      ciclo.style.display = 'none';
      reproducao.style.display = 'block';
      boxCard.style.display = 'none';
      doencas.style.display = 'none';
    } else if (swipe === 4) {
      liParasitas.forEach(function(liParasita) {
        liParasita.removeAttribute('id');
      });
      liHospedeiros.setAttribute('id', 'selecionado');
      menu.style.height = '12%';
      menu.style.margin = '0px -165px';
      indicador.style.width = '30%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 345px';
      descricao.style.display = 'none';
      ciclo.style.display = 'none';
      reproducao.style.display = 'none';
      boxCard.style.display = 'block';
      doencas.style.display = 'none';
    } else if (swipe === 5) {
      liParasitas.forEach(function(liParasita) {
        liParasita.removeAttribute('id');
      });
      liDoencas.setAttribute('id', 'selecionado');
      menu.style.height = '12%';
      menu.style.margin = '0px -165px';
      indicador.style.width = '30%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 450px';
      descricao.style.display = 'none';
      ciclo.style.display = 'none';
      boxCard.style.display = 'none';
      doencas.style.display = 'block';
    }
  }
});

touchArea.addEventListener(events[deviceType].up, () => {
  isSwiped = false;
});

touchArea.addEventListener("mouseleave", () => {
  isSwiped = false;
});

touchArea2.addEventListener(events[deviceType].up, () => {
  isSwiped = false;
});

touchArea2.addEventListener("mouseleave", () => {
  isSwiped = false;
});

window.onload = () => {
  isSwiped = false;
};
