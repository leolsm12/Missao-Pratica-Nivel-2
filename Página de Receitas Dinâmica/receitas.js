const card = document.getElementById('card');
const listaIgre = [];

fetch('./conteudoReceitas.json')
  .then(response => response.json())
  .then(data => {
    const lista = data.receitas.map(receita => receita);

    console.log(lista)


    for (let receita in lista) {
      if (lista.hasOwnProperty(receita)) {
        const receitas =lista[receita]
        console.log(receitas);
        const titulo = receitas.titulo;
        console.log(titulo);

        const preparo = receitas.preparo;
        console.log(preparo);
        const foto = receitas.foto;
        console.log(foto)

     
        const listaIngredientes = receitas.ingredientes.map(ingrediente => `<li >${ingrediente}</li>`).reduce((prev, curr) => prev + curr, '');
             
        const newHtml =  `
          <div class="card">
              <img src="${foto}" class="card-img-top" alt="${titulo}">
            <div class="card-body">
              <h5 class="card-title">${titulo}</h5>
            </div>
              <ul id="lista">${listaIngredientes}</ul>
            <div class="card-body">
              <hr>
              <p class="card-text">${preparo}</p>
            </div>
          </div>
    `
    card.innerHTML += newHtml
  


   
    
    
    
    
      }
    } 

  })
   
  
    





//I
//function getListaIngredientes(receita) {
//  const lista = receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).reduce((total, item) => total + item, '');
//  return `<ul>${lista}</ul>`;
//}
//getListaIngredientes()
//function getCard(receita) {
//  return `            <div class="card" >
//  <img src="" class="card-img-top" alt="arroz de couve flor">
//  <div class="card-body">
//      <h5 class="card-title">Arroz de Couve-Flor</h5>
//      <ul>
//          <li>Arroz</li>
//          <li>Couve-Flor</li>
//          <li>Cebola Média</li>
//          <li>Azeite</li>
//      </ul>
//      <hr>
//      <p class="card-text">Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.</p>
//  </div>
//</div>`
    

//}

// J
