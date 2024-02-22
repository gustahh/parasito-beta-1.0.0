var ciclo = `O desenvolvimento dos carrapatos acontece em 4 estágios: ovo, larva, ninfa e adulto. <br><br> Na primeira fase: nos ovos a fêmea abandona o hospedeiro e deposita seus ovos em algum  local no solo, preferencialmente em lugares altos e isolados. Essa fêmea é capaz de colocar  até milhares de ovos que em no máximo 2 semanas estarão prontos para originarem as  larvas. <br><br> Depois de eclodir, começa a segunda fase que as larvas começam a procurar por alimento.  Retornam ao seu ninho após alguns dias, já alimentadas e preparadas para ganhar mais  um par de patas e transformar-se em uma ninfa. Ainda como larvas, os carrapatos já são  extremamente resistentes e podem suportar até 60 dias sem alimentar-se. <br><br> Na terceira fase a de ninfa os carrapatos procuram novamente por alimento e uma vez que  o encontram estão prontos para ir para o solo e evoluir para a fase adulta. Ao retornar a seu  ambiente para evoluir os carrapatos podem tornar-se adultos machos ou fêmeas. <br><br> Na última fase quando adultos, os carrapatos procuram mais uma vez por sangue e  quando cheias as fêmeas se desprendem deste hospedeiro para colocar seus ovos no  ambiente. Os carrapatos adultos são capazes de sobreviver até 220 dias sem se alimentar. Os ambientes preferidos desses animais para a oviposição são paredes e muros.
<br><br>
`;
let rhipicephalus_microplus = {
  id: 0,
  resumo: {
    Família: 'Ixodidae',
    Filo: 'Arthropoda',
    Fubfilo: 'Chelicerata',
    Classe: 'Arachnida',
    Subclasse: 'Acari',
    Superordem: 'Parasitiformes',
    Ordem: 'Ixodida',
    Subordem: 'Metastigmata',
    Superfamília: 'Ixodoidea',
    Subfamília: 'Rhipicephalinae',
    Gênero: 'Rhipicephalus',
    Subgênero: 'Boophilus',
    Espécie: 'Rhipicephalus (Boophilus) microplus',
  },
  nome: 'Rhipicephalus microplus',
  familia: 'Ixodidae',
  habitat: ["América do Sul", "América Central", "África"],
  popular: 'Carrapato-de-boi',
  hospedeiros: {
    nome: ["Cão", "Silvestres", "Mamíferos"],
    imgHospedeiro: ["lindo-retrato-de-cachorro.jpg", "silvestre.jpg", "mamiferos.jpg"],
  },
  imagem: 'rhipicephalus_microplus.jpg',
  descricao: 'Rhipicephalus microplus é uma espécie de carrapato da família Ixodidae, muito "popular" na América do Sul, Central e África. Ele é popularmente conhecido como carrapato-de-boi.',
  doencas: ['Anasplamose bovina', 'Babesiose bovina', 'Babesiose equina'],
  ciclo: ciclo,
  reproducao: `Conhecido como "carrapato-do-boi", é um carrapato monoxeno e tem os bovinos como principal hospedeiro, podendo ser encontrado parasitando outros animais como, equinos, ovinos e até mesmo cervídeos que compartilhem o ambiente dos bovinos. <br><br> Este carrapato, ainda na fase de larva, se fixa em seu hospedeiro, até tornar-se adulto e assim, as fêmeas, já ingurgitadas se desprendem do animal e caem ao solo. Preferencialmente, as teleóginas se desprendem do hospedeiro no início da manhã e ou final de tarde, períodos esses com as condições climáticas mais favoráveis à fêmea ingurgitada. Após isso, ela procura um lugar que seja seguro e protegido, tanto de inimigos naturais quanto da incidência intensa de luz solar. Por um período de 3 a 5 dias após o desprendimento da teleógina, em condições climáticas adequadas, ocorre o que chamamos de período de pré-postura, tempo esse necessário para que ocorra maturação dos ovários, produção e maturação dos ovos. Esse tempo pode variar de acordo com as condições climáticas. <br><br> Posteriormente a esse período tem início a ovipostura. Após a ovipostura, a fêmea morre, finalizando assim seu ciclo de vida e deixando ali seus ovos para incubação. Cada teleógina possui potencial de reverter em torno de 50% de seu peso corporal em massa de ovos, geralmente cada teleógina tem a capacidade de realizar ovipostura de aproximadamente 3.000 ovos.`,
  referencias: {
    ciclo: ['https://blog.boticapets.com.br/cuidados/doenca-do-carrapato-como-prevenir-e-cuidar-do-cao/', 'https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/vigilancia_em_saude/controle_de_zoonoses/animais_sinantropicos/index.php?p=4499&amp'],
    resumo: ['https://www.vetprofissional.com.br/artigos/carrapatos-principais-caracteristicas-morfologicas-e-diferentes-familias%20#:~:text=C%20–%20Família%20Ixodidae%20–%20Riphicephalus%20Sanguin%20eus,presentes,%20coxa%20bífida%20e%20outros'],
  },
};

let rhipicephalus_sanguineus = {
  id: 1,
  resumo: {
    Reino: 'Animalia',
    Filo: 'Arthropoda',
    Subfilo: 'Chelicerata',
    Classe: 'Arachnida',
    Ordem: 'Acarina',
    Família: 'Ixodidae',
    Gênero: 'Rhipicephalus',
    Espécie: 'Rhipicephalus Sanguineus',
  },
  nome: 'Rhipicephalus sanguineus',
  familia: 'Ixodidae',
  habitat: ["América do Sul", "América Central", "África"],
  popular: 'Carrapato-vermelho-do-cão',
  hospedeiros: {
    nome: ["Cão", "Silvestres", "Mamíferos"],
    imgHospedeiro: ["lindo-retrato-de-cachorro.jpg", "silvestre.jpg", "mamiferos.jpg"],
  },
  imagem: 'rhipicephalus_sanguineus.jpg',
  descricao: 'Rhipicephalus sanguineus é uma espécie de carrapato da família Ixodidae, popularmente conhecido como carrapato-vermelho-do-cão.',
  doencas: ['Erquiliose canina'],
  ciclo: ciclo,
  reproducao: `É trioxeno, assim como o A. Cajennense. Hospeda e alimenta-se principalmente em cães e, acidentalmente, em outros hospedeiros, incluindo os seres humanos. <br> Os machos adultos geralmente morrem após 
acasalar, enquanto as fêmeas, assim que ficam repletas de sangue (semelhantes a grãos de feijão), fazem a postura no ambiente de até 5 mil ovos.`,
  referencias: {
    ciclo: ['https://blog.boticapets.com.br/cuidados/doenca-do-carrapato-como-prevenir-e-cuidar-do-cao/', 'https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/vigilancia_em_saude/controle_de_zoonoses/animais_sinantropicos/index.php?p=4499&amp'],
    resumo: ['https://www.vetprofissional.com.br/artigos/carrapatos-principais-caracteristicas-morfologicas-e-diferentes-familias%20#:~:text=C%20–%20Família%20Ixodidae%20–%20Riphicephalus%20Sanguin%20eus,presentes,%20coxa%20bífida%20e%20outros'],
  },
};

let dermacentor_nitens = {
  id: 2,
  resumo: {
    Reino: 'Animalia',
    Filo: 'Arthropoda',
    Classe: 'Arachnida',
    Ordem: 'Acarina',
    Subordem: 'Parasitiformes',
    Superfamília: 'Ixodoidea',
    Família: 'Ixodidae',
    Gênero: 'Dermacentor',
    Especie: 'Dermacentor nitens',
  },
  nome: 'Dermacentor nitens',
  familia: 'Ixodidae',
  habitat: "América do Sul",
  popular: 'Carrapato-da-orelha-do-cavalo',
  hospedeiros: {
    nome: ["Equinos"],
    imgHospedeiro: ["equino.jpg"],
  },
  imagem: 'dermacentor_nitens.jpg',
  descricao: 'Dermacentor nitens é uma espécie de carrapato da família Ixodidae, é popularmente conhecido como carrapato-da-orelha-do-cavalo; apresenta ampla distribuição em todo território brasileiro.',
  doencas: ['Babesiose equina'],
  ciclo: ciclo,
  reproducao: `Conhecido popularmente como "carrapato-da- orelha-do-cavalo", apresenta ampla distribuição em todo o território brasileiro e possui os equídeos como hospedeiros principais. <br><br> Apesar da estreita relação entre o carrapato D. nitens e os equídeos, esses ectoparasitas podem parasitar outros animais. Contudo, os relatos são acidentais e em baixas infestações. <br><br> Essa espécie depende de um único hospedeiro para completar seu ciclo de vida (ciclo monoxeno). Suas fêmeas levam em média oito, nove e oito dias, respectivamente, para completarem seu repasto sanguíneo. <br><br> E, finalmente, quando a fêmea completa sua alimentação, ela se desprende do animal, caindo no solo e dando início a busca para um local adequado sob a vegetação para iniciar o processo de ovipostura, o que pode levar alguns dias e, após encerrar a oviposição (onde põe de 2.000 a 3.000 ovos), a fêmea morre. Os ovos que ali permanecem são naturalmente incubados.`,
  referencias: {
    ciclo: ['https://blog.boticapets.com.br/cuidados/doenca-do-carrapato-como-prevenir-e-cuidar-do-cao/', 'https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/vigilancia_em_saude/controle_de_zoonoses/animais_sinantropicos/index.php?p=4499&amp'],
    resumo: ['https://www.vetprofissional.com.br/artigos/carrapatos-principais-caracteristicas-morfologicas-e-diferentes-familias%20#:~:text=C%20–%20Família%20Ixodidae%20–%20Riphicephalus%20Sanguin%20eus,presentes,%20coxa%20bífida%20e%20outros'],
  },
};

let amblyoma_americanum = {
  id: 3,
  resumo: {
    Domínio: 'Eukaryota',
    Reino: 'Animalia',
    Filo: 'Arthropoda',
    Subfilo: 'Chelicerata',
    Classe: 'Arachnida',
    Ordem: 'Ixodida',
    Família: 'Ixodidae',
    Gênero: 'Amblyomma',
    Espécies: 'A. americanum',
  },
  nome: 'Amblyoma americanum',
  familia: 'Ixodidae',
  habitat: "América do Norte",
  popular: 'Carrapato-estrela-solitária',
  hospedeiros: {
    nome: ["Equinos", "Capivaras", "Antas"],
    imgHospedeiro: ["equino.jpg", "capivara.jpg", "anta.jpg"],
  },
  imagem: 'amblyoma_americanum.jpg',
  descricao: 'Amblyoma americanum é uma espécie de carrapato da família Ixodídeos, popularmente conhecido como carrapato-estrela-solitária, é um carrapato nativo de parte do leste dos Estados Unidos e México.',
  doencas: ['Febre maculosa', 'Borrelyose canina'],
  ciclo: ciclo,
  reproducao: `Conhecido como "carrapato-estrela-solitário", é um carrapato de três hospedeiros, o que significa que se alimenta de um hospedeiro diferente durante cada um dos estágios larval, ninfal e adulto, porém, 
fêmea se liga apenas a uma espécie de hospedeiro para reprodução. 
A fêmea, após ingurgitada, se desprende e converte a farinha de sangue em ovos, e depois sai à procura de um lugar adequado para ovipostura no solo. As fêmeas dessa espécie põem até 20.000 ovos.`,
  referencias: {
    ciclo: ['https://blog.boticapets.com.br/cuidados/doenca-do-carrapato-como-prevenir-e-cuidar-do-cao/', 'https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/vigilancia_em_saude/controle_de_zoonoses/animais_sinantropicos/index.php?p=4499&amp'],
    resumo: ['https://www.vetprofissional.com.br/artigos/carrapatos-principais-caracteristicas-morfologicas-e-diferentes-familias%20#:~:text=C%20–%20Família%20Ixodidae%20–%20Riphicephalus%20Sanguin%20eus,presentes,%20coxa%20bífida%20e%20outros'],
  },
};

let amblyoma_cajannense = {
  id: 4,
  resumo: {
    Espécie: 'Amblyomma cajennense',
    Reino: 'Animalia',
    Filo: 'Arthropoda',
    Classe: 'Arachnida',
    Subclasse: 'Acari',
    Subordem: 'Parasitiformes',
    Ordem: 'Ixodida',
    Família: 'Ixodidae',
    Subfamília: 'Amblyomminae',
  },
  nome: 'Amblyoma cajannense',
  familia: 'Ixodidae',
  habitat: "América do Norte",
  popular: 'Carrapato-estrela',
  hospedeiros: {
    nome: ["Equinos", "Capivaras", "Antas"],
    imgHospedeiro: ["equino.jpg", "capivara.jpg", "anta.jpg"],
  },
  imagem: 'amblyoma_cajannense.jpg',
  doencas: ['Febre maculosa', 'Borrelyose canina'],
  ciclo: ciclo,
  reproducao: `O A. Cajennense é um trioxeno, o que significa que ele precisa de três hospedeiros para completar o ciclo de vida de ovo a adulto. E é nesse hospedeiro que a espécie acasala. <br> A fêmea, então, se alimenta do sangue do hospedeiro por dez dias(ficando do tamanho de uma jabuticaba). <br> Esse tempo é necessário porque ela precisa das proteínas das células do sangue do animal para formar os ovos antes de se desprender da pele e, posteriormente, fazer a ovoposição no solo(pondo em torno de 3 a 4 mil ovos).`,
  referencias: {
    ciclo: ['https://blog.boticapets.com.br/cuidados/doenca-do-carrapato-como-prevenir-e-cuidar-do-cao/', 'https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/vigilancia_em_saude/controle_de_zoonoses/animais_sinantropicos/index.php?p=4499&amp'],
    resumo: ['https://www.vetprofissional.com.br/artigos/carrapatos-principais-caracteristicas-morfologicas-e-diferentes-familias%20#:~:text=C%20–%20Família%20Ixodidae%20–%20Riphicephalus%20Sanguin%20eus,presentes,%20coxa%20bífida%20e%20outros'],
  },
};


var parasitas = [rhipicephalus_microplus, rhipicephalus_sanguineus, dermacentor_nitens, amblyoma_americanum, amblyoma_cajannense];






function popular() {
  var display = document.querySelector('#display-items');

  var nomeParasitas = document.querySelectorAll('.nome-especie');
  nomeParasitas.forEach(function(elemento) {
    var acharParasita = parasitas.find(function(parasita) {
      return parasita.nome === elemento.innerText;
    });
    console.log(acharParasita)
    elemento.innerText = acharParasita.popular;
  });
}
function exibir() {
  var display = document.querySelector('#display-items');
  display.innerHTML = '';
  for (const parasita of parasitas) {
    var HTML = `

              <div class="item" data-index="${parasita.id}" onclick='cliqueParasita(event);'>
                <div class="item-imagem"><img
                    src="img/${parasita.imagem}" id="imagem">
                </div>
                <p class="nome-especie">${parasita.nome}</p>
              </div>

          `;
    display.innerHTML += HTML;
  }
}

function alfabeto() {
  var display = document.querySelector('#display-items');
  display.innerHTML = '';
  var botao = document.querySelector('#popular');

  for (var i = 0; i < 26; i++) {
    var letraAtual = String.fromCharCode(97 + i); // Converte o índice em letra (de 'a' a 'z')
    contador = 0;

    // Verifica se há pelo menos um parasita que começa com a letra atual

    if (parasitas.some(parasita => parasita.nome.charAt(0).toLowerCase() === letraAtual)) {
      var letra = letraAtual.toUpperCase();
      var contador = 0;
      for (const parasita of parasitas) {
        if (parasita.nome.charAt(0).toLowerCase() === letraAtual) {
          contador++;
        }
      }

      var htmlLetra = `
          <div class="box-letra" data-index="${letraAtual}">
            <p class="letra"><strong>${letra}</strong></p>
            <button id="btnAlfabeto" class="ativo" onclick="mostrarAlfabeto(event);">
              <span class="material-icons-outlined" id="expandir-icon-alfabeto" data-index="${letraAtual}">
                expand_more
              </span>
              <span class="numParasitas">• ${contador}</span>
            </button>
          </div>
            `;
      display.innerHTML += htmlLetra;

      for (const parasita of parasitas) {
        var contador = 0;
        if (parasita.nome.charAt(0).toLowerCase() === letraAtual) {
          var HTML = `
                
                    <div class="item" data-index="${parasita.id}" id="${letraAtual}" onclick='cliqueParasita(event);'>
                      <div class="item-imagem"><img
                          src="img/${parasita.imagem}" id="imagem">
                      </div>
                      <p class="nome-especie">${parasita.nome}</p>
                    </div>
              
                `;
          display.innerHTML += HTML;

        }
      }
      id = letraAtual;
      console.log(id);
      itens = document.querySelectorAll('.item[id^=' + id + ']');
      //console.log(itens);
      //console.log(itens.length);
    }

  }
}

function alfabeto2() {
  var display = document.querySelector('#display-items');
  var itens = document.querySelectorAll('.item');
  var arrayItens = Array.from(itens);

  // Ordena o array com base no valor da propriedade data-index
  arrayItens.sort(function(a, b) {
    var textoA = a.querySelector('.nome-especie').innerText.toUpperCase();
    var textoB = b.querySelector('.nome-especie').innerText.toUpperCase();
    return textoA.localeCompare(textoB);
  });

  // Remove os elementos existentes do DOM
  itens.forEach(function(item) {
    item.remove();
  });

  // Adiciona os elementos ordenados de volta ao DOM
  arrayItens.forEach(function(item) {
    display.appendChild(item);
  });
  /*
  for (var i = 0; i < 26; i++) {
    var letraAtual = String.fromCharCode(97 + i); // Converte o índice em letra (de 'a' a 'z')
    contador = 0;

    // Verifica se há pelo menos um parasita que começa com a letra atual
    
  }
  */
}

function exibirAlfabeto() {
  var botao = document.querySelector('#ordemAlfabetica');
  var botao2 = document.querySelector('#ordemAgrupar');

  if (botao.classList.contains('ativo')) {
    var display = document.querySelector('#display-items');
    botao.style.backgroundColor = 'black';
    botao.style.color = 'white';

    botao2.style.backgroundColor = '#E6E6E6';
    botao2.style.color = 'black';
    //display.innerHTML = '';
    console.log('classe removida');
    alfabeto2();
    botao.classList.remove("ativo");
  } else {
    var display = document.querySelector('#display-items');
    //display.innerHTML = '';
    botao.style.backgroundColor = '#E6E6E6';
    botao.style.color = 'black';
    console.log('classe adicionada');
    botao.classList.add("ativo");
    exibir();
  }
}

function exibirAgrupado() {
  var botao = document.querySelector('#ordemAgrupar');
  var botao2 = document.querySelector('#ordemAlfabetica');
  var botao3 = document.querySelector('#popular');

  if (botao.classList.contains('ativo')) {
    botao.style.backgroundColor = 'black';
    botao.style.color = 'white';

    botao2.style.backgroundColor = '#E6E6E6';
    botao2.style.color = 'black';

    botao3.style.backgroundColor = '#E6E6E6';
    botao3.style.color = 'black';

    botao.classList.remove("ativo");
    botao2.classList.remove("ativo");
    botao3.classList.remove("ativo");
    console.log('classe removida');
    alfabeto();

  } else {
    botao.style.backgroundColor = '#E6E6E6';
    botao.style.color = 'black';
    console.log('classe adicionada');
    botao.classList.add("ativo");
    exibir();
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
    input.setAttribute("id", familiasP);
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
    input.setAttribute("id", habitat);
    label.appendChild(input);

    //cria span
    const span = document.createElement('span');
    label.appendChild(span);
    span.innerHTML = habitat;


  }
}

function menuLateral() {
  var exibirBox = document.querySelector('#exibirBox');
  displayitem = document.querySelector('#display-items');
  menu = document.querySelector('.menu-lateral');
  opcoes = document.querySelector('.opcoes');
  btnFiltrar = document.querySelector('.btnFiltrar');
  btnOcultar = document.querySelector('.btnOcultar');
  ocultarIcon = document.querySelector('#ocultarIcon');
  mostrarIcon = document.querySelector('#mostrarIcon');
  filtrobox = document.querySelector('.box-filtro');
  filtro = document.querySelector('#filtro-desktop');
  filtrotxt = document.querySelector('#filtro-txt-desktop');
  if (menu.style.width === '20%') {
    //ocultar
    menu.style.width = '2%';
    if (exibirBox.style.display === 'none') {
      displayitem.style.width = '98%';
      opcoes.style.width = '98%';
      btnFiltrar.style.display = 'none';
      console.log('a');
    } else {
      displayitem.style.width = '78%';
      opcoes.style.width = '80%';
      console.log('b');
    }
    filtrobox.style.display = 'none';
    filtro.style.display = 'none';
    filtrotxt.style.display = 'none';
    btnOcultar.style.margin = '10px 0px';
    ocultarIcon.style.transform = 'rotate(180deg)';
  } else {
    //mostrar
    menu.style.width = '20%';
    if (exibirBox.style.display === 'none') {
      displayitem.style.width = '80%';
      opcoes.style.width = '80%';
      btnFiltrar.style.display = 'block';
      console.log('c');
    } else {
      displayitem.style.width = '60%';
      opcoes.style.width = '40%';
      console.log('d');
    }

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
function mostrarAlfabeto(event) {
  var letra = event.currentTarget.querySelector('#expandir-icon-alfabeto').getAttribute("data-index");
  console.log(letra)
  id = '#' + letra;
  var idNoSelector = id.replace(/ /g, "\\ ");
  console.log(idNoSelector);
  itens = document.querySelectorAll('' + idNoSelector + '');
  console.log(itens);
  console.log(itens.length);
  expandirIcon = document.querySelector('#expandir-icon-alfabeto[data-index="' + letra + '"]');
  if ($(event.currentTarget).hasClass("ativo")) {
    itens.forEach(function(item) {
      event.currentTarget.classList.remove('ativo');
      event.currentTarget.classList.add('desativado');
      item.style.display = "none";
      item.style.opacity = "0";
      expandirIcon.style.transform = 'rotate(0deg)';
    });
  } else {
    itens.forEach(function(item) {
      event.currentTarget.classList.remove('desativado');
      event.currentTarget.classList.add('ativo');
      item.style.display = "block";
      item.style.opacity = "100%";
      expandirIcon.style.transform = 'rotate(180deg)';
    });
  }
}
function cliqueParasita(event) {
  const index = event.currentTarget.getAttribute("data-index");
  console.log("Clicado na div com índice " + index);

  const objetoClicado = parasitas[index];

  //pega variáveis
  var displayitems = document.querySelector('#display-items');
  var fundo = document.querySelector('.fundo');
  var exibirBox = document.querySelector('#exibirBox');
  var imgExibir = document.querySelector('#imgExibir');
  var nomeCientifico = document.querySelector('#nomeCientifico');
  var nomePopular = document.querySelector('#nomePopular');
  var descricao = document.querySelector('#descricao');
  var hospedeiro = document.querySelector('#hospedeiro');
  var ciclo = document.querySelector('#ciclo');
  var reproducao = document.querySelector('#reproducao');
  var ulDoencas = document.querySelector('.ulDoencaNome');
  var doencas = document.querySelector('#doencas');

  //altera o css das divs

  exibirBox.style.display = 'block';
  var menu = document.querySelector('.menu-lateral');
  if (menu.style.width === '20%') {
    if ($(window).width() > 960) {
      displayitems.style.width = '60%';
      displayitems.style.margin = '63px 20%';
    }
  } else {
    if ($(window).width() > 960) {
      displayitems.style.width = '78%';
      displayitems.style.margin = '63px 293px';
    }
  }

  if ($(window).width() < 960) {
    fundo.style.display = 'block';
  }

  //passa as informações para o html
  imgExibir.src = 'img/' + objetoClicado.imagem;
  nomeCientifico.innerHTML = objetoClicado.nome;
  nomePopular.innerHTML = objetoClicado.popular;
  descricao.innerHTML = objetoClicado.descricao;
  ciclo.innerHTML = objetoClicado.ciclo;
  reproducao.innerHTML = objetoClicado.reproducao;
  console.log(objetoClicado.hospedeiros.nome.length);

  /* resumo */
  var ulTaxonomia = document.querySelector('.ulTaxonomia');
  ulTaxonomia.innerHTML = '';
  // Acessa a propriedade 'resumo' do objeto clicado
  var resumo = objetoClicado.resumo;

  // Loop para percorrer as propriedades do objeto 'resumo'
  for (var propriedade in resumo) {
    if (resumo.hasOwnProperty(propriedade)) {
      var HTML = `
         <li class="liTaxonomia">${propriedade}: ${resumo[propriedade]}</li><br> 
        `;
      ulTaxonomia.innerHTML += HTML;
      console.log(propriedade + resumo[propriedade]);
    }
  }



  linkCiclo = objetoClicado.referencias.ciclo;
  for (var i = 0; i < linkCiclo.length; i++) {
    displayCiclo = document.querySelector('#ciclo');
    linkAbreviado = linkCiclo[i].substring(0, 30) + '...';
    HTML = `
      <div class="linkReferencias">
        <span class="material-icons-outlined" id="linkIcon">link</span>
        <a class="linkUrl" href="${linkCiclo[i]}" target="_blank">${linkAbreviado}</a>
      </div>
      <br><br>
    `;
    ciclo.innerHTML += HTML;
    console.log(linkCiclo[i]);
  }

  /* hospedeiros */
  var boxCard = document.querySelector('.boxCard');
  var arrayHospedeiros = [];
  // Itera sobre os nomes e cria um objeto para cada hospedeiro
  for (var i = 0; i < objetoClicado.hospedeiros.nome.length; i++) {
    var hospedeiro = {
      nome: objetoClicado.hospedeiros.nome[i],
      imgHospedeiro: objetoClicado.hospedeiros.imgHospedeiro[i],
    };
    arrayHospedeiros.push(hospedeiro);
  }

  boxCard.innerHTML = '';
  for (var hospedeiro of arrayHospedeiros) {
    cardHospedeiros = `<div class="cardHospedeiro">
        <div class="foto-exibir-doenca"><img src="../img/${hospedeiro.imgHospedeiro}" id="imgExibir"></div>
        <p class="nome-exibir-doenca" id="nomeCientifico"><strong>${hospedeiro.nome}</strong></p>
        </p>
      </div>`;

    boxCard.innerHTML += cardHospedeiros;
  }

  /* doenças */

  var arrayDoencas = [];
  ulDoencas.innerHTML = '';
  for (var i = 0; i < objetoClicado.doencas.length; i++) {
    var doenca = {
      nome: objetoClicado.doencas[i],
    };
    arrayDoencas.push(doenca);
    liDoenca = `
      <li class="liDoencasNome" id="doencas">${doenca.nome}</li>
      <br>
    `;
    ulDoencas.innerHTML += liDoenca;
  }
  console.log(arrayDoencas);

}
function fechar() {
  var displayitems = document.querySelector('#display-items');
  var exibirBox = document.querySelector('#exibirBox');
  var fundo = document.querySelector('.fundo');

  fundo.style.display = 'none';
  exibirBox.style.display = 'none';

  if ($(window).width() < 960) {
    displayitems.style.width = '100%';
    displayitems.style.margin = '63px 0px';
  }

  if ($(window).width() > 960) {
    displayitems.style.width = '80%';
    displayitems.style.margin = '63px 0px';
  }
  if (menu.style.width === '20%') {
    if ($(window).width() > 960) {
      displayitems.style.width = '80%';
      displayitems.style.margin = '63px 0px';
    }
  } else {
    if ($(window).width() > 960) {
      displayitems.style.width = '98%';
      displayitems.style.margin = '63px 0px';
    }
  }
}
function filtrar() {

  if ($(window).width() < 960) {
    var menu = document.querySelector('.menu-lateral');
    menu.style.display = "none";
  }

  var americaSulCheckbox = document.getElementById("América do Sul");
  var americaCentralCheckbox = document.getElementById("América Central");
  var americaNorteCheckbox = document.getElementById("América do Norte");
  var africaCheckbox = document.getElementById("África");
  var ixodidaeCheckbox = document.getElementById("Ixodidae");
  var display = document.querySelector('#display-items');
  display.innerHTML = '';

  var criteriosFiltroHabitat = [];
  var criteriosFiltroFamilia = [];
  var criteriosSelecionados = [];

  if (americaSulCheckbox.checked) {
    criteriosFiltroHabitat.push("América do Sul");
    criteriosSelecionados.push("América do Sul");
  }
  if (americaCentralCheckbox.checked) {
    criteriosFiltroHabitat.push("América Central");
    criteriosSelecionados.push("América Central");
  }
  if (americaNorteCheckbox.checked) {
    criteriosFiltroHabitat.push("América do Norte");
    criteriosSelecionados.push("América do Norte");
  }
  if (africaCheckbox.checked) {
    criteriosFiltroHabitat.push("África");
    criteriosSelecionados.push("África");
  }
  if (ixodidaeCheckbox.checked) {
    criteriosFiltroFamilia.push("Ixodidae");
    criteriosSelecionados.push("Ixodidae");
  }

  var resultadoFiltro = parasitas.filter(objeto => {
    const atendeCriterioHabitat = criteriosFiltroHabitat.length === 0 || criteriosFiltroHabitat.some(criterio => objeto.habitat.includes(criterio));
    const atendeCriterioFamilia = criteriosFiltroFamilia.length === 0 || criteriosFiltroFamilia.includes(objeto.familia);
    return atendeCriterioHabitat && atendeCriterioFamilia;
  });

  var resultado = `
  <button id="btnLimpar" onclick='limpar();'>
    <span class="material-icons-outlined" id="limparFiltro">
      highlight_off
    </span>
    Limpar
  </button>
  <h3 id="exibindoResultadosPara">
    Exibindo resultados para: ${criteriosSelecionados}
  </h3>
  `;

  display.innerHTML += resultado;

  //document.write(`<div id="exibindoResultadosPara">Exibindo resultados para: ${criteriosSelecionados}</div>`);

  resultadoFiltro.sort((a, b) => a.nome.localeCompare(b.nome));

  // Restante do código para agrupar e exibir os resultados
  var gruposPorLetra = {};

  // Agrupe os parasitas por letra inicial
  resultadoFiltro.forEach(objeto => {
    var letraInicial = objeto.nome.charAt(0).toLowerCase();
    if (!gruposPorLetra[letraInicial]) {
      gruposPorLetra[letraInicial] = [];
    }
    gruposPorLetra[letraInicial].push(objeto);
  });

  // Ordem alfabética das letras iniciais
  var letrasOrdenadas = Object.keys(gruposPorLetra).sort();

  letrasOrdenadas.forEach(letra => {
    //document.write('<br>', letra.toUpperCase());
    var letraCaps = letra.toUpperCase();

    var htmlLetra = `
        <div class="box-letra" data-index="${letra}">
          <p class="letra"><strong>${letraCaps}</strong></p>
          <button id="btnAlfabeto" class="ativo" onclick="mostrarAlfabeto(event);">
            <span class="material-icons-outlined" id="expandir-icon-alfabeto" data-index="${letra}">
              expand_more
            </span>
          </button>
        </div>
        `
      ;
    display.innerHTML += htmlLetra;
    gruposPorLetra[letra].forEach(filtro => {
      var HTML = `
            <div class="item" data-index="${filtro.id}" id="${letra}" onclick='cliqueParasita(event);'>
            <div class="item-imagem"><img
                src="img/${filtro.imagem}" id="imagem">
            </div>
            <p class="nome-especie">${filtro.nome}</p>
          </div>
        `;
      var boxLetra = document.querySelector('.box-letra');
      display.innerHTML += HTML;
    });
  });
}
function limpar() {
  var display = document.querySelector('#display-items');
  display.innerHTML = '';
  alfabeto();
}
function pesquisar() {
  if ($(window).width() < 960) {
    var pesquisa = document.querySelector('.pesquisa-mobile-input').value;
  } else {
    var pesquisa = document.querySelector(".pesquisa").value;
  }
  var resultado = parasitas.filter(objeto => objeto.nome.toLowerCase().includes(pesquisa.toLowerCase()));
  var display = document.querySelector('#display-items');
  display.innerHTML = '';

  var resultadoPesquisa = `
  <button id="btnLimpar" onclick='limpar();'>
    <span class="material-icons-outlined" id="limparFiltro">
      highlight_off
    </span>
    Limpar
  </button>
  <h3 id="exibindoResultadosPara">
    Exibindo resultados para: "${pesquisa}"
  </h3>
  `;

  display.innerHTML += resultadoPesquisa;

  resultado.sort((a, b) => a.nome.localeCompare(b.nome));

  // Restante do código para agrupar e exibir os resultados
  var gruposPorLetra = {};

  // Agrupe os parasitas por letra inicial
  resultado.forEach(objeto => {
    var letraInicial = objeto.nome.charAt(0).toLowerCase();
    if (!gruposPorLetra[letraInicial]) {
      gruposPorLetra[letraInicial] = [];
    }
    gruposPorLetra[letraInicial].push(objeto);
  });

  // Ordem alfabética das letras iniciais
  var letrasOrdenadas = Object.keys(gruposPorLetra).sort();

  letrasOrdenadas.forEach(letra => {
    var letraCaps = letra.toUpperCase();
    var htmlLetra = `
        <div class="box-letra" data-index="${letra}">
          <p class="letra"><strong>${letraCaps}</strong></p>
          <button id="btnAlfabeto" class="ativo" onclick="mostrarAlfabeto(event);">
            <span class="material-icons-outlined" id="expandir-icon-alfabeto" data-index="${letra}">
              expand_more
            </span>
          </button>
        </div>
        `
      ;
    display.innerHTML += htmlLetra;

    gruposPorLetra[letra].forEach(filtro => {
      var HTML = `
          <div class="item" data-index="${filtro.id}" id="${letra}" onclick='cliqueParasita(event);'>
            <div class="item-imagem"><img
                src="img/${filtro.imagem}" id="imagem">
            </div>
            <p class="nome-especie">${filtro.nome}</p>
          </div>
      `;

      display.innerHTML += HTML;

    });
  });
}
window.onload = function() {
  const pesquisa = document.querySelector('.pesquisa-mobile-input');

  // Adiciona um ouvinte de evento para detectar mudanças no campo de pesquisa
  pesquisa.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é "Enter" (código 13)
    if (event.key === "Enter") {
      // Evita o comportamento padrão de envio de formulário
      event.preventDefault();

      // Execute a ação que deseja ao pressionar "Enter"
      pesquisar();
    }
  });
}
function mudarNome() {
  var botao = document.querySelector('#popular');

  if (botao.classList.contains('ativo')) {
    var display = document.querySelector('#display-items');
    botao.style.backgroundColor = 'black';
    botao.style.color = 'white';
    //display.innerHTML = '';
    console.log('classe removida');
    popular();
    botao.classList.remove("ativo");
  } else {
    var display = document.querySelector('#display-items');
    //display.innerHTML = '';
    botao.style.backgroundColor = '#E6E6E6';
    botao.style.color = 'black';
    botao.innerHTML = 'Exibir nome popular';
    console.log('classe adicionada');
    botao.classList.add("ativo");
    exibir();
  }
}
let febreMaculosa = {
  id: 1,
  nome: 'Febre Maculosa',
  descricao: 'É uma doença causada pelos parasitas Amblyoma cajannense e  Amblyoma americanum.',
  sintomas: {
    animais: 'Letargia, perda de peso, lesões hemorrágicas, inchaços pelo corpo, vômito e diarreia.',
    humanos: 'Febre, dor no corpo e desânimo.',
  },
  diagnostico: {
    animais: 'Exames de hemograma e bioquímica.',
    humanos: 'Hemograma e enzimas.',
  },
  controle: `
  <li id="#liControle"> Nas pastagens: Limpeza, rotação de pastagens e queima das pastagens (não 100% eficaz, pois algumas larvas não morrem. </li>
  <li id="#liControle"> No Hospedeiro: Banho de imersão, aspersão ou spray (mais recomendado para prenhas) </li>`,
  parasita: ['Amblyoma cajannense', 'Amblyoma americanum'],
}
let borrelyoseCanina = {
  id: 2,
  nome: 'Borrelyose canina (Lyme)',
  descricao: 'É uma doença causada pelos parasitas Amblyoma cajannense e  Amblyoma americanum.',
  sintomas: {
    animais: 'Miocardite, sensibilidade ao toque, falta de ar, paralisia, encefalite,insuficiência renal, aborto (em fêmeas prenhas).',
    humanos: 'Sede excessiva, dores abdominais, dores musculares, febre, perda de peso, aumento da quantidade de urina, inchaço dos gânglios linfáticos, eritrema migratório.',
  },
  diagnostico: {
    animais: 'Exames de sangue, teste de anticorpos e análise de pelo junto á picada.',
    humanos: 'Exames de sangue. Exame de uma amostra de líquido articular ou de líquido cefalorraquidiano (obtida por punção lombar).',
  },
  controle: `
  <li id="#liControle">
    Ao frequentar ambientes com florestas, parques e áreas rurais, devem ser adotadas medidas preventivas, como utilizar acaricidas nos sapatos, usar roupas que cubram o corpo e, se for observada, a presença de carrapatos na pele. remove-los o mais rapidamente possível para diminuir a possibilidade de transmissão de patógenos. 
  </li>`,
  parasita: ['Amblyoma cajannense', 'Amblyoma americanum'],
}
let erliquioseCanina = {
  id: 3,
  nome: 'Erliquiose canina',
  descricao: 'É uma doença causada pelo parasita Rhipicephalus sanguineus.',
  sintomas: {
    animais: 'Apatia, falta de apetite, febre, vômitos, diarreia, sangue pelo nariz, respiração ofegante e mucosas pálidas (sinal de anemia)',
    humanos: '',
  },
  diagnostico: {
    animais: 'Esfregaço sanguíneo, é necessário coletar as amostras de capilares. Teste sorológico.',
    humanos: '',
  },
  controle: `
    <li id="#liControle"> Aplicação de banhos carrapaticidas nos cães 2 ou 3 vezes, no intervalo de 14 dias. </li> 
    <li id="#liControle"> Manter o ambiente limpo e com baixa vegetação </li> 
    <li id="#liControle"> Aplicação de acaricidas nas paredes, tetos, pisos. </li> 
    <li id="#liControle"> Higiene e isolamento dos cães. </li> 
  `,
  parasita: 'Rhipicephalus sanguineus',
}
let babesioseBovina = {
  id: 4,
  nome: 'Babesiose bovina',
  descricao: 'É uma doença causada pelos parasitas Dermacentor nitens e Rhipicephalus microplus.',
  sintomas: {
    animais: 'Febre, icterícia (pele e mucosas amareladas), anemia, anorexia, hemoglobinúria (presença de hemoglobina na urina), hepatomegalia (aumento do tamanho do fígado), inchaço nas extremidades, lacrimejamento, secreção nasal, incoordenação motora, desconforto abdominal.',
    humanos: '',
  },
  diagnostico: {
    animais: 'No hemograma, geralmente, são avaliados os seguintes parâmetros: contagem de eritrocitos, hematócritos e diferencial de leucocitos. Além do hemograma, existem outros testes laboratoriais, como o PCR, Babesia IgG e IgM e pesquisa de protozoários no sangue.',
    humanos: '',
  },
  controle: `
  <li id="#liControle"> Nas pastagens: Limpeza, rotação de pastagens e queima das pastagens (não 100% eficaz, pois algumas larvas não morrem </li>
  <li id="#liControle"> No Hospedeiro: Banho de imersão, aspersão ou spray (mais recomendado para prenhas) </li>
`,
  parasita: ['Dermacentor nitens', 'Rhipicephalus microplus']
}
var doencas = [febreMaculosa, borrelyoseCanina, erliquioseCanina, babesioseBovina];

function exibirDoencas() {
  var display = document.querySelector('#display-items')
  for (const parasita of parasitas) {
    var htmlLetra = `
        <div class="box-letra" data-index="${parasita.nome}">
          <p class="letra" id="nomeDoenca"><strong>${parasita.nome}</strong></p>
          <button id="btnAlfabeto" class="ativo" onclick="mostrarAlfabeto(event);">
            <span class="material-icons-outlined" id="expandir-icon-alfabeto" data-index="${parasita.nome}">
              expand_more
            </span>
          </button>
        </div>
          `;
    display.innerHTML += htmlLetra;
    for (const doenca of doencas) {
      if (doenca.parasita.includes(parasita.nome)) {
        var HTML = `

                  <div class="itemDoenca" data-index="${doenca.id}" id="${parasita.nome}" onclick='cliqueDoenca(event);'>
                    <ul>
                      <li class="nome-doenca">${doenca.nome}</li>
                    </ul>
                  </div>

              `;
        display.innerHTML += HTML;

      }
    }
  }
}
function mostrarDoenca(event) {
  var letra = event.currentTarget.querySelector('#expandir-icon-alfabeto').getAttribute("data-index");
  console.log(letra);
  id = '#' + letra;
  itens = document.querySelectorAll('' + id + '');
  console.log(itens);
  console.log(itens.length);
  expandirIcon = document.querySelector('#expandir-icon-alfabeto[data-index="' + letra + '"]');
  if ($(event.currentTarget).hasClass("ativo")) {
    itens.forEach(function(item) {
      event.currentTarget.classList.remove('ativo');
      event.currentTarget.classList.add('desativado');
      item.style.display = "none";
      item.style.opacity = "0";
      expandirIcon.style.transform = 'rotate(0deg)';
    });
  } else {
    itens.forEach(function(item) {
      event.currentTarget.classList.remove('desativado');
      event.currentTarget.classList.add('ativo');
      item.style.display = "block";
      item.style.opacity = "100%";
      expandirIcon.style.transform = 'rotate(180deg)';
    });
  }
}
function cliqueDoenca(event) {
  var exibirDoenca = document.querySelector('#exibirDoenca');
  exibirDoenca.style.display = 'block';
  const index = parseInt(event.currentTarget.getAttribute("data-index"));
  console.log("Clicado na div com índice " + index);
  console.log(index)
  var acharDoenca = doencas.find(function(objeto) {
    return objeto.id === index;
  });

  console.log(acharDoenca);
  //pega variáveis
  var fundo = document.querySelector('.fundo');
  var displayitems = document.querySelector('#display-items');
  var nomeDoenca = document.querySelector('#nomeDoenca');
  var textoDesc = document.querySelector('#textoDesc');
  var textoSintAnimais = document.querySelector('#textoSintAnimais');
  var textoSintHumanos = document.querySelector('#textoSintHumanos')
  var textoDiagAnimais = document.querySelector('#textoDiagnosticoAnimais');
  var textoDiagHumanos = document.querySelector('#textoDiagnosticoHumanos');
  var textoTrat = document.querySelector('#textoTratamento');


  //passa as informações para o html
  nomeDoenca.innerHTML = acharDoenca.nome;
  textoDesc.innerHTML = acharDoenca.descricao;

  if (acharDoenca.sintomas.animais != '') {
    textoSintAnimais.innerHTML = `Sintomas em animais:  ${acharDoenca.sintomas.animais}`;
  } else {
    textoSintAnimais.innerHTML = '';
  }

  if (acharDoenca.sintomas.humanos != '') {
    textoSintHumanos.innerHTML = `<br>Sintomas em humanos: ${acharDoenca.sintomas.humanos}`;
  } else {
    textoSintHumanos.innerHTML = '';
  }

  if (acharDoenca.diagnostico.animais != '') {
    textoDiagAnimais.innerHTML = `Diagnóstico em animais:  ${acharDoenca.diagnostico.animais}`;
  } else {
    textoDiagAnimais.innerHTML = '';
  }

  if (acharDoenca.diagnostico.humanos != '') {
    textoDiagHumanos.innerHTML = `<br>Diagnóstico em humanos: ${acharDoenca.diagnostico.humanos}`;
  } else {
    textoDiagHumanos.innerHTML = '';
  }

  textoControle.innerHTML = acharDoenca.controle;
  var dadosParasitas = document.querySelector('.dadosParasita');
  dadosParasitas.innerHTML = '';
  var parasitasDoenca = Array.isArray(acharDoenca.parasita) ? acharDoenca.parasita : [acharDoenca.parasita];
  for (const parasitaDoenca of parasitasDoenca) {
    var acharParasita = parasitas.find(function(objeto) {
      return objeto.nome === parasitaDoenca;
    });
    console.log(acharParasita);
    var cardParasitas = `
            <div class="cardParasita">
              <div class="foto-exibir-doenca"><img src="../img/${acharParasita.imagem}" id="imgExibir"></div>
              <p class="nome-exibir-doenca" id="nomeCientificoParasita"><strong>${acharParasita.nome}</strong></p>
              <br><br><br>
              <p class="nome-popular-exibir-doenca" id="nomePopular">${acharParasita.popular}</p>
              <br>
              <p class="nome-popular-exibir-doenca" id="">${acharParasita.familia}</p>
              <br>
            </div>
        `;
    dadosParasitas.innerHTML += cardParasitas;


  }


  /*
  console.log(acharDoenca.parasita);

  var acharParasita = parasitas.find(function(objeto) {
    return objeto.nome === acharDoenca.parasita;
  })
  console.log(acharParasita);

  //retorna nome dos parasitas

  acharDoencaParasitas.find(function(acharDoencaParasita) {
    return acharDoencaParasita.nome;
  });
  console.log(acharDoencaParasitas);  
  //procura parasitas com o mesmo nome

  var acharParasita = parasitas.find(function(objeto) {
    return objeto.nome === acharDoenca.parasita;
  });

  console.log(acharParasita);

*/
  exibirBox.style.display = 'block';
  var menu = document.querySelector('.menu-lateral');
  if (menu.style.width === '20%') {
    if ($(window).width() > 960) {
      displayitems.style.width = '60%';
      displayitems.style.margin = '63px 20%';
    }
  } else {
    if ($(window).width() > 960) {
      displayitems.style.width = '78%';
      displayitems.style.margin = '63px 293px';
    }
  }

  if ($(window).width() < 960) {
    fundo.style.display = 'block';
  }

}

function menuDoenca(event) {

  /* menu */

  var menu = document.querySelector('.menuDoenca');

  /* lis */
  var liDescricao = document.querySelector('[data-index="descricao"]');
  var liDescricaoSelec = document.querySelector('[data-index="descricao"]#selecionado');
  var liSintomas = document.querySelector('[data-index="sintomas"]');
  var liSintomasSelec = document.querySelector('[data-index="sintomas"]#selecionado');
  var liDiagnostico = document.querySelector('[data-index="diagnostico"]');
  var liDiagnosticoSelec = document.querySelector('[data-index="diagnostico"]#selecionado');
  var liTratamento = document.querySelector('[data-index="controle"]');
  var liTratamentoSelec = document.querySelector('[data-index="controle"]#selecionado');
  var liParasita = document.querySelector('[data-index="parasita"]');
  var liParasitaSelec = document.querySelector('[data-index="parasita"]#selecionado');
  var ulDoenca = document.querySelector('.ulDoenca')
  var liDoencas = document.querySelectorAll('.liDoenca');
  var dadosParasita = document.querySelector('.dadosParasita');
  /* indicador */
  var indicador = document.querySelector('.indicador');
  /* texto */
  var textoDesc = document.querySelector('#textoDesc');
  var textoSintAnimais = document.querySelector('#textoSintAnimais');
  var textoSintHumanos = document.querySelector('#textoSintHumanos')
  var textoDiagAnimais = document.querySelector('#textoDiagnosticoAnimais');
  var textoDiagHumanos = document.querySelector('#textoDiagnosticoHumanos');
  var textoControle = document.querySelector('#textoControle');
  const index = event.currentTarget.getAttribute("data-index");
  console.log("Clicado na div com índice " + index);

  if (index === 'descricao') {
    if (liDescricaoSelec) {
      console.log('Já possui id');
    } else {
      liDoencas.forEach(function(liDoenca) {
        liDoenca.removeAttribute('id');
      });
      liDescricao.setAttribute('id', 'selecionado');
      menu.style.height = '28%';
      indicador.style.width = '27%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 0px';
      textoDesc.style.display = 'block';
      textoSintAnimais.style.display = 'none';
      textoSintHumanos.style.display = 'none';
      textoDiagAnimais.style.display = 'none';
      textoDiagHumanos.style.display = 'none';
      textoControle.style.display = 'none';
      dadosParasita.style.display = 'none';
    }
  }
  if (index === 'sintomas') {
    if (liSintomasSelec) {
      console.log('Já possui id');
    } else {
      liDoencas.forEach(function(liDoenca) {
        liDoenca.removeAttribute('id');
      });
      liSintomas.setAttribute('id', 'selecionado');
      menu.style.height = '28%';
      indicador.style.width = '23%';
      indicador.style.height = '5%';
      ulDoenca.style.margin = '0px 0px';
      indicador.style.margin = '0px 98px';
      textoDesc.style.display = 'none';
      textoSintAnimais.style.display = 'block';
      textoSintHumanos.style.display = 'block';
      textoDiagAnimais.style.display = 'none';
      textoDiagHumanos.style.display = 'none';
      textoControle.style.display = 'none';
      dadosParasita.style.display = 'none';
    }
  }
  if (index === 'diagnostico') {
    if (liDiagnosticoSelec) {
      console.log('Já possui id');
    } else {
      liDoencas.forEach(function(liDoenca) {
        liDoenca.removeAttribute('id');
      });
      liDiagnostico.setAttribute('id', 'selecionado');
      menu.style.height = '28%';
      indicador.style.width = '31%';
      indicador.style.height = '5%';
      ulDoenca.style.margin = '0px 0px';
      indicador.style.margin = '0px 180px';
      textoDesc.style.display = 'none';
      textoSintAnimais.style.display = 'none';
      textoSintHumanos.style.display = 'none';
      textoDiagAnimais.style.display = 'block';
      textoDiagHumanos.style.display = 'block';
      textoControle.style.display = 'none';
      dadosParasita.style.display = 'none';

    }
  }
  if (index === 'controle') {
    if (liTratamentoSelec) {
      console.log('Já possui id');
    } else {
      liDoencas.forEach(function(liDoenca) {
        liDoenca.removeAttribute('id');
      });
      liTratamento.setAttribute('id', 'selecionado');
      menu.style.height = '28%';
      indicador.style.width = '24%';
      indicador.style.height = '5%';
      ulDoenca.style.margin = '0px -80px';
      indicador.style.margin = '0px 210px';
      textoDesc.style.display = 'none';
      textoSintAnimais.style.display = 'none';
      textoSintHumanos.style.display = 'none';
      textoDiagAnimais.style.display = 'none';
      textoDiagHumanos.style.display = 'none';
      textoControle.style.display = 'block';
      dadosParasita.style.display = 'none';
    }
  }
  if (index === 'parasita') {
    if (liParasitaSelec) {
      console.log('Já possui id');
    } else {
      liDoencas.forEach(function(liDoenca) {
        liDoenca.removeAttribute('id');
      });
      liParasita.setAttribute('id', 'selecionado');
      menu.style.height = '12%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 300px';
      textoDesc.style.display = 'none';
      textoSintAnimais.style.display = 'none';
      textoSintHumanos.style.display = 'none';
      textoDiagAnimais.style.display = 'none';
      textoDiagHumanos.style.display = 'none';
      textoControle.style.display = 'none';
      dadosParasita.style.display = 'block';
    }
  }
}
function menuParasita(event) {

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

  var ulTaxonomia = document.querySelector('.ulTaxonomia');
  var nomeCientifico = document.querySelector('#nomeCientifico');
  var nomePopular = document.querySelector('#nomePopular');
  var descricao = document.querySelector('#descricao');
  var hospedeiro = document.querySelector('#hospedeiro');
  var ciclo = document.querySelector('#ciclo');
  var reproducao = document.querySelector('#reproducao');
  var doencas = document.querySelector('.ulDoencaNome');

  const index = event.currentTarget.getAttribute("data-index");
  console.log("Clicado na div com índice " + index);
  if (index === 'resumo') {
    if (liResumoSelec) {
      console.log('Já possui id');
    } else {
      swipe = 0;
      liParasitas.forEach(function(liParasita) {
        liParasita.removeAttribute('id');
      });
      liResumo.setAttribute('id', 'selecionado');
      menu.style.height = '12%';
      menu.style.margin = '0px 0px';
      indicador.style.width = '24%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 0px';
      ulTaxonomia.style.display = 'block';
      descricao.style.display = 'none';
      ciclo.style.display = 'none';
      reproducao.style.display = 'none';
      boxCard.style.display = 'none';
      doencas.style.display = 'none';
      dadosParasita.style.display = 'none';


    }
  }
  if (index === 'descricao') {
    if (liDescricaoSelec) {
      console.log('Já possui id');
    } else {
      swipe = 1;
      liParasitas.forEach(function(liParasita) {
        liParasita.removeAttribute('id');
      });
      liDescricao.setAttribute('id', 'selecionado');
      menu.style.height = '12%';
      menu.style.margin = '0px 0px';
      indicador.style.width = '27%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 82px';
      ulTaxonomia.style.display = 'none';
      descricao.style.display = 'block';
      ciclo.style.display = 'none';
      reproducao.style.display = 'none';
      boxCard.style.display = 'none';
      doencas.style.display = 'none';
      dadosParasita.style.display = 'none';

    }
  }
  if (index === 'ciclo') {
    if (liCicloSelec) {
      console.log('Já possui id');
    } else {
      swipe = 2;
      liParasitas.forEach(function(liParasita) {
        liParasita.removeAttribute('id');
      });
      liCiclo.setAttribute('id', 'selecionado');
      menu.style.height = '12%';
      menu.style.margin = '0px 0px';
      indicador.style.width = '17%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 175px';
      ulTaxonomia.style.display = 'none';
      descricao.style.display = 'none';
      ciclo.style.display = 'block';
      reproducao.style.display = 'none';
      boxCard.style.display = 'none';
      doencas.style.display = 'none';
      dadosParasita.style.display = 'none';
    }
  }
  if (index === 'reproducao') {
    if (liReproducaoSelec) {
      console.log('Já possui id');
    } else {
      swipe = 3;
      liParasitas.forEach(function(liParasita) {
        liParasita.removeAttribute('id');
      });
      liReproducao.setAttribute('id', 'selecionado');
      menu.style.height = '12%';
      menu.style.margin = '0px -100px';
      indicador.style.width = '30%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 238px';
      ulTaxonomia.style.display = 'none';
      descricao.style.display = 'none';
      ciclo.style.display = 'none';
      reproducao.style.display = 'block';
      boxCard.style.display = 'none';
      doencas.style.display = 'none';
      dadosParasita.style.display = 'none';
    }
  }
  if (index === 'hospedeiros') {
    if (liHospedeirosSelec) {
      console.log('Já possui id');
    } else {
      swipe = 4;
      liParasitas.forEach(function(liParasita) {
        liParasita.removeAttribute('id');
      });
      liHospedeiros.setAttribute('id', 'selecionado');
      menu.style.height = '12%';
      menu.style.margin = '0px -165px';
      indicador.style.width = '30%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 345px';
      ulTaxonomia.style.display = 'none';
      descricao.style.display = 'none';
      ciclo.style.display = 'none';
      reproducao.style.display = 'none';
      boxCard.style.display = 'block';
      doencas.style.display = 'none';
      dadosParasita.style.display = 'none';
    }
  }
  if (index === 'doencas') {
    if (liDoencasSelec) {
      console.log('Já possui id');
    } else {
      swipe = 5;
      liParasitas.forEach(function(liParasita) {
        liParasita.removeAttribute('id');
      });
      liDoencas.setAttribute('id', 'selecionado');
      menu.style.height = '12%';
      menu.style.margin = '0px -165px';
      indicador.style.width = '30%';
      indicador.style.height = '5%';
      indicador.style.margin = '0px 450px';
      ulTaxonomia.style.display = 'none';
      descricao.style.display = 'none';
      ciclo.style.display = 'none';
      boxCard.style.display = 'none';
      doencas.style.display = 'block';
      dadosParasita.style.display = 'none';
    }
  }
}
/* 
  var display = document.querySelector('#display-items');
      display.innerHTML = `
        <div class="box-letra">
          <p class="letra">${letra}</p>
          <br><br><br>
          <div class="item" data-index="${filtro.id}" onclick='cliqueParasita();'>
            <div class="item-imagem"><img
                src="img/${filtro.imagem}" id="imagem">
            </div>
            <p class="nome-especie">${filtro.nome}</p>
          </div>
        </div>
      `;
*/
