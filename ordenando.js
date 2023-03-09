let valor = document.getElementById("valor");
const lista = document.getElementById('valores');
const Numeros = []
const selecao = document.getElementById("seleção");



// adicinando 
const listHtml = document.querySelector('#valores');
const criarLista = (numeros, elementoHtml) => {
  let novaLista = '';
  for (let i = 0; i < numeros.length; i++) {
    novaLista += `<li>${numeros[i]}</li>`;
  }
  elementoHtml.innerHTML = novaLista;
}

const add = () => {
    Numeros.push(valor.value);
    valor.value = '';
    console.log(Numeros);
  
    criarLista(Numeros, listHtml);
    
}

const ordenar = () => {
    Numeros.sort(function(a, b) {
        return a - b;
    });
        
    
    criarLista(Numeros, listHtml);
}

const misturar = () => {
    for (let i = Numeros.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [Numeros[i], Numeros[j]] = [Numeros[j], Numeros[i]];
      }
      
      criarLista(Numeros, listHtml);
}


//seleção de função
const mySelect = document.getElementById("seleção");

mySelect.addEventListener("change", () => {
  const selectedValue = mySelect.value;
  if (selectedValue === "1") {
    // função a ser executada ao selecionar a opção 1
    document.getElementById("Mentra").innerHTML = ''
    bubble_sort(Numeros);
    console.log("Opção 1 selecionada");
  } else if (selectedValue === "2") {
    document.getElementById("Mentra").innerHTML = ''
    quick_sort(Numeros,0,Numeros.length - 1);
    
    console.log(Numeros)

    console.log("Opção 2 selecionada");

  } else if (selectedValue === "3") {
    // função a ser executada ao selecionar a opção 3
    const campos = `
    <input type="number" class="form-control" id="pos1" placeholder="pos1">
    <input type="number" class="form-control" id="pos2" placeholder="pos2">
    <button id="aplicar" type="button" class="btn btn-primary btn-sm">Aplicar</button>
    `;
    document.getElementById("Mentra").innerHTML = campos
    const botao = document.getElementById("aplicar");
    const pos1 = document.getElementById("pos1");
    const pos2 = document.getElementById("pos2");

    botao.addEventListener("click", function() {
        console.log("Vetor original: ", Numeros); 
        swap(Numeros,pos1.value,pos2.value);
        console.log(pos1.value);
        console.log(pos2.value);
      });   
    console.log("Opção 3 selecionada");
    
    
  }else if (selectedValue === "4") {
    // função a ser executada ao selecionar a opção 2
    const campos = ` 
    <input type="number" class="form-control" id="pos1" placeholder="pos1">
    <button id="aplicar" type="button" class="btn btn-primary btn-sm">Aplicar</button>
    `;
    document.getElementById("Mentra").innerHTML = campos
    const botao = document.getElementById("aplicar");
    const pos1 = document.getElementById("pos1");
    botao.addEventListener("click", function() {
        console.log("Vetor original: ", Numeros); 
        shuffle(Numeros,pos1.value);
        console.log(pos1.value);
        
    });   
    console.log("Opção 4 selecionada");

  }else if (selectedValue === "5") {
    selection_sort(Numeros)
    console.log("Opção 5 selecionada");

  }
}); 

  
//Função swap, Troca os valores das posições posição1 e posição1 do vetor
const swap = (Numeros, posicao1, posicao2) => {
  [Numeros[posicao1], Numeros[posicao2]] = [Numeros[posicao2], Numeros[posicao1]];
  console.log("Vetor após a troca: ", Numeros);
  criarLista(Numeros, listHtml);

};


// função shuflle Embaralha o vetor realizando n trocas
const shuffle = (arr, numSwaps) => {
  for(let i = 0; i < numSwaps; i++) {
    const pos1 = Math.floor(Math.random() * arr.length);
    const pos2 = Math.floor(Math.random() * arr.length);
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  }
  criarLista(Numeros, listHtml);
  
}


// função bubble sort
const bubble_sort = (Numeros) => {
    let len = Numeros.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (Numeros[j] > Numeros[j + 1]) {
          [Numeros[j], Numeros[j + 1]] = [Numeros[j + 1], Numeros[j]];
        }
      }
    }
    return criarLista(Numeros, listHtml);

        
}


// função selection sort
const selection_sort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return criarLista(Numeros, listHtml);
    
}


// função quick sort
const quick_sort = (arr, inicio = 0, fim = arr.length - 1) => {
  if (inicio < fim) {
    let pivotIndex = partition(arr, inicio, fim);
    quick_sort(arr, inicio, pivotIndex - 1);
    quick_sort(arr, pivotIndex + 1, fim);
  }
  return criarLista(Numeros, listHtml);
  
  
}

const partition = (arr, inicio, fim) => {
let pivot = arr[fim];
let i = inicio - 1;
for (let j = inicio; j < fim; j++) {
  if (arr[j] <= pivot) {
    i++;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
[arr[i + 1], arr[fim]] = [arr[fim], arr[i + 1]];
return i + 1;

}




 
