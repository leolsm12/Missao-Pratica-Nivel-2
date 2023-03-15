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
   
  
    






