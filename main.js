let listaLugares =[
    {
        "name":"Pacotes para São Paulo",
        "img": "./img/sao-paulo.jpg",
        "descricao": "Viaje para São Paulo, terra da garoa e centro empresarial e cultural do Brasil pelo melhor Preço!",
        "item1":" 5 dias/ 4 noites",
        "item2":" Voo direto BSB -> SP",
        "item3":" Royal Master Hotel"
    },
    {
        "name":"Pacotes para Salvador",
        "img": "./img/salvador.jpg",
        "descricao": "Descubra Salvador, a cidade da alegria e berço da cultura baiana, por um preço que cabe no seu bolso!",
        "item1":" 5 dias/ 4 noites",
        "item2":" Voo direto BSB -> Salvador",
        "item3":" Hotel três Amores"
    },
    {
        "name":"Pacotes para Maceió",
        "img": "./img/maceio.jpg",
        "descricao": "Relaxe nas praias paradisíacas de Maceió, onde o sol brilha o ano inteiro, sem estourar o seu orçamento!",
        "item1":" 8 dias/ 7 noites",
        "item2":" Voo direto BSB -> Maceió",
        "item3":" Hotel Fonte Azul"
    },
    {
        "name":"Pacotes para Rio de Janeiro",
        "img": "./img/rio-de-janeiro.jpg",
        "descricao": "Viva a magia do Rio de Janeiro, com suas praias deslumbrantes, por um preço inesquecível!",
        "item1":" 5 dias/ 4 noites",
        "item2":" Voo direto BSB -> RJ",
        "item3":" Hotel Copacabana Palace"
    },
    {
        "name":"Pacotes para República Dominicana",
        "img": "./img/republica-dominicana.jpg",
        "descricao": "Desfrute das praias de areias douradas e das águas cristalinas da República Dominicana, sem gastar muito!",
        "item1":" 4 dias/ 3 noites",
        "item2":" Voo com paradas BSB-> RPD",
        "item3":" Hotel Fuerza Tropical"
    },
    {
        "name":"Pacotes para Toscana",
        "img": "./img/toscana.jpg",
        "descricao": "Explore a beleza intemporal da Toscana, com suas vinícolas encantadoras e paisagens de tirar o fôlego, sem comprometer suas finanças!",
        "item1":" 4 dias/ 3 noites",
        "item2":" Voo com paradas BSB -> TOS",
        "item3":" Hotel Dolce Campo"
    },
    {
        "name":"Pacotes para Suíça",
        "img": "./img/suica.jpg",
        "descricao": "Viva a experiência suíça, com suas montanhas majestosas e cidades encantadoras, por um preço que torna esse destino incrível acessível!",
        "item1":" 5 dias/ 4 noites",
        "item2":" Voo com paradas BSB -> SUI",
        "item3":" Hotel Royal Place"
    },
    {
        "name":"Pacotes para Paris",
        "img": "./img/paris.jpg",
        "descricao": "Embarque em uma jornada romântica pela Cidade das Luzes, Paris, sem que isso pese no seu bolso, e viva momentos inesquecíveis!",
        "item1":" 4 dias/ 3 noites",
        "item2":" Voo com paradas BSB -> FRA",
        "item3":" Hotel Bijou à Paris"
    },
]

listaLugares.map((lugar, posicao) =>{
    let cardLugar = document.getElementById("cards");
    cardLugar.innerHTML += `
    <div class="col-md-3 " id="pacote">
            <div id="card" class="card m-2 flex-fill" style="heigth: 16rem;">
                <img src="${lugar.img}" class="card-img-top card-image-bottom" alt="..." style="width: 243">
                <div class="card-body flex-fill">
                  <h5 class="card-title fonte-texto">${lugar.name}</h5>
                  <p id="descricao" class="card-text fonte-texto">${lugar.descricao}</p>
                </div>
                <ul class="list-group list-group-flush flex-fill">
                  <li class="list-group-item fonte-texto flex-fill h-10"><i class="bi bi-brightness-alt-high"></i>${lugar.item1}</li>
                  <li class="list-group-item fonte-texto flex-fill h-10"><i class="bi bi-airplane"></i>${lugar.item2}</li>
                  <li class="list-group-item fonte-texto flex-fill h-10"><i class="bi bi-building"></i>${lugar.item3}</li>
                </ul>
                <div class="card-body flex-fill h-20">
                    <button id="agendar-button" class="btn btn-secondary fonte-texto" type="submit">Agendar</button>
                    <button type="button" class="btn btn-outline-danger" onClick="changeColorFav(${posicao})"><i class="heart bi bi-heart"></i></button>
                </div>
              </div>
          </div>`
})

function changeColorFav(posicao){
    if(document.getElementsByClassName("heart")[posicao].getAttribute("class") == "heart bi bi-heart"){
        document.getElementsByClassName("heart")[posicao].setAttribute("class","heart bi bi-heart-fill");
    }else{
        document.getElementsByClassName("heart")[posicao].setAttribute("class","heart bi bi-heart");
    };
}