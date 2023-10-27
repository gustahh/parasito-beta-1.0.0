let rhipicephalus_microplus = {
  nome: 'Rhipicephalus microplus',
  familia: 'Ixodidae',
  habitat: ["América do Sul", "América Central", "África"],
  popular: 'Carrapato-de-boi',
  imagem: 'rhipicephalus_microplus.jpg',
};

let rhipicephalus_sanguineus = {
  nome: 'Rhipicephalus sanguineus',
  familia: 'Ixodidae',
  habitat: ["América do Sul", "América Central", "África"],
  popular: 'Carrapato-vermelho-do-cão',
  hospedeiros: ["Cão", "Silvestres", "Mamíferos"],
  imagem: 'rhipicephalus_sanguineus.jpg',
};

let dermacentor_nitens = {
  nome: 'Dermacentor nitens',
  familia: 'Ixodidae',
  habitat: "América do Sul",
  popular: 'Carrapato-da-orelha-do-cavalo',
  hospedeiros: ["Equinos"],
  imagem: 'dermacentor_nitens.jpg',
};

let amblyoma_americanum = {
  nome: 'Amblyoma americanum',
  familia: 'Ixodidae',
  habitat: "América do Norte",
  popular: 'Carrapato-estrela-solitária',
  //hospedeiros: ["Equinos", "Capivaras", "Antas"],
  imagem: 'amblyoma_americanum.jpg',
};

let amblyoma_cajannense = {
  nome: 'Amblyoma cajannense',
  familia: 'Ixodidae',
  habitat: "América do Norte",
  popular: 'Carrapato-estrela',
  hospedeiros: ["Equinos", "Capivaras", "Antas"],
  imagem: 'amblyoma_cajannense.jpg',
};


var parasitas = [rhipicephalus_microplus, rhipicephalus_sanguineus, dermacentor_nitens, amblyoma_americanum, amblyoma_cajannense];

function alfabeto() {

  for (var i = 0; i < 26; i++) {
    var letraAtual = String.fromCharCode(97 + i); // Converte o índice em letra (de 'a' a 'z')

    // Verifica se há pelo menos um parasita que começa com a letra atual
    if (parasitas.some(parasita => parasita.nome.charAt(0).toLowerCase() === letraAtual)) {


      var boxletra = document.createElement('div'); //Cria elemento box-letra
      boxletra.classList.add("box-letra"); //Adiciona classe box-letra
      var letra = document.createElement('p'); //Cria uma nova div para a letra atual
      letra.innerHTML = `<strong>${letraAtual}</strong><br>`;
      letra.classList.add("letra");//Adiciona classe letra
      boxletra.appendChild(letra);//Torna letra filha de box 

      for (var b = 1; b < 4; b++) { //cria 4 brs
        var br = document.createElement('br'); //Cria uma quebra de linha
        boxletra.appendChild(br);//Torna o <br> filho de box-letra
      }

      for (const parasita of parasitas) {
        if (parasita.nome.charAt(0).toLowerCase() === letraAtual) {


          var item = document.createElement('div'); //Cria uma nova div chamada item
          item.classList.add("item");//Adiciona classe item
          boxletra.appendChild(item);//Torna item filha de box

          var itemimagem = document.createElement('div'); //Cria uma nova div chamada item-imagem
          itemimagem.classList.add("item-imagem");//Adiciona classe item
          item.appendChild(itemimagem);//Torna itemimagem filha de item 

          const img = document.createElement('img'); // Cria uma nova div para as informações do parasita
          img.src = `img/${parasita.imagem}`;
          img.setAttribute("id", "imagem");//Adiciona id imagem
          itemimagem.appendChild(img);

          // Adiciona a div das informações do parasita à div da letra atual
          //nome

          const nomeDiv = document.createElement('p'); // Cria uma nova div para as informações do parasita
          nomeDiv.textContent = parasita.nome;
          itemimagem.classList.add("nome-especie");//Adiciona classe nome-especie para nome div
          item.appendChild(nomeDiv); // Adiciona a div das informações do parasita à div da letra atual

        }
      }

      // Adiciona a div da letra atual ao documento

      document.getElementById("display-items").appendChild(boxletra);
    }
  }

}
function pegarFamilia(parasita) {
  let familias = []; //cria array para armazenar as familias

  for (let parasita of parasitas) {
    if (!familias.includes(parasita.familia)) { //verifica se o nome da familia já está no array
      familias.push(parasita.familia); //então, adiciona a familia ao array
    }
  }

  return familias;

}
//Executa a função
let familiasP = pegarFamilia(parasitas);

function exibirFiltroFamilia() {
  for (var i = 0; i < familiasP.length; i++) {

    //cria ul
    const ul = document.createElement('ul');
    ul.setAttribute("id", "ul-filtrof");
    document.querySelector(".filtro-opcoesf").appendChild(ul);

    //cria li
    const li = document.createElement('li');
    document.getElementById("ul-filtrof").appendChild(li);
    //cria label
    const label = document.createElement('label');
    label.classList.add("pure-material-checkbox");
    li.appendChild(label);

    //cria input
    const input = document.createElement('input');
    input.type = 'checkbox';
    label.appendChild(input);

    //cria span
    const span = document.createElement('span');
    label.appendChild(span);
    span.innerHTML = familiasP;


  }
}

function pegarHabitat(parasita) {
  let habitats = [];

  for (let parasita of parasitas) {
    if (Array.isArray(parasita.habitat)) {
      for (let habitat of parasita.habitat) {
        if (!habitats.includes(habitat)) {
          habitats.push(habitat);
        }
      }
    } else if (!habitats.includes(parasita.habitat)) {
      habitats.push(parasita.habitat);
    }
  }

  return habitats;

}
// Chamando a função para obter os habitats e exibindo o resultado
let habitatsP = pegarHabitat(parasitas);
console.log(habitatsP, habitatsP.length);

function exibirFiltroHabitat() {
  for (let habitat of habitatsP) {

    //cria ul
    const ul = document.createElement('ul');
    ul.setAttribute("id", "ul-filtroh");
    document.querySelector(".filtro-opcoesh").appendChild(ul);

    //cria li
    const li = document.createElement('li');
    document.getElementById("ul-filtroh").appendChild(li);
    //cria label
    const label = document.createElement('label');
    label.classList.add("pure-material-checkbox");
    li.appendChild(label);

    //cria input
    const input = document.createElement('input');
    input.type = 'checkbox';
    label.appendChild(input);

    //cria span
    const span = document.createElement('span');
    label.appendChild(span);
    span.innerHTML = habitat;

    
  }
}

function menuLateral() {
  displayitem = document.querySelector('#display-items');
  menu = document.querySelector('.menu-lateral');
  btnOcultar = document.querySelector('.btnOcultar');
  ocultarIcon = document.querySelector('#ocultarIcon');
  mostrarIcon = document.querySelector('#mostrarIcon');
  filtrobox = document.querySelector('.box-filtro');
  filtro = document.querySelector('#filtro-desktop');
  filtrotxt = document.querySelector('#filtro-txt-desktop');
  if (menu.style.width === '20%') {
    //ocultar
    menu.style.width = '2%';
    displayitem.style.width = '98%';
    filtrobox.style.display = 'none';
    filtro.style.display = 'none';
    filtrotxt.style.display = 'none';
    btnOcultar.style.margin = '10px 0px';
    ocultarIcon.style.transform = 'rotate(180deg)';
  } else {
    //mostrar
    menu.style.width = '20%';
    displayitem.style.width = '80%';
    filtrobox.style.display = 'block';
    filtro.style.display = 'block';
    filtrotxt.style.display = 'block';
    btnOcultar.style.margin = '10px 10px';
    ocultarIcon.style.transform = 'rotate(360deg)';
  }
}
function mostrarFiltrosFamilia() {
  opcoes = document.querySelector('.filtro-opcoesf');
  expandirIcon = document.querySelector('#expandir-icon-familia');
  if (opcoes.style.height === "0px") {
    opcoes.style.height = "auto";
    opcoes.style.opacity = "100%";
    expandirIcon.style.margin = "-5px -9px";
    expandirIcon.style.transform = 'rotate(180deg)';
  } else {
    opcoes.style.height = "0px";
    opcoes.style.opacity = "0";
    expandirIcon.style.margin = "-3px -9px";
    expandirIcon.style.transform = 'rotate(0deg)';
  }
}
function mostrarFiltrosHabitat() {
  opcoes = document.querySelector('.filtro-opcoesh');
  expandirIcon = document.querySelector('#expandir-icon-habitat');
  if (opcoes.style.height === "0px") {
    opcoes.style.height = "auto";
    opcoes.style.opacity = "100%";
    expandirIcon.style.margin = "-5px -9px";
    expandirIcon.style.transform = 'rotate(180deg)';
  } else {
    opcoes.style.height = "0px";
    opcoes.style.opacity = "0";
    expandirIcon.style.margin = "-3px -9px";
    expandirIcon.style.transform = 'rotate(0deg)';
  }
}